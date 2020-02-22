import tennisgame1.refactoring.Player;
import tennisgame1.refactoring.ScoreNames;

public class TennisGame1Refactored implements TennisGame {
	private Player player1;
	private Player player2;

	public TennisGame1Refactored(String player1Name, String player2Name) {
		player1 = new Player(player1Name);
		player2 = new Player(player2Name);
	}

	@Override
	public void wonPoint(String playerName) {
		if (player1.getName().equals(playerName)) {
			player1 = player1.wonPoint();
		}
		if (player2.getName().equals(playerName)) {
			player2 = player2.wonPoint();
		}
	}

	@Override
	public String getScore() {
		if (player1.hasWonOver(player2)) {
			return ScoreNames.WIN_PREFIX + player1.getName();
		}
		if (player2.hasWonOver(player1)) {
			return ScoreNames.WIN_PREFIX + player2.getName();
		}

		if (player1.hasAdvantageOver(player2)) {
			return ScoreNames.ADV_PREFIX + player1.getName();
		}
		if (player2.hasAdvantageOver(player1)) {
			return ScoreNames.ADV_PREFIX + player2.getName();
		}

		if (player1.isInDeuceAfterAdvantage(player2)) {
			return ScoreNames.DEUCE;
		}
		
		// all scenarios handled for post deuce modes
		// simply compute numeric score 
		return player1.getNumericScoreValue(player2);
	}
}
