class TennisGame2 implements TennisGame {
	int P1point = 0
	int P2point = 0

	String P1res = ""
	String P2res = ""

	def player1Name
	def player2Name

	def getScore() {
		String score = ""
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
			score = P1res + "-" + P2res
		}
		if (P2point > 0 && P1point == 0) {
			if (P2point == 1)
				P2res = "Fifteen"
			if (P2point == 2)
				P2res = "Thirty"
			if (P2point == 3)
				P2res = "Forty"

			P1res = "Love"
			score = P1res + "-" + P2res
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
			score = P1res + "-" + P2res
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
			score = P1res + "-" + P2res
		}

		if (P1point > P2point && P2point >= 3) {
			score = "Advantage player1"
		}

		if (P2point > P1point && P1point >= 3) {
			score = "Advantage player2"
		}

		if (P1point >= 4 && P2point >= 0 && (P1point - P2point) >= 2) {
			score = "Win for player1"
		}
		if (P2point >= 4 && P1point >= 0 && (P2point - P1point) >= 2) {
			score = "Win for player2"
		}
		return score
	}

	void SetP1Score(number) {
		for (int i = 0; i < number; i++) {
			P1Score()
		}

	}

	void SetP2Score(number) {
		for (int i = 0; i < number; i++) {
			P2Score()
		}

	}

	void P1Score() {
		P1point++
	}

	void P2Score() {
		P2point++
	}

	void wonPoint(player) {
		if (player == "player1")
			P1Score()
		else
			P2Score()
	}
}