public class GameScore {
    private final int player1Score;
    private final int player2Score;
    private final String player1Name;
    private final String player2Name;

    public GameScore(int player1Score, int player2Score, String player1Name, String player2Name) {
        this.player1Score = player1Score;
        this.player2Score = player2Score;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    public String getScore()
    {
        String result;

        if (player1Score == player2Score)
        {
            // tie score
            switch (player1Score)
            {
                case 0:
                    result = "Love-All";
                    break;
                case 1:
                    result = "Fifteen-All";
                    break;
                case 2:
                    result = "Thirty-All";
                    break;
                default:
                    result = "Deuce";
                    break;
            }
        }
        else if (player1Score >= 4 || player2Score >= 4)
        {
            // end-game score
            if (player1Score - player2Score == 1) {
                result = describe("Advantage", player1Name);
            } else if (player1Score - player2Score == -1) {
                result = describe("Advantage", player2Name);
            } else if (player1Score - player2Score >= 2) {
                result = describe("Win for", player1Name);
            } else {
                result = describe("Win for", player2Name);
            }
        }
        else
        {
            // regular score
            result = pointName(player1Score) + "-" + pointName(player2Score);
        }

        return result;
    }

    private static String describe(String label, String playerName) {
        return label + " " + playerName;
    }

    private static String pointName(int score) {
        return switch (score) {
            case 0 -> "Love";
            case 1 -> "Fifteen";
            case 2 -> "Thirty";
            default -> "Forty";
        };
    }
}
