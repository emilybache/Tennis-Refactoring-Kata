import org.junit.jupiter.params.ParameterizedTest;

import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.params.provider.MethodSource;

public class TennisTest {

    public static Stream<Object[]> getAllScores() {
        return Stream.of(new Object[][]{
                {0, 0, "Love-All"},
                {1, 1, "Fifteen-All"},
                {2, 2, "Thirty-All"},
                {3, 3, "Deuce"},
                {4, 4, "Deuce"},

                {1, 0, "Fifteen-Love"},
                {0, 1, "Love-Fifteen"},
                {2, 0, "Thirty-Love"},
                {0, 2, "Love-Thirty"},
                {3, 0, "Forty-Love"},
                {0, 3, "Love-Forty"},
                {4, 0, "Win for player1"},
                {0, 4, "Win for player2"},

                {2, 1, "Thirty-Fifteen"},
                {1, 2, "Fifteen-Thirty"},
                {3, 1, "Forty-Fifteen"},
                {1, 3, "Fifteen-Forty"},
                {4, 1, "Win for player1"},
                {1, 4, "Win for player2"},

                {3, 2, "Forty-Thirty"},
                {2, 3, "Thirty-Forty"},
                {4, 2, "Win for player1"},
                {2, 4, "Win for player2"},

                {4, 3, "Advantage player1"},
                {3, 4, "Advantage player2"},
                {5, 4, "Advantage player1"},
                {4, 5, "Advantage player2"},
                {15, 14, "Advantage player1"},
                {14, 15, "Advantage player2"},

                {6, 4, "Win for player1"},
                {4, 6, "Win for player2"},
                {16, 14, "Win for player1"},
                {14, 16, "Win for player2"},
        });
    }

    private static void checkAllScores(int player1Points, int player2Points, String expectedScore, TennisGame game) {
        int highestScore = Math.max(player1Points, player2Points);
        for (int i = 0; i < highestScore; i++) {
            if (i < player1Points)
                game.wonPoint("player1");
            if (i < player2Points)
                game.wonPoint("player2");
        }
        assertEquals(expectedScore, game.getScore());
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame1(int player1Points, int player2Points, String expectedScore) {
        TennisGame game = new TennisGame1("player1", "player2");
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame2(int player1Points, int player2Points, String expectedScore) {
        TennisGame game = new TennisGame2("player1", "player2");
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame3(int player1Points, int player2Points, String expectedScore) {
        TennisGame game = new TennisGame3("player1", "player2");
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame4(int player1Points, int player2Points, String expectedScore) {
        TennisGame game = new TennisGame4("player1", "player2");
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame5(int player1Points, int player2Points, String expectedScore) {
        TennisGame game = new TennisGame5("player1", "player2");
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame6(int player1Points, int player2Points, String expectedScore) {
        TennisGame game = new TennisGame6("player1", "player2");
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }


    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame7(int player1Points, int player2Points, String expectedScore) {
        TennisGame game = new TennisGame7("player1", "player2");
        checkAllScores(player1Points, player2Points, "Current score: " + expectedScore + ", enjoy your game!", game);
    }
}
