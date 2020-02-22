package tennisgame1.refactoring.gamemode;

import tennisgame1.refactoring.Player;
import tennisgame1.refactoring.ScoreNames;

public class AdvantageGameMode implements GameMode {
	@Override
	public boolean isApplicable(Player player1, Player player2) {
		return player1.hasAdvantageOver(player2) || player2.hasAdvantageOver(player1);
	}

	@Override
	public String computeScore(Player player1, Player player2) {
		if (player1.hasAdvantageOver(player2)) {
			return ScoreNames.ADV_PREFIX + player1.getName();
		}
		if (player2.hasAdvantageOver(player1)) {
			return ScoreNames.ADV_PREFIX + player2.getName();
		}
		throw new IllegalStateException("AdvantageGameMode must have at least one player in advantage");
	}

}
