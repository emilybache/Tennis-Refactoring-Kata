package tenniskata

type TennisGame interface {
	WonPoint(playerName string)
	GetScore() string
}
