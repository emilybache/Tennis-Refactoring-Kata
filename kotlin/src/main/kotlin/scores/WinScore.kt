package scores

import Player
import Score

class WinScore(player1: Player, player2: Player) : Score(player1, player2) {
    override fun toString(): String = "Win for ${playerWhoWon().name}"

    override fun isApplicable() =
        player1.hasWonAgainst(player2) || player2.hasWonAgainst(player1)

    private fun playerWhoWon() =
        player1.takeIf { it.hasWonAgainst(player2) }
            ?: player2
}