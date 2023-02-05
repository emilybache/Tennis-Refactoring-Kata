import org.junit.jupiter.params.ParameterizedTest;

import java.util.Random;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.params.provider.MethodSource;

public class TennisTest {

    private static final String PLAYER_1_NAME = "player1-" + aRandomString();
    private static final String PLAYER_2_NAME = "player2-" + aRandomString();

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
                {4, 0, "Win for " + PLAYER_1_NAME},
                {0, 4, "Win for " + PLAYER_2_NAME},

                {2, 1, "Thirty-Fifteen"},
                {1, 2, "Fifteen-Thirty"},
                {3, 1, "Forty-Fifteen"},
                {1, 3, "Fifteen-Forty"},
                {4, 1, "Win for " + PLAYER_1_NAME},
                {1, 4, "Win for " + PLAYER_2_NAME},

                {3, 2, "Forty-Thirty"},
                {2, 3, "Thirty-Forty"},
                {4, 2, "Win for " + PLAYER_1_NAME},
                {2, 4, "Win for " + PLAYER_2_NAME},

                {4, 3, "Advantage " + PLAYER_1_NAME},
                {3, 4, "Advantage " + PLAYER_2_NAME},
                {5, 4, "Advantage " + PLAYER_1_NAME},
                {4, 5, "Advantage " + PLAYER_2_NAME},
                {15, 14, "Advantage " + PLAYER_1_NAME},
                {14, 15, "Advantage " + PLAYER_2_NAME},

                {6, 4, "Win for " + PLAYER_1_NAME},
                {4, 6, "Win for " + PLAYER_2_NAME},
                {16, 14, "Win for " + PLAYER_1_NAME},
                {14, 16, "Win for " + PLAYER_2_NAME},
        });
    }

    private static void checkAllScores(int player1Points, int player2Points, String expectedScore, TennisGame game) {
        int highestScore = Math.max(player1Points, player2Points);
        for (int i = 0; i < highestScore; i++) {
            if (i < player1Points)
                game.wonPoint(PLAYER_1_NAME);
            if (i < player2Points)
                game.wonPoint(PLAYER_2_NAME);
        }
        assertEquals(expectedScore, game.getScore());
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame1(int player1Points, int player2Points, String expectedScore) {
        TennisGame1 game = new TennisGame1(PLAYER_1_NAME, PLAYER_2_NAME);
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame2(int player1Points, int player2Points, String expectedScore) {
        TennisGame2 game = new TennisGame2(PLAYER_1_NAME, PLAYER_2_NAME);
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame3(int player1Points, int player2Points, String expectedScore) {
        TennisGame3 game = new TennisGame3(PLAYER_1_NAME, PLAYER_2_NAME);
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    @ParameterizedTest
    @MethodSource("getAllScores")
    public void checkAllScoresTennisGame4(int player1Points, int player2Points, String expectedScore) {
        TennisGame game = new TennisGame4(PLAYER_1_NAME, PLAYER_2_NAME);
        checkAllScores(player1Points, player2Points, expectedScore, game);
    }

    private static String aRandomString() {
        return String.valueOf(new Random().nextInt(0, 1000));
    }
}
