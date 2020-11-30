class TennisGame1(
        private val player1Name: String,
        private val player2Name: String
) : TennisGame {

    private var scorePlayer1: Int = 0
    private var scorePlayer2: Int = 0

    override fun wonPoint(playerName: String) {
        if (playerName == player1Name)
            scorePlayer1 += 1
        else if (playerName == player2Name)
            scorePlayer2 += 1
    }

    override fun getScore(): String {
        var score = ""
        var tempScore = 0
        if (scorePlayer1 == scorePlayer2) {
            when (scorePlayer1) {
                0 -> score = "Love-All"
                1 -> score = "Fifteen-All"
                2 -> score = "Thirty-All"
                else -> score = "Deuce"
            }
        } else if (scorePlayer1 >= 4 || scorePlayer2 >= 4) {
            val minusResult = scorePlayer1 - scorePlayer2
            if (minusResult == 1)
                score = "Advantage player1"
            else if (minusResult == -1)
                score = "Advantage player2"
            else if (minusResult >= 2)
                score = "Win for player1"
            else
                score = "Win for player2"
        } else {
            for (i in 1..2) {
                if (i == 1)
                    tempScore = scorePlayer1
                else {
                    score += "-"
                    tempScore = scorePlayer2
                }
                when (tempScore) {
                    0 -> score += "Love"
                    1 -> score += "Fifteen"
                    2 -> score += "Thirty"
                    3 -> score += "Forty"
                }
            }
        }
        return score
    }
}
