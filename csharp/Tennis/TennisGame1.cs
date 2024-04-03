namespace Tennis
{
    public class TennisGame1 : ITennisGame
    {
        private Player advantage;
        private Player winner;
        private string scoreDescription;

        public TennisGame1(string player1Name, string player2Name)
        {
            Player1 = new Player(player1Name);
            Player2 = new Player(player2Name);
        }

        public Player Player1 { get; }
        public Player Player2 { get; }

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
                Player1.IncreaseScore();
            }
            else
            {
                Player2.IncreaseScore();
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
            if (Player1.HasAdvantageOver(Player2))
            {
                advantage = Player1;
            }
            else if (Player2.HasAdvantageOver(Player1))
            {
                advantage = Player2;
            }
            else if (Player1.HasWinningScoreAgainst(Player2))
            {
                winner = Player1;

                winner.TrackWin();
            }
            else
            {
                // Player 2 must have a 2 point lead, and is therefore the winner
                winner = Player2;

                winner.TrackWin();
            }
        }

        private void UpdateScoreDescription()
        {
            if (PlayerScoresAreEqual())
            {
                scoreDescription = DetermineEqualScoreState(Player1.Score);
            }
            else if (EitherPlayerScoreIsWinner())
            {
                scoreDescription = DeterminePlayerAdvantage();
            }
            else
            {
                scoreDescription = $"{Player1.ScoreString}-{Player2.ScoreString}";
            }
        }

        private bool PlayerScoresAreEqual() => Player1.Score == Player2.Score;

        // TODO: Use a meaningful constant value instead of a magic number here.
        private bool EitherPlayerScoreIsWinner() => Player1.Score >= 4 || Player2.Score >= 4;

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

                Player1.ResetScore();
                Player1.ResetScore();
            }
        }

        public string GetScore() => scoreDescription;
    }
}

