class TennisGame7(private val player1Name: String, private val player2Name: String) : TennisGame {

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
        var result = "Current score: "

        if (player1Score == player2Score) {
            // tie score
            when (player1Score) {
                0 -> result += "Love-All"
                1 -> result += "Fifteen-All"
                2 -> result += "Thirty-All"
                else -> result += "Deuce"
            }
        } else if (player1Score >= 4 || player2Score >= 4) {
            // end-game score
            if (player1Score - player2Score == 1) {
                result += "Advantage $player1Name"
            } else if (player1Score - player2Score == -1) {
                result += "Advantage $player2Name"
            } else if (player1Score - player2Score >= 2) {
                result += "Win for $player1Name"
            } else {
                result += "Win for $player2Name"
            }
        } else {
            // regular score
            result += when (player1Score) {
                0 -> "Love"
                1 -> "Fifteen"
                2 -> "Thirty"
                else -> "Forty"
            }
            result += "-"
            result += when (player2Score) {
                0 -> "Love";
                1 -> "Fifteen";
                2 -> "Thirty";
                else -> "Forty";
            }
        }
        return "$result, enjoy your game!"
    }
}
