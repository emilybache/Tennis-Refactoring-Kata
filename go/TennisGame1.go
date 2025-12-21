package tenniskata

type tennisGame1 struct {
	m_score1    int
	m_score2    int
	player1Name string
	player2Name string
}

func TennisGame1(player1Name string, player2Name string) TennisGame {
	game := &tennisGame1{
		player1Name: player1Name,
		player2Name: player2Name}

	return game
}

func (game *tennisGame1) WonPoint(playerName string) {
	if playerName == "player1" {
		game.m_score1 += 1
	} else {
		game.m_score2 += 1
	}
}

func (game *tennisGame1) GetScore() string {
	
	if game.m_score1 == game.m_score2 {
		return getEvenScore(game.m_score1)
	} 
	
	if game.m_score1 >= 4 || game.m_score2 >= 4 {
		return getWinScore(game.m_score1, game.m_score2)
	} 
	
	return getTempScore(game)
}


func getEvenScore(score int) string {
	switch score {
	case 0:
		return "Love-All"
	case 1:
		return "Fifteen-All"
	case 2:
		return "Thirty-All"
	default:
		return "Deuce"
	}
}

func getWinScore(firstScore int, secondScore int) string {
	minusResult := firstScore - secondScore
	if minusResult == 1 {
		return "Advantage player1"
	} 
	
	if minusResult == -1 {
		return "Advantage player2"
	} 
	
	if minusResult >= 2 {
		return "Win for player1"
	} 
	
	return "Win for player2"
}

func getTempScore(game *tennisGame1) string {
	score := ""
	tempScore := 0
	for i := 1; i < 3; i++ {
		if i == 1 {
			tempScore = game.m_score1
		} else {
			score += "-"
			tempScore = game.m_score2
		}
		switch tempScore {
		case 0:
			score += "Love"
		case 1:
			score += "Fifteen"
		case 2:
			score += "Thirty"
		case 3:
			score += "Forty"
		}
	}
	return score
}