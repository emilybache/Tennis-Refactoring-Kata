class TennisGame2(private val player1Name: String, private val player2Name: String) : TennisGame {
    var P1point: Int = 0
    var P2point: Int = 0

    var P1res: String = ""
    var P2res: String = ""

    override fun getScore(): String {
        var score = ""
        if (P1point == P2point && P1point < 4) {
            if (P1point == 0)
                score = "Love"
            if (P1point == 1)
                score = "Fifteen"
            if (P1point == 2)
                score = "Thirty"
            score += "-All"
        }
        if (P1point == P2point && P1point >= 3)
            score = "Deuce"

        if (P1point > 0 && P2point == 0) {
            if (P1point == 1)
                P1res = "Fifteen"
            if (P1point == 2)
                P1res = "Thirty"
            if (P1point == 3)
                P1res = "Forty"

            P2res = "Love"
            score = "$P1res-$P2res"
        }
        if (P2point > 0 && P1point == 0) {
            if (P2point == 1)
                P2res = "Fifteen"
            if (P2point == 2)
                P2res = "Thirty"
            if (P2point == 3)
                P2res = "Forty"

            P1res = "Love"
            score = "$P1res-$P2res"
        }

        if (P1point > P2point && P1point < 4) {
            if (P1point == 2)
                P1res = "Thirty"
            if (P1point == 3)
                P1res = "Forty"
            if (P2point == 1)
                P2res = "Fifteen"
            if (P2point == 2)
                P2res = "Thirty"
            score = "$P1res-$P2res"
        }
        if (P2point > P1point && P2point < 4) {
            if (P2point == 2)
                P2res = "Thirty"
            if (P2point == 3)
                P2res = "Forty"
            if (P1point == 1)
                P1res = "Fifteen"
            if (P1point == 2)
                P1res = "Thirty"
            score = "$P1res-$P2res"
        }

        if (P1point > P2point && P2point >= 3) {
            score = "Advantage player1"
        }

        if (P2point > P1point && P1point >= 3) {
            score = "Advantage player2"
        }

        if (P1point >= 4 && P2point >= 0 && P1point - P2point >= 2) {
            score = "Win for player1"
        }
        if (P2point >= 4 && P1point >= 0 && P2point - P1point >= 2) {
            score = "Win for player2"
        }
        return score
    }

    fun SetP1Score(number: Int) {

        for (i in 0 until number) {
            P1Score()
        }

    }

    fun SetP2Score(number: Int) {

        for (i in 0 until number) {
            P2Score()
        }

    }

    fun P1Score() {
        P1point++
    }

    fun P2Score() {
        P2point++
    }

    override fun wonPoint(player: String) {
        if (player === "player1")
            P1Score()
        else
            P2Score()
    }
}