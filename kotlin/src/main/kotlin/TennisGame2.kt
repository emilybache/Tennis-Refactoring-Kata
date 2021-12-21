import java.lang.RuntimeException

class TennisGame2(private val player1Name: String, private val player2Name: String) : TennisGame {

    var P1point: Int = 0
    var P2point: Int = 0

    override fun getScore(): String {
        if (P1point.hasWon(P2point)) {
            return "Win for player1"
        }
        if (P2point.hasWon(P1point)) {
            return "Win for player2"
        }

        if (P1point.isDeuce(P2point))
            return "Deuce"

        if (P1point.hasAdvantage(P2point))
            return "Advantage player1"

        if (P2point.hasAdvantage(P1point))
            return "Advantage player2"

        if (P1point < 4 && P2point < 4) {
            val score1 = P1point.getScoreAsString()
            val score2 = P2point.getScoreAsString()
            return if (score1 == score2)
                "$score1-All"
            else
                "$score1-$score2"
        }

        throw RuntimeException("Invalid game result")
    }

    private fun Int.hasAdvantage(p2point: Int) = this > p2point && p2point >= 3
    private fun Int.isDeuce(p2point: Int) = this == p2point && this >= 3

    private fun Int.hasWon(competitor: Int) = this >= 4 && competitor >= 0 && this - competitor >= 2

    private fun Int.getScoreAsString(): String? = when (this) {
        0 -> "Love"
        1 -> "Fifteen"
        2 -> "Thirty"
        3 -> "Forty"
        else -> null
    }

    fun SetP1Score(number: Int) {

        for (i in 0 until number) {
            P1Score()
        }

    }

    fun SetP2Score(number: Int) {

        for (i in 0 until number) {
            P2Score()
        }

    }

    fun P1Score() {
        P1point++
    }

    fun P2Score() {
        P2point++
    }

    override fun wonPoint(player: String) {
        if (player === "player1")
            P1Score()
        else
            P2Score()
    }
}