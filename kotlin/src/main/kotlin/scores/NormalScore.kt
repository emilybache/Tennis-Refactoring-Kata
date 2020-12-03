package scores

import Player
import Score

class NormalScore(player1: Player, player2: Player) : Score(player1, player2) {

    private val scoreByPoints = mapOf(
        0 to "Love",
        1 to "Fifteen",
        2 to "Thirty",
        3 to "Forty"
    )

    override fun toString(): String =
        "${scoreByPoints[player1.points]}-${scoreByPoints[player2.points]}"

    override fun isApplicable(): Boolean = player1.hasNormalScore() && player2.hasNormalScore()
}
