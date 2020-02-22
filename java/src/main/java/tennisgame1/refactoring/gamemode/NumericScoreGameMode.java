package tennisgame1.refactoring.gamemode;

import tennisgame1.refactoring.Player;

public class NumericScoreGameMode implements GameMode {
	@Override
	public boolean isApplicable(Player player1, Player player2) {
		return !player1.isInPostFortyPhase() && !player2.isInPostFortyPhase();
	}

	@Override
	public String computeScore(Player player1, Player player2) {
		return player1.getNumericScoreValue(player2);
	}
	
}
