import java.util.Arrays;
import java.util.List;

public class PlayerGameScore {
    String score(int score) {
        List<String> scores = Arrays.asList("Love", "Fifteen", "Thirty", "Forty");
        return scores.get(score);
    }
}
