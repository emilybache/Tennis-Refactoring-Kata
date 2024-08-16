public class TennisGame7 implements TennisGame {
    private final String player1Name;
    private final String player2Name;
    private int player1Score;
    private int player2Score;

    public TennisGame7(String player1Name, String player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    @Override
    public void wonPoint(String playerName) {
        if (playerName.equals("player1"))
            player1Score++;
        else
            player2Score++;

    }

    public String getScore()
    {
        String result = "Current score: ";

        if (player1Score == player2Score)
        {
            // tie score
            switch (player1Score)
            {
                case 0:
                    result += "Love-All";
                    break;
                case 1:
                    result += "Fifteen-All";
                    break;
                case 2:
                    result += "Thirty-All";
                    break;
                default:
                    result += "Deuce";
                    break;
            }
        }
        else if (player1Score >= 4 || player2Score >= 4)
        {
            // end-game score
            if (player1Score - player2Score == 1) {
                result += "Advantage " + player1Name;
            } else if (player1Score - player2Score == -1) {
                result += "Advantage " + player2Name;
            } else if (player1Score - player2Score >= 2) {
                result += "Win for " + player1Name;
            } else {
                result += "Win for " + player2Name;
            }
        }
        else
        {
            // regular score
            result +=  switch (player1Score)
            {
                case 0 -> "Love";
                case 1 -> "Fifteen";
                case 2 -> "Thirty";
                default -> "Forty";
            };
            result += "-";
            result +=  switch (player2Score)
            {
                case 0 -> "Love";
                case 1 -> "Fifteen";
                case 2 -> "Thirty";
                default -> "Forty";
            };

        }

        return result + ", enjoy your game!";
    }
}
