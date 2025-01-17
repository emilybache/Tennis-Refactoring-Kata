
public class TennisGame2 implements TennisGame
{
    public int p1score = 0;
    public int p2score = 0;

    private String player1;
    private String player2;

    public TennisGame2(String player1, String player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    public String getScore() {
        if (isTie()) {
            return getTieScore();
        } else if (isEndGame()) {
            return getEndGameScore();
        } else {
            return getRegularScore();
        }
    }

    private boolean isTie() {
        return p1score == p2score;
    }

    private boolean isEndGame() {
        return p1score >= 4 || p2score >= 4;
    }

    private String getTieScore() {
        switch (p1score) {
            case 0: return "Love-All";
            case 1: return "Fifteen-All";
            case 2: return "Thirty-All";
            default: return "Deuce";
        }
    }

    private String getEndGameScore() {
        int scoreDifference = p1score - p2score;
        if (scoreDifference == 1) return "Advantage player1";
        if (scoreDifference == -1) return "Advantage player2";
        if (scoreDifference >= 2) return "Win for player1";
        return "Win for player2";
    }

    private String getRegularScore() {
        return pointToScore(p1score) + "-" + pointToScore(p2score);
    }

    private String pointToScore(int points) {
        switch (points) {
            case 0: return "Love";
            case 1: return "Fifteen";
            case 2: return "Thirty";
            case 3: return "Forty";
            default: throw new IllegalArgumentException("Invalid point value: " + points);
        }
    }

    public void wonPoint(String player) {
        if ("player1".equals(player)) {
            p1score++;
        } else if ("player2".equals(player)) {
            p2score++;
        }
    }

}