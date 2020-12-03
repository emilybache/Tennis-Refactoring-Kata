import scores.AdvantageScore
import scores.NormalScore
import scores.TieScore
import scores.WinScore

class TennisGame1(
    player1Name: String,
    player2Name: String
) : TennisGame {
    private val player1 = Player(player1Name)
    private val player2 = Player(player2Name)

    private val possiblesScores = listOf(
        TieScore(player1, player2),
        AdvantageScore(player1, player2),
        WinScore(player1, player2),
        NormalScore(player1, player2)
    )

    override fun wonPoint(playerName: String) {
        playerWithName(playerName).wonPoint()
    }

    override fun getScore(): String =
        possiblesScores.first(Score::isApplicable).toString()

    private fun playerWithName(name: String): Player =
        player1.takeIf { player -> player.isCalled(name) }
            ?: player2
}


