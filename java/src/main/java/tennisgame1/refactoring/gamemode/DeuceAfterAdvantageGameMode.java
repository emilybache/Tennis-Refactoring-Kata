package tennisgame1.refactoring.gamemode;

import tennisgame1.refactoring.Player;
import tennisgame1.refactoring.ScoreNames;

public class DeuceAfterAdvantageGameMode implements GameMode {
	@Override
	public boolean isApplicable(Player player1, Player player2) {
		return player1.isInDeuceAfterAdvantage(player2);
	}

	@Override
	public String computeScore(Player player1, Player player2) {
		return ScoreNames.DEUCE;
	}
	
}
