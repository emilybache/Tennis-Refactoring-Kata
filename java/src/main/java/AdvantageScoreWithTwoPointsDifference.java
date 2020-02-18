import player.Player;

public class AdvantageScoreWithTwoPointsDifference {

    String advantagesScore(Player player1, Player player2) {
        String score;
        int minusResult = player1.getScore() - player2.getScore();
        if (minusResult == 1) score = "Advantage " + player1.getName();
        else if (minusResult == -1) score = "Advantage " + player2.getName();
        else if (minusResult >= 2) score = "Win for " + player1.getName();
        else score = "Win for " + player2.getName();

        return score;
    }
}
