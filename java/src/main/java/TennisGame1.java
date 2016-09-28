import java.util.HashMap;
import java.util.Map;

public class TennisGame1 implements TennisGame {

	private static final String DASH = "-";
	private static final String WIN_FOR = "Win for ";
	private static final String ADVANTAGE = "Advantage ";
	private static final String ALL = "All";
	private static final String LOVE = "Love";
	private static final String FORTY = "Forty";
	private static final String FIFTEEN = "Fifteen";
	private static final String THIRTY = "Thirty";
	private static final String DEUCE = "Deuce";

	private int player1Score = 0;
	private int player2Score = 0;
	private String player1Name;
	private String player2Name;
	private Map<Integer, String> scores = new HashMap<>();

	public TennisGame1(String player1Name, String player2Name) {
		this.player1Name = player1Name;
		this.player2Name = player2Name;
		scores.put(0, LOVE);
		scores.put(1, FIFTEEN);
		scores.put(2, THIRTY);
	}

	public void wonPoint(String playerName) {
		if (playerName == player1Name)
			player1Score += 1;
		else
			player2Score += 1;
	}

	public String getScore() {
		if (isScoresEquals()) {
			return getTennisScoreNameIfScoreEquals(player1Score);
		} else if (existsAdvantage()) {
			return getIsWinOrAdvantage() + getWinningPlayerName(player1Score, player2Score);
		} else {
			return getTennisScoreName(player1Score) + DASH + getTennisScoreName(player2Score);
		}

	}

	private String getIsWinOrAdvantage() {
		if (existsWin(player1Score, player2Score)) {
			return WIN_FOR;
		} else {
			return ADVANTAGE;
		}
	}

	private String getTennisScoreName(int tempScore) {
		if (scores.containsKey(tempScore)) {
			return scores.get(tempScore);
		}
		return FORTY;
	}

	private String getTennisScoreNameIfScoreEquals(int playerScore) {
		if (scores.containsKey(playerScore)) {
			String score = scores.get(playerScore);
			score += DASH + ALL;
			return score;
		}
		return DEUCE;
	}

	private boolean existsWin(int player1Score, int player2Score) {
		int signedPlayersScoreDifference = player1Score - player2Score;
		return (signedPlayersScoreDifference >= 2 || signedPlayersScoreDifference <= -2);
	}

	private boolean existsAdvantage() {
		return player1Score >= 4 || player2Score >= 4;
	}

	private boolean isScoresEquals() {
		return player1Score == player2Score;
	}

	private String getWinningPlayerName(Integer player1Score, Integer player2Score) {
		return player1Score > player2Score ? player1Name : player2Name;
	}

}
