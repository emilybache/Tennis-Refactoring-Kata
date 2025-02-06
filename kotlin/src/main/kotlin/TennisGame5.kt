class TennisGame5(private val player1Name: String, private val player2Name: String) : TennisGame {

    private var player1Score = 0
    private var player2Score = 0

    override fun wonPoint(playerName: String) {
        if (playerName == "player1") {
            player1Score++
        } else if (playerName == "player2") {
            player2Score++
        } else {
            throw IllegalArgumentException("Invalid player name.")
        }
    }

    override fun getScore(): String {
        var p1 = player1Score
        var p2 = player2Score

        while (p1 > 4 || p2 > 4) {
            p1--
            p2--
        }

        val lookup = mapOf(
            Pair(0, 0) to "Love-All",
            Pair(0, 1) to "Love-Fifteen",
            Pair(0, 2) to "Love-Thirty",
            Pair(0, 3) to "Love-Forty",
            Pair(0, 4) to "Win for player2",
            Pair(1, 0) to "Fifteen-Love",
            Pair(1, 1) to "Fifteen-All",
            Pair(1, 2) to "Fifteen-Thirty",
            Pair(1, 3) to "Fifteen-Forty",
            Pair(1, 4) to "Win for player2",
            Pair(2, 0) to "Thirty-Love",
            Pair(2, 1) to "Thirty-Fifteen",
            Pair(2, 2) to "Thirty-All",
            Pair(2, 3) to "Thirty-Forty",
            Pair(2, 4) to "Win for player2",
            Pair(3, 0) to "Forty-Love",
            Pair(3, 1) to "Forty-Fifteen",
            Pair(3, 2) to "Forty-Thirty",
            Pair(3, 3) to "Deuce",
            Pair(3, 4) to "Advantage player2",
            Pair(4, 0) to "Win for player1",
            Pair(4, 1) to "Win for player1",
            Pair(4, 2) to "Win for player1",
            Pair(4, 3) to "Advantage player1",
            Pair(4, 4) to "Deuce"
        )

        val pair = Pair(p1, p2)
        if (lookup.containsKey(pair)) {
            return lookup[pair]!!
        } else {
            throw IllegalArgumentException("Invalid score.")
        }
    }
}
