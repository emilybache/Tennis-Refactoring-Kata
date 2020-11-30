class TennisGame1(
        player1Name: String,
        player2Name: String
) : TennisGame {
    private val player1 = Player(player1Name)

    private val player2 = Player(player2Name)

    override fun wonPoint(playerName: String) {
        playerWithName(playerName).wonPoint()
    }

    override fun getScore(): String {
        return if (player1.isInTieWith(player2)) {
            equalScore()
        } else if (player1.score >= 4 || player2.score >= 4) {
            winOrAdvantageScore()
        } else {
            normalScore()
        }
    }

    private fun playerWithName(name: String): Player =
            player1.takeIf { player -> player.isCalled(name) }
                    ?: player2

    private fun normalScore(): String {
        return "${score(player1.score)}-${score(player2.score)}"
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
        val minusResult = player1.score - player2.score
        return when {
            minusResult == 1 -> "Advantage player1"
            minusResult == -1 -> "Advantage player2"
            minusResult >= 2 -> "Win for player1"
            else -> "Win for player2"
        }
    }

    private fun equalScore(): String {
        return when (player1.score) {
            0 -> "Love-All"
            1 -> "Fifteen-All"
            2 -> "Thirty-All"
            else -> "Deuce"
        }
    }
}
