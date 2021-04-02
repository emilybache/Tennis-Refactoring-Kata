import java.util.stream.Stream;

enum Score {
    LOVE(0, "Love"),
    FIFTEEN(1, "Fifteen"),
    THIRTY(2, "Thirty"),
    FORTY(3, "Forty");

    private final int point;
    private final String score;

    Score(int point, String score) {
        this.point = point;
        this.score = score;
    }


    public static String fromPoint(int point) {
        return Stream.of(Score.values()).filter(score -> score.getPoint() == point)
            .findFirst()
            .map(Score::getScore)
            .orElseThrow(IllegalArgumentException::new);
    }

    public int getPoint() {
        return point;
    }

    public String getScore() {
        return score;
    }
}
