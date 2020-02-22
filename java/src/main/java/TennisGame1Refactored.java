import tennisgame1.refactoring.NumericScore;
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
		if (player1.getName().equals(playerName)) {
			player2 = player2.wonPoint();
		}
	}

	@Override
	public String getScore() {
		return isPastDeuce() ? computePostDeuceScore() : computePreDeuceScore();
	}

	private boolean isPastDeuce() {
		// 0 = love, 1 = 15, 2 = 30, 3 = 40/deuce
		return player1.isInPostFortyPhase() || player2.isInPostFortyPhase();
	}
	
	private String computePostDeuceScore() {
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
		
		// has to be deuce #2, or #3 ... #n
		return ScoreNames.DEUCE;
	}
	
	private String computePreDeuceScore() {
		final NumericScore score1 = NumericScore.forPoint(player1.getPoint());
		final NumericScore score2 = NumericScore.forPoint(player2.getPoint());
		return score1.pairDescription(score2);
	}
}
