
public class TennisGame1 implements TennisGame {

    private int player1Score = 0;
    private int player2Score = 0;
    private String player1;
    private String player2;
    private static final String[] POINTS = {"Love", "Fifteen", "Thirty", "Forty"};
    private static final int WIN_THRESHOLD = 4;

    public TennisGame1(String player1, String player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    public void wonPoint(String player) {
        if (player.equals(player1))
            player1Score += 1;
        else
            player2Score += 1;
    }

    public String getScore() {
        if (isDeuce()) {
            return "Deuce";
        } else if (isAdvantageOrWin()) {
            return getAdvantageOrWinScore();
        } else if (player1Score == player2Score) {
            return POINTS[player1Score] + "-All";
        } else {
            return POINTS[player1Score] + "-" + POINTS[player2Score];
        }
    }

    private boolean isDeuce() {
        return player1Score >= 3 && player1Score == player2Score;
    }

    private boolean isAdvantageOrWin() {
        return player1Score >= WIN_THRESHOLD || player2Score >= WIN_THRESHOLD;
    }

    private String getAdvantageOrWinScore() {
        int scoreDifference = player1Score - player2Score;
        if (scoreDifference == 1) {
            return "Advantage player1";
        } else if (scoreDifference == -1) {
            return "Advantage player2";
        } else if (scoreDifference >= 2) {
            return "Win for player1";
        } else {
            return "Win for player2";
        }
    }
}
