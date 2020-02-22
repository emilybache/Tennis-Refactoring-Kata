import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import tennisgame1.refactoring.Player;
import tennisgame1.refactoring.gamemode.AdvantageGameMode;
import tennisgame1.refactoring.gamemode.DeuceAfterAdvantageGameMode;
import tennisgame1.refactoring.gamemode.GameMode;
import tennisgame1.refactoring.gamemode.NumericScoreGameMode;
import tennisgame1.refactoring.gamemode.WinningGameMode;

public class TennisGame1Refactored implements TennisGame {
	private static Set<GameMode> ALL_GAME_MODES = Stream.of(new WinningGameMode(), //
			new AdvantageGameMode(), //
			new DeuceAfterAdvantageGameMode(), //
			new NumericScoreGameMode()).collect(Collectors.toSet());
	
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
		for (GameMode gameMode: ALL_GAME_MODES) {
			if (gameMode.isApplicable(player1, player2)) {
				return gameMode.computeScore(player1, player2);
			}
		}
		throw new IllegalStateException("This Should never occur as we have covered all possible game modes by now");
	}
}
