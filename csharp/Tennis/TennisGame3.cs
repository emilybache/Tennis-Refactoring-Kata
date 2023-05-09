namespace Tennis
{
    public class TennisGame3 : ITennisGame
    {
        private int player2Points;
        private int player1Points;
        private string player1Name;
        private string player2Name;
        public static readonly string[] POINTS_NAMES = new[] { "Love", "Fifteen", "Thirty", "Forty" };

        public TennisGame3(string player1Name, string player2Name)
        {
            this.player1Name = player1Name;
            this.player2Name = player2Name;
        }

        public string GetScore()
        {
            var isNotYetEndgame = (player1Points < 4 && player2Points < 4) && (player1Points + player2Points < 6);
            if (isNotYetEndgame)
            {
                var score = POINTS_NAMES[player1Points];
                if (player1Points == player2Points)
                    return score + "-All";
                else
                    return score + "-" + POINTS_NAMES[player2Points];
            }
            else
            {
                if (player1Points == player2Points)
                    return "Deuce";
                var leader = player1Points > player2Points ? player1Name : player2Name;
                var pointsDifferenceIsOne = (player1Points - player2Points) * (player1Points - player2Points) == 1;
                if (pointsDifferenceIsOne)
                    return "Advantage " + leader;
                else
                    return "Win for " + leader;
            }
        }

        public void WonPoint(string playerName)
        {
            if (playerName == "player1")
                this.player1Points += 1;
            else
                this.player2Points += 1;
        }

    }
}

