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
            player1.isInTieWith(player2) -> TieScore(player1).toString()
            player1.hasAdvantageOver(player2) -> AdvantageScore(player1).toString()
            player2.hasAdvantageOver(player1) -> AdvantageScore(player2).toString()
            player1.hasWonAgainst(player2) -> WinScore(player1).toString()
            player2.hasWonAgainst(player1) -> WinScore(player2).toString()
            else -> NormalScore(player1, player2).toString()
        }
    }

    private fun playerWithName(name: String): Player =
        player1.takeIf { player -> player.isCalled(name) }
            ?: player2
}

abstract class Score {
    abstract override fun toString(): String
}

class NormalScore(
    private val player1: Player,
    private val player2: Player
) : Score() {

    private val scoreByPoints = mapOf(
        0 to "Love",
        1 to "Fifteen",
        2 to "Thirty",
        3 to "Forty"
    )

    override fun toString(): String =
        "${scoreByPoints[player1.points]}-${scoreByPoints[player2.points]}"

}

class WinScore(
    private val player: Player
) : Score() {

    override fun toString(): String = "Win for ${player.name}"
}

class AdvantageScore(
    private val player: Player
) : Score() {
    override fun toString(): String = "Advantage ${player.name}"
}

class TieScore(
    private val player: Player
) : Score() {
    override fun toString(): String {
        return when (player.points) {
            0 -> "Love-All"
            1 -> "Fifteen-All"
            2 -> "Thirty-All"
            else -> "Deuce"
        }
    }
}