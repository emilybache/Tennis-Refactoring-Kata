namespace Tennis;

public class TennisGame6 : ITennisGame
{
    private int player1Score;
    private int player2Score;
    private string player1Name;
    private string player2Name;

    public TennisGame6(string player1Name, string player2Name)
    {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    public void WonPoint(string playerName)
    {
        if (playerName == player1Name)
            player1Score++;
        else
            player2Score++;
    }

    public string GetScore()
    {
        string result;

        if (player1Score == player2Score)
        {
            // tie score
            string tieScore;
            switch (player1Score)
            {
                case 0:
                    tieScore = "Love-All";
                    break;
                case 1:
                    tieScore = "Fifteen-All";
                    break;
                case 2:
                    tieScore = "Thirty-All";
                    break;
                default:
                    tieScore = "Deuce";
                    break;
            }

            result = tieScore;
        }
        else if (player1Score >= 4 || player2Score >= 4)
        {
            // end-game score
            string endGameScore;

            switch (player1Score - player2Score)
            {
                case 1:
                    endGameScore = $"Advantage {player1Name}";
                    break;
                case -1:
                    endGameScore = $"Advantage {player2Name}";
                    break;
                case >= 2:
                    endGameScore = $"Win for {player1Name}";
                    break;
                default:
                    endGameScore = $"Win for {player2Name}";
                    break;
            }

            result = endGameScore;
        }
        else
        {
            // regular score
            string regularScore;

            var score1 = player1Score switch
            {
                0 => "Love",
                1 => "Fifteen",
                2 => "Thirty",
                _ => "Forty"
            };

            var score2 = player2Score switch
            {
                0 => "Love",
                1 => "Fifteen",
                2 => "Thirty",
                _ => "Forty"
            };

            regularScore = $"{score1}-{score2}";

            result = regularScore;
        }

        return result;
    }
}