package tennisgame1.refactoring.gamemode;

import org.junit.Assert;
import org.junit.Test;

import tennisgame1.refactoring.ExamplePlayers;
import tennisgame1.refactoring.Player;
import tennisgame1.refactoring.ScoreNames;

public class WinningGameModeTest {
	private final GameMode gameMode = new WinningGameMode();

	private Player player1;
	private Player player2;

	@Test
	public void testIsApplicablePlayer1Win() {
		setUpPlayer1Win();
		Assert.assertTrue(gameMode.isApplicable(player1, player2));
	}

	@Test
	public void testIsApplicablePlayer2Win() {
		setUpPlayer2Win();
		Assert.assertTrue(gameMode.isApplicable(player1, player2));
	}

	@Test
	public void testIsApplicableNeitherWin() {
		setUpNeitherWin();
		Assert.assertFalse(gameMode.isApplicable(player1, player2));
	}

	@Test
	public void testComputeScorePlayer1Win() {
		setUpPlayer1Win();
		Assert.assertEquals(ScoreNames.WIN_PREFIX + player1.getName(), gameMode.computeScore(player1, player2));
	}
	
	@Test
	public void testComputeScorePlayer2Win() {
		setUpPlayer2Win();
		Assert.assertEquals(ScoreNames.WIN_PREFIX + player2.getName(), gameMode.computeScore(player1, player2));
	}
	
	@Test(expected = IllegalStateException.class)
	public void testComputeScoreNeitherWin() {
		setUpNeitherWin();
		gameMode.computeScore(player1, player2);
	}

	private void setUpPlayer1Win() {
		player1 = ExamplePlayers.forScore40("player1").wonPoint();
		player2 = ExamplePlayers.forScore15("player2");
	}

	private void setUpPlayer2Win() {
		player1 = ExamplePlayers.forScore30("player1");
		player2 = ExamplePlayers.forScore40("player2").wonPoint();
	}

	private void setUpNeitherWin() {
		player1 = ExamplePlayers.forScore15("player1");
		player2 = ExamplePlayers.forScore40("player2");
	}
}
