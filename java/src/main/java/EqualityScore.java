public class EqualityScore {
    private PlayerGameScore playerGameScore;

    public EqualityScore(PlayerGameScore playerGameScore) {

        this.playerGameScore = playerGameScore;
    }

    String equalityScore(int score1) {
        String score;
        if (score1 <= 2) {
            String stringScore = playerGameScore.score(score1);
            score = stringScore + "-All";
        } else {
            score = "Deuce";
        }
        return score;
    }
}
