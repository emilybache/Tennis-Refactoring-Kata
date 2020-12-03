package scores

import Player
import Score

class TieScore(player1: Player, player2: Player) : Score(player1, player2) {
    override fun toString(): String =
        when (player1.points) {
            0 -> "Love-All"
            1 -> "Fifteen-All"
            2 -> "Thirty-All"
            else -> "Deuce"
        }

    override fun isApplicable(): Boolean = player1.isInTieWith(player2)
}