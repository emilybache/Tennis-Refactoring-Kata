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
        String score = "";
        int tempScore = 0;
        if (player1.getScore() == player2.getScore()) {
            score = equalityScore();
        } else if (player1.getScore() >= 4 || player2.getScore() >= 4) {
            score = advantageScore();
        } else {
            score = Score.fromPoint(player1.getScore()) + "-" + Score.fromPoint(player2.getScore());
        }
        return score;
    }

    private String advantageScore() {
        String score;
        int minusResult = player1.getScore() - player2.getScore();
        if (minusResult == 1) score = "Advantage player1";
        else if (minusResult == -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
        return score;
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

}
