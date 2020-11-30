class TennisGame1(
        player1Name: String,
        player2Name: String
) : TennisGame {
    private val player1 = Player(player1Name)
    private val player2 = Player(player2Name)

    private val scoreByPoints = mapOf(
            0 to "Love",
            1 to "Fifteen",
            2 to "Thirty",
            3 to "Forty"
    )

    override fun wonPoint(playerName: String) {
        playerWithName(playerName).wonPoint()
    }

    override fun getScore(): String {
        return when {
            player1.isInTieWith(player2) -> equalScore()
            player1.hasAdvantageOver(player2) -> "Advantage ${player1.name}"
            player2.hasAdvantageOver(player1) -> "Advantage ${player2.name}"
            player1.hasWonAgainst(player2) -> "Win for ${player1.name}"
            player2.hasWonAgainst(player1) -> "Win for ${player2.name}"
            else -> "${scoreByPoints[player1.points]}-${scoreByPoints[player2.points]}"
        }
    }

    private fun playerWithName(name: String): Player =
            player1.takeIf { player -> player.isCalled(name) }
                    ?: player2

    private fun equalScore(): String {
        return when (player1.points) {
            0 -> "Love-All"
            1 -> "Fifteen-All"
            2 -> "Thirty-All"
            else -> "Deuce"
        }
    }
}
