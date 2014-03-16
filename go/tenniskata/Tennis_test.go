package tenniskata

import (
	"math"
	"testing"
)

type testDataSample struct {
	player1Score  int
	player2Score  int
	expectedScore string
}

var testData = []testDataSample{
	{0, 0, "Love-All"},
	{1, 1, "Fifteen-All"},
	{2, 2, "Thirty-All"},
	{3, 3, "Deuce"},
	{4, 4, "Deuce"},

	{1, 0, "Fifteen-Love"},
	{0, 1, "Love-Fifteen"},
	{2, 0, "Thirty-Love"},
	{0, 2, "Love-Thirty"},
	{3, 0, "Forty-Love"},
	{0, 3, "Love-Forty"},
	{4, 0, "Win for player1"},
	{0, 4, "Win for player2"},

	{2, 1, "Thirty-Fifteen"},
	{1, 2, "Fifteen-Thirty"},
	{3, 1, "Forty-Fifteen"},
	{1, 3, "Fifteen-Forty"},
	{4, 1, "Win for player1"},
	{1, 4, "Win for player2"},

	{3, 2, "Forty-Thirty"},
	{2, 3, "Thirty-Forty"},
	{4, 2, "Win for player1"},
	{2, 4, "Win for player2"},

	{4, 3, "Advantage player1"},
	{3, 4, "Advantage player2"},
	{5, 4, "Advantage player1"},
	{4, 5, "Advantage player2"},
	{15, 14, "Advantage player1"},
	{14, 15, "Advantage player2"},

	{6, 4, "Win for player1"},
	{4, 6, "Win for player2"},
	{16, 14, "Win for player1"},
	{14, 16, "Win for player2"}}

func runSuiteOnGame(t *testing.T, factory func(player1Name string, player2Name string) TennisGame) {
	for _, sample := range testData {
		game := factory("player1", "player2")
		highestScore := int(math.Max(float64(sample.player1Score), float64(sample.player2Score)))

		for i := 0; i < highestScore; i++ {
			if i < sample.player1Score {
				game.WonPoint("player1")
			}
			if i < sample.player2Score {
				game.WonPoint("player2")
			}
		}

		result := game.GetScore()
		if sample.expectedScore != result {
			t.Logf("Expected \"%s\" but was \"%s\" for %d:%d", sample.expectedScore, result, sample.player1Score, sample.player2Score)
			t.Fail()
		}
	}
}

func TestTennisGame1(t *testing.T) {
	runSuiteOnGame(t, func(player1Name string, player2Name string) TennisGame { return TennisGame1(player1Name, player2Name) })
}

func TestTennisGame2(t *testing.T) {
	runSuiteOnGame(t, func(player1Name string, player2Name string) TennisGame { return TennisGame2(player1Name, player2Name) })
}

func TestTennisGame3(t *testing.T) {
	runSuiteOnGame(t, func(player1Name string, player2Name string) TennisGame { return TennisGame3(player1Name, player2Name) })
}
