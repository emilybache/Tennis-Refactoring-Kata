public class TennisGame1 implements TennisGame {

	private m_score1 = 0
	private m_score2 = 0
	def player1Name
	def player2Name


	void wonPoint(playerName) {
		if (playerName == "player1")
			m_score1 += 1
		else
			m_score2 += 1
	}

	def getScore() {
		String score = ""
		int tempScore = 0
		if (m_score1 == m_score2) {
			switch (m_score1) {
				case 0:
					score = "Love-All"
					break
				case 1:
					score = "Fifteen-All"
					break
				case 2:
					score = "Thirty-All"
					break
				default:
					score = "Deuce"
					break

			}
		} else if (m_score1 >= 4 || m_score2 >= 4) {
			int minusResult = m_score1 - m_score2
			if (minusResult == 1) score = "Advantage player1"
			else if (minusResult == -1) score = "Advantage player2"
			else if (minusResult >= 2) score = "Win for player1"
			else score = "Win for player2"
		} else {
			for (int i = 1; i < 3; i++) {
				if (i == 1) tempScore = m_score1
				else { score += "-"; tempScore = m_score2; }
				switch (tempScore) {
					case 0:
						score += "Love"
						break
					case 1:
						score += "Fifteen"
						break
					case 2:
						score += "Thirty"
						break
					case 3:
						score += "Forty"
						break
				}
			}
		}
		return score
	}
}
