public class TennisGame3 implements TennisGame {

	private int p2
	private int p1
	def p1N
	def p2N

	def getScore() {
		String s
		if (p1 < 4 && p2 < 4 && !(p1 + p2 == 6)) {
			String[] p = ["Love", "Fifteen", "Thirty", "Forty"]
			s = p[p1]
			return (p1 == p2) ? s + "-All" : s + "-" + p[p2]
		} else {
			if (p1 == p2)
				return "Deuce"
			s = p1 > p2 ? p1N : p2N
			return ((p1 - p2) * (p1 - p2) == 1) ? "Advantage " + s : "Win for " + s
		}
	}

	void wonPoint(playerName) {
		if (playerName == "player1")
			this.p1 += 1
		else
			this.p2 += 1
	}
}
