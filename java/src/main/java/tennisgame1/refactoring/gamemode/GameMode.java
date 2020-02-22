package tennisgame1.refactoring.gamemode;

import tennisgame1.refactoring.Player;

public interface GameMode {
	
	boolean isApplicable(Player player1, Player player2);
	
	String computeScore(Player player1, Player player2);
}
