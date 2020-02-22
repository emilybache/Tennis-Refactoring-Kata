package tennisgame1.refactoring.gamemode;

import org.junit.Assert;
import org.junit.Test;

import tennisgame1.refactoring.ExamplePlayers;
import tennisgame1.refactoring.Player;
import tennisgame1.refactoring.ScoreNames;

public class DeuceAfterAdvantageGameModeTest {
	private final GameMode gameMode = new DeuceAfterAdvantageGameMode();
	
	private Player player1;
	private Player player2;
	
	@Test
	public void testIsApplicableDeuce2() {
		setUpDeuce2();
		Assert.assertTrue(gameMode.isApplicable(player1, player2));
	}
	
	@Test
	public void testIsApplicableDeuce1() {
		setUpDeuce1();
		Assert.assertFalse(gameMode.isApplicable(player1, player2));
	}
	
	@Test
	public void testComputeScore() {
		// irrespective of players, it should be "DEUCE"
		Assert.assertEquals(ScoreNames.DEUCE, gameMode.computeScore(null, null));
	}
	
	private void setUpDeuce1() {
		player1 = ExamplePlayers.forScore40("player1");
		player2 = player1;
	}
	
	private void setUpDeuce2() {
		player1 = ExamplePlayers.forScore40("player") //
				.wonPoint() // ADV
				.wonPoint(); // Deuce #2
		player2 = player1;
	}
}

