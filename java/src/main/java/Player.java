public class Player {

    private final String name;
    private int score;

    public Player(String name) {
        this.name = name;
        this.score = 0;
    }

    public int getScore() {
        return score;
    }

    public void wonPoint() {
        score++;
    }

    public String getName() {
        return name;
    }

    boolean hasSameScore(Player tennisPlayer) {
        return getScore() == tennisPlayer.getScore();
    }
}
