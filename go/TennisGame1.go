package tenniskata

type Player struct {
	Name  string
	Score int
}

type tennisGame1 struct {
	FirstPlayer  Player
	SecondPlayer Player
}

func TennisGame1(firstPlayerName string, secondPlayerName string) TennisGame {
	game := &tennisGame1{
		FirstPlayer:  Player{Name: firstPlayerName},
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
	if game.isEven() {
		return getEvenScore(game.FirstPlayer.Score)
	}

	if game.isWin() {
		return getWinScore(game)
	}

	return getTempScore(game)
}

func (game *tennisGame1) isEven() bool {
	return game.FirstPlayer.Score == game.SecondPlayer.Score
}

func (game *tennisGame1) isWin() bool {
	return game.FirstPlayer.Score >= 4 || game.SecondPlayer.Score >= 4
}

func getEvenScore(score int) string {
	switch score {
	case 0:
		return LOVE + SCORE_SEPARATOR + ALL
	case 1:
		return FIFTEEN + SCORE_SEPARATOR + ALL
	case 2:
		return THIRTY + SCORE_SEPARATOR + ALL
	default:
		return DEUCE
	}
}

func getWinScore(game *tennisGame1) string {
	minusResult := game.FirstPlayer.Score - game.SecondPlayer.Score
	if minusResult == 1 {
		return ADVANTAGE + " " + game.FirstPlayer.Name
	}

	if minusResult == -1 {
		return ADVANTAGE + " " + game.SecondPlayer.Name
	}

	if minusResult >= 2 {
		return WIN + " " + game.FirstPlayer.Name
	}

	return WIN + " " + game.SecondPlayer.Name
}

func getTempScore(game *tennisGame1) string {
	return getSinglePlayerTempScore(game.FirstPlayer.Score) + SCORE_SEPARATOR + getSinglePlayerTempScore(game.SecondPlayer.Score)
}

func getSinglePlayerTempScore(playerScore int) string {
	switch playerScore {
	case 0:
		return LOVE
	case 1:
		return FIFTEEN
	case 2:
		return THIRTY
	case 3:
		return FORTY
	default:
		return ""
	}
}
