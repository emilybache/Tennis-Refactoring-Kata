import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.MethodSource

class TennisTest {

    @ParameterizedTest
    @MethodSource("allScores")
    fun checkAllScoresTennisGame1(player1Score: Int, player2Score: Int, expectedScore: String) {
        val game = TennisGame1("player1", "player2")
        checkAllScores(game, player1Score, player2Score, expectedScore)
    }

    @ParameterizedTest
    @MethodSource("allScores")
    fun checkAllScoresTennisGame2(player1Score: Int, player2Score: Int, expectedScore: String) {
        val game = TennisGame2("player1", "player2")
        checkAllScores(game, player1Score, player2Score, expectedScore)
    }

    @ParameterizedTest
    @MethodSource("allScores")
    fun checkAllScoresTennisGame3(player1Score: Int, player2Score: Int, expectedScore: String) {
        val game = TennisGame3("player1", "player2")
        checkAllScores(game, player1Score, player2Score, expectedScore)
    }

    @ParameterizedTest
    @MethodSource("allScores")
    fun checkAllScoresTennisGame4(player1Score: Int, player2Score: Int, expectedScore: String) {
        val game = TennisGame4("player1", "player2")
        checkAllScores(game, player1Score, player2Score, expectedScore)
    }

    fun checkAllScores(game: TennisGame, player1Score: Int, player2Score: Int, expectedScore: String) {
        val highestScore = Math.max(player1Score, player2Score)
        for (i in 0 until highestScore) {
            if (i < player1Score)
                game.wonPoint("player1")
            if (i < player2Score)
                game.wonPoint("player2")
        }
        assertEquals(expectedScore, game.getScore())
    }

    companion object {
        @JvmStatic
        fun allScores(): List<Arguments> =
            listOf(
                Arguments.of(0, 0, "Love-All"),
                Arguments.of(1, 1, "Fifteen-All"),
                Arguments.of(2, 2, "Thirty-All"),
                Arguments.of(3, 3, "Deuce"),
                Arguments.of(4, 4, "Deuce"),
                Arguments.of(1, 0, "Fifteen-Love"),
                Arguments.of(0, 1, "Love-Fifteen"),
                Arguments.of(2, 0, "Thirty-Love"),
                Arguments.of(0, 2, "Love-Thirty"),
                Arguments.of(3, 0, "Forty-Love"),
                Arguments.of(0, 3, "Love-Forty"),
                Arguments.of(4, 0, "Win for player1"),
                Arguments.of(0, 4, "Win for player2"),
                Arguments.of(2, 1, "Thirty-Fifteen"),
                Arguments.of(1, 2, "Fifteen-Thirty"),
                Arguments.of(3, 1, "Forty-Fifteen"),
                Arguments.of(1, 3, "Fifteen-Forty"),
                Arguments.of(4, 1, "Win for player1"),
                Arguments.of(1, 4, "Win for player2"),
                Arguments.of(3, 2, "Forty-Thirty"),
                Arguments.of(2, 3, "Thirty-Forty"),
                Arguments.of(4, 2, "Win for player1"),
                Arguments.of(2, 4, "Win for player2"),
                Arguments.of(4, 3, "Advantage player1"),
                Arguments.of(3, 4, "Advantage player2"),
                Arguments.of(5, 4, "Advantage player1"),
                Arguments.of(4, 5, "Advantage player2"),
                Arguments.of(15, 14, "Advantage player1"),
                Arguments.of(14, 15, "Advantage player2"),
                Arguments.of(6, 4, "Win for player1"),
                Arguments.of(4, 6, "Win for player2"),
                Arguments.of(16, 14, "Win for player1"),
                Arguments.of(14, 16, "Win for player2")
            )
    }
}
