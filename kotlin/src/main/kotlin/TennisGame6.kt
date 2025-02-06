class TennisGame6(private val player1Name: String, private val player2Name: String) : TennisGame {

    private var player1Score = 0
    private var player2Score = 0

    override fun wonPoint(playerName: String) {
        if (playerName == "player1") {
            player1Score++
        } else {
            player2Score++
        }
    }

    override fun getScore(): String {
        var result: String

        if (player1Score == player2Score) {
            // tie score
            var tieScore: String
            when (player1Score) {
                0 -> tieScore = "Love-All"
                1 -> tieScore = "Fifteen-All"
                2 -> tieScore = "Thirty-All"
                else -> tieScore = "Deuce"
            }
            result = tieScore
        } else if (player1Score >= 4 || player2Score >= 4) {
            // end-game score
            var endGameScore: String

            if (player1Score - player2Score == 1) {
                endGameScore = "Advantage $player1Name"
            } else if (player1Score - player2Score == -1) {
                endGameScore = "Advantage $player2Name"
            } else if (player1Score - player2Score >= 2) {
                endGameScore = "Win for $player1Name"
            } else {
                endGameScore = "Win for $player2Name"
            }

            result = endGameScore
        } else {
            // regular score
            var regularScore: String

            var score1 = when (player1Score) {
                0 -> "Love"
                1 -> "Fifteen"
                2 -> "Thirty"
                else -> "Forty"
            }
            var score2 = when (player2Score) {
                0 -> "Love"
                1 -> "Fifteen"
                2 -> "Thirty"
                else -> "Forty"
            }

            regularScore = "$score1-$score2"

            result = regularScore
        }

        return result
    }
}
