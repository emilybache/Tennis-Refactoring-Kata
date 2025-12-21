package tenniskata


type Player struct {
	Name string
	Score int
}

type tennisGame1 struct {
	FirstPlayer Player
	SecondPlayer Player
}

func TennisGame1(firstPlayerName string, secondPlayerName string) TennisGame {
	game := &tennisGame1{
		FirstPlayer: Player{Name: firstPlayerName},
		SecondPlayer: Player{Name: secondPlayerName},
	}

	return game
}

func (game *tennisGame1) WonPoint(playerName string) {
	if playerName == game.FirstPlayer.Name {
		game.FirstPlayer.Score += 1
	} else {
		game.SecondPlayer.Score += 1
	}
}

func (game *tennisGame1) GetScore() string {
	if game.FirstPlayer.Score == game.SecondPlayer.Score {
		return getEvenScore(game.FirstPlayer.Score)
	} 
	
	if game.FirstPlayer.Score >= 4 || game.SecondPlayer.Score >= 4 {
		return getWinScore(game.FirstPlayer.Score, game.SecondPlayer.Score)
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
	return getSinglePlayerTempScore(game.FirstPlayer.Score) + "-" + getSinglePlayerTempScore(game.SecondPlayer.Score)
}

func getSinglePlayerTempScore(playerScore int) string {
	switch playerScore {
	case 0:
		return "Love"
	case 1:
		return "Fifteen"
	case 2:
		return "Thirty"
	case 3:
		return "Forty"
	default:
		return ""
	}
}