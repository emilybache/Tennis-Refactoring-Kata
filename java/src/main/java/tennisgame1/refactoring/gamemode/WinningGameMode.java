package tennisgame1.refactoring.gamemode;

import tennisgame1.refactoring.Player;
import tennisgame1.refactoring.ScoreNames;

public class WinningGameMode implements GameMode {
	@Override
	public boolean isApplicable(Player player1, Player player2) {
		return player1.hasWonOver(player2) || player2.hasWonOver(player1);
	}

	@Override
	public String computeScore(Player player1, Player player2) {
		if (player1.hasWonOver(player2)) {
			return ScoreNames.WIN_PREFIX + player1.getName();
		}
		if (player2.hasWonOver(player1)) {
			return ScoreNames.WIN_PREFIX + player2.getName();
		}
		
		throw new IllegalStateException("WinningGameMode must have at least one winner");
	}
}
