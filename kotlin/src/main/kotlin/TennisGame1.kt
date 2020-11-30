import java.lang.IllegalArgumentException

class TennisGame1(
        private val player1Name: String,
        private val player2Name: String
) : TennisGame {

    private var scorePlayer1: Int = 0
    private var scorePlayer2: Int = 0

    override fun wonPoint(playerName: String) {
        if (playerName == player1Name)
            scorePlayer1 += 1
        else if (playerName == player2Name)
            scorePlayer2 += 1
    }

    override fun getScore(): String {
        return if (scorePlayer1 == scorePlayer2) {
            equalScore()
        } else if (scorePlayer1 >= 4 || scorePlayer2 >= 4) {
            winOrAdvantageScore()
        } else {
            normalScore()
        }
    }

    private fun normalScore(): String {
        return "${score(scorePlayer1)}-${score(scorePlayer2)}"
    }

    private fun score(points: Int): String {
        return when (points) {
            0 -> "Love"
            1 -> "Fifteen"
            2 -> "Thirty"
            3 -> "Forty"
            else -> throw IllegalArgumentException()
        }
    }

    private fun winOrAdvantageScore(): String {
        val minusResult = scorePlayer1 - scorePlayer2
        return when {
            minusResult == 1 -> "Advantage player1"
            minusResult == -1 -> "Advantage player2"
            minusResult >= 2 -> "Win for player1"
            else -> "Win for player2"
        }
    }

    private fun equalScore(): String {
        return when (scorePlayer1) {
            0 -> "Love-All"
            1 -> "Fifteen-All"
            2 -> "Thirty-All"
            else -> "Deuce"
        }
    }
}
