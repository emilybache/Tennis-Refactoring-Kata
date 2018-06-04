class TennisGame3(private val p1N: String, private val p2N: String) : TennisGame {

    private var p2: Int = 0
    private var p1: Int = 0

    override fun getScore(): String {
        val s: String
        if (p1 < 4 && p2 < 4 && !(p1 + p2 == 6)) {
            val p = arrayOf("Love", "Fifteen", "Thirty", "Forty")
            s = p[p1]
            return if (p1 == p2) "$s-All" else "$s-${p[p2]}"
        } else {
            if (p1 == p2)
                return "Deuce"
            s = if (p1 > p2) p1N else p2N
            return if ((p1 - p2) * (p1 - p2) == 1) "Advantage $s" else "Win for $s"
        }
    }

    override fun wonPoint(playerName: String) {
        if (playerName === "player1")
            this.p1 += 1
        else
            this.p2 += 1

    }

}
