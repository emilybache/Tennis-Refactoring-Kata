public class EqualityScore {
    private PlayerGameScore playerGameScore;

    public EqualityScore(PlayerGameScore playerGameScore) {

        this.playerGameScore = playerGameScore;
    }

    String equalityScore(String score) {
        return score + "-All";
    }
}
