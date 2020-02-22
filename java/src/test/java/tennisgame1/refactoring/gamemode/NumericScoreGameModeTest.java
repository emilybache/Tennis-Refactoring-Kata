package tennisgame1.refactoring.gamemode;

import org.junit.Assert;
import org.junit.Test;

import tennisgame1.refactoring.ExamplePlayers;
import tennisgame1.refactoring.Player;

public class NumericScoreGameModeTest {
	private final GameMode gameMode = new NumericScoreGameMode();
	
	private Player player1;
	private Player player2;
	
	@Test
	public void testIsApplicableNeitherPost40Phase() {
		player1 = ExamplePlayers.forScore15("player1");
		player2 = ExamplePlayers.forScore30("player2");
		Assert.assertTrue(gameMode.isApplicable(player1, player2));
	}
	
	@Test
	public void testIsApplicablePlayer1Post40Phase() {
		player1 = ExamplePlayers.forScore40("player1").wonPoint(); //ADV
		player2 = ExamplePlayers.forScore15("player2");
		Assert.assertFalse(gameMode.isApplicable(player1, player2));
	}
	
	@Test
	public void testIsApplicablePlayer2Post40Phase() {
		player1 = ExamplePlayers.forScore40("player1");
		player2 = ExamplePlayers.forScore40("player2").wonPoint(); //ADV
		Assert.assertFalse(gameMode.isApplicable(player1, player2));
	}
	
	@Test
	public void testIsApplicableBothPost40Phase() {
		// deuce #2, post 40
		player1 = ExamplePlayers.forScore40("player1").wonPoint(); 
		player2 = ExamplePlayers.forScore40("player2").wonPoint();
		Assert.assertFalse(gameMode.isApplicable(player1, player2));
	}

	@Test
	public void testComputeScore() {
		player1 = ExamplePlayers.forScore30("player1");
		player2 = ExamplePlayers.forScore40("player2");
		Assert.assertEquals(player1.getNumericScoreValue(player2), gameMode.computeScore(player1, player2));
	}
}
