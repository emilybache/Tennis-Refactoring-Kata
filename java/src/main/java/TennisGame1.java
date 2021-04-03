public class TennisGame1 implements TennisGame {

    private final Player player1;
    private final Player player2;

    public TennisGame1(Player player1, Player player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    public void wonPoint(String playerName) {
        if (playerName.equals(player1.getName())) {
            player1.wonPoint();
        } else {
            player2.wonPoint();
        }
    }


    public String getScore() {
        if (player1.hasSameScoreAs(player2)) {
            return equalityScore();
        }
        if (isBothPlayersHaveLessThan4Points()) {
            return Score.between(player1, player2);
        }
        if (Math.abs(player1.getScore() - player2.getScore()) == 1) {
            return advantageScore();
        }
        return winScore();
    }

    private String winScore() {
        return "Win for " + getLeadingPlayerName();
    }

    private String advantageScore() {
        return "Advantage " + getLeadingPlayerName();
    }

    private String getLeadingPlayerName() {
        return player1.getScore() > player2.getScore() ? player1.getName() : player2.getName();
    }

    private String equalityScore() {
        String score;
        switch (player1.getScore()) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;

        }
        return score;
    }

    private boolean isBothPlayersHaveLessThan4Points() {
        return player1.getScore() < 4 && player2.getScore() < 4;
    }
}
