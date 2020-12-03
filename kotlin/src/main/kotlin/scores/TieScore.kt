package scores

import Player
import Score

class TieScore(player1: Player, player2: Player) : Score(player1, player2) {

    private val scores = mapOf(
        0 to "Love-All",
        1 to "Fifteen-All",
        2 to "Thirty-All"
    ).withDefault { "Deuce" }

    override fun toString(): String = scores.getValue(player1.points)

    override fun isApplicable(): Boolean = player1.isInTieWith(player2)
}
