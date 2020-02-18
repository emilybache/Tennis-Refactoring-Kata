package player;

public class WinScore {

    public String winScore(Player player1, Player player2) {
        String player = player1.getScore()> player2.getScore()? player1.getName(): player2.getName();
        return "Win for " + player;
    }
}
