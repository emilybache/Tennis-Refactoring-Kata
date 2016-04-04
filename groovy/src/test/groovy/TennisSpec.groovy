import spock.lang.*

public class TennisSpec extends Specification {

	@Shared
	def game1

    @Shared
    def game2

    @Shared
    def game3

	def setup() {
		game1 = new TennisGame1(player1Name: "player1", player2Name: "player2")
		game2 = new TennisGame2(player1Name: "player1", player2Name: "player2")
		game3 = new TennisGame3(p1N: "player1", p2N: "player2")

	}

	@Unroll
	def "expecting '#expectedScore' for #player1Score-#player2Score"() {
		when:
		playGame(game1, player1Score, player2Score)
        playGame(game2, player1Score, player2Score)
        playGame(game3, player1Score, player2Score)

		then:
		expectedScore == game1.score
        expectedScore == game2.score
        expectedScore == game3.score

		where:
		player1Score | player2Score || expectedScore
		0            | 0            || "Love-All"
		1            | 1            || "Fifteen-All"
		2            | 2            || "Thirty-All"
		3            | 3            || "Deuce"
		4            | 4            || "Deuce"

		1            | 0            || "Fifteen-Love"
		0            | 1            || "Love-Fifteen"
		2            | 0            || "Thirty-Love"
		0            | 2            || "Love-Thirty"
		3            | 0            || "Forty-Love"
		0            | 3            || "Love-Forty"
		4            | 0            || "Win for player1"
		0            | 4            || "Win for player2"

		2            | 1            || "Thirty-Fifteen"
		1            | 2            || "Fifteen-Thirty"
		3            | 1            || "Forty-Fifteen"
		1            | 3            || "Fifteen-Forty"
		4            | 1            || "Win for player1"
		1            | 4            || "Win for player2"

		3            | 2            || "Forty-Thirty"
		2            | 3            || "Thirty-Forty"
		4            | 2            || "Win for player1"
		2            | 4            || "Win for player2"

		4            | 3            || "Advantage player1"
		3            | 4            || "Advantage player2"
		5            | 4            || "Advantage player1"
		4            | 5            || "Advantage player2"
		15           | 14           || "Advantage player1"
		14           | 15           || "Advantage player2"

		6            | 4            || "Win for player1"
		4            | 6            || "Win for player2"
		16           | 14           || "Win for player1"
		14           | 16           || "Win for player2"
	}

	def playGame(game, player1Score, player2Score) {
		int highestScore = Math.max(player1Score, player2Score);
		for (int i = 0; i < highestScore; i++) {
			if (i < player1Score)
				game.wonPoint("player1");
			if (i < player2Score)
				game.wonPoint("player2");
		}
	}
}
