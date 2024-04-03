namespace Tennis
{
    public class TennisGame1 : ITennisGame
    {
        private readonly Player player1;
        private readonly Player player2;

        public TennisGame1(string player1Name, string player2Name)
        {
            player1 = new Player(player1Name);
            player2 = new Player(player2Name);
        }

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

        public string GetScore()
        {
            if (PlayerScoresAreEqual())
            {
                return DetermineEqualScoreState(player1.Score);
            }

            if (EitherPlayerScoreIsWinner())
            {
                return DeterminePlayerAdvantage();
            }

            return $"{player1.ScoreString}-{player2.ScoreString}";
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
            int scoreDifference = player1.Score - player2.Score;

            if (scoreDifference == 1)
            {
                return "Advantage player1";
            }

            if (scoreDifference == -1)
            {
                return "Advantage player2";
            }

            if (scoreDifference >= 2)
            {
                return "Win for player1";
            }

            return "Win for player2";
        }
    }
}

