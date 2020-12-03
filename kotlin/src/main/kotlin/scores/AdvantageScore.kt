package scores

import Player
import Score

class AdvantageScore(player1: Player, player2: Player) : Score(player1, player2) {
    override fun toString(): String = "Advantage ${playerWithAdvantage().name}"

    override fun isApplicable() =
        player1.hasAdvantageOver(player2) || player2.hasAdvantageOver(player1)

    private fun playerWithAdvantage() =
        player1.takeIf { player -> player.hasAdvantageOver(player2) }
            ?: player2
}
