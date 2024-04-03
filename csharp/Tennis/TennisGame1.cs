namespace Tennis
{
    public class TennisGame1 : ITennisGame
    {
        private readonly Player player1;
        private readonly Player player2;

        private Player advantage;
        private Player winner;
        private string scoreDescription;

        public TennisGame1(string player1Name, string player2Name)
        {
            player1 = new Player(player1Name);
            player2 = new Player(player2Name);
        }

        public int NumberOfGamesWon { get; private set; }

        public void WonPoint(string playerName)
        {
            // Note: Comparing the player name against a magic string is prone to
            // encounter errors, as it relies on the player1Name variable passed
            // to the constructor being set to "player1". Requiring this internally
            // will either lead to a bug if the name is not that, or makes the
            // specification of the player name redundant.
            // 
            // An improvement would be:
            //
            // if (playerName == player1.Name)
            if (playerName == "player1")
            {
                player1.IncreaseScore();
            }
            else
            {
                player2.IncreaseScore();
            }
        }

        // Note: Ideally, we would perform this check as soon as a point is won,
        // but since the tests set all of the points upfront and THEN want to
        // check the final state, we need to separate it out into 2 steps. Otherwise,
        // we will trigger a win condition prematurely in the tests.
        public void CheckForWinner()
        {
            CompareScores();
            UpdateScoreDescription();
            ResetScoresIfThereIsAWinner();
        }

        private void CompareScores()
        {
            if (!EitherPlayerScoreIsWinner())
            {
                return;
            }

            // Note: Refactored to using methods instead of magic numbers here
            // to improve readability. It does result in extra mathmatical
            // operations at runtime, but the performance implications will be
            // negligible.
            if (player1.HasAdvantageOver(player2))
            {
                advantage = player1;
            }
            else if (player2.HasAdvantageOver(player1))
            {
                advantage = player2;
            }
            else if (player1.HasWinningScoreAgainst(player2))
            {
                winner = player1;

                NumberOfGamesWon++;
            }
            else
            {
                // Player 2 must have a 2 point lead, and is therefore the winner
                winner = player2;

                NumberOfGamesWon++;
            }
        }

        private void UpdateScoreDescription()
        {
            if (PlayerScoresAreEqual())
            {
                scoreDescription = DetermineEqualScoreState(player1.Score);
            }
            else if (EitherPlayerScoreIsWinner())
            {
                scoreDescription = DeterminePlayerAdvantage();
            }
            else
            {
                scoreDescription = $"{player1.ScoreString}-{player2.ScoreString}";
            }
        }

        private bool PlayerScoresAreEqual() => player1.Score == player2.Score;

        // TODO: Use a meaningful constant value instead of a magic number here.
        private bool EitherPlayerScoreIsWinner() => player1.Score >= 4 || player2.Score >= 4;

        private static string DetermineEqualScoreState(int score)
        {
            // TODO: Use const values instead of magic strings.
            switch (score)
            {
                case 0:
                    return "Love-All";

                case 1:
                    return "Fifteen-All";

                case 2:
                    return "Thirty-All";

                default:
                    return "Deuce";
            }
        }

        private string DeterminePlayerAdvantage()
        {
            if (winner != null)
            {
                return $"Win for {winner.Name}";
            }

            return $"Advantage {advantage.Name}";
        }

        private void ResetScoresIfThereIsAWinner()
        {
            if (winner != null)
            {
                advantage = null;
                winner = null;

                player1.ResetScore();
                player2.ResetScore();
            }
        }

        public string GetScore() => scoreDescription;
    }
}

