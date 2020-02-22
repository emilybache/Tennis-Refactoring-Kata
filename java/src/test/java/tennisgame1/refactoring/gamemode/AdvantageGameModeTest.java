package tennisgame1.refactoring.gamemode;

import org.junit.Assert;
import org.junit.Test;

import tennisgame1.refactoring.ExamplePlayers;
import tennisgame1.refactoring.Player;
import tennisgame1.refactoring.ScoreNames;

public class AdvantageGameModeTest {
	private final GameMode gameMode = new AdvantageGameMode();

	private Player player1;
	private Player player2;

	@Test
	public void testIsApplicablePlayer1Win() {
		setUpPlayer1Advantage();
		Assert.assertTrue(gameMode.isApplicable(player1, player2));
	}

	@Test
	public void testIsApplicablePlayer2Win() {
		setUpPlayer2Advantage();
		Assert.assertTrue(gameMode.isApplicable(player1, player2));
	}

	@Test
	public void testIsApplicableNeitherWin() {
		setUpNeitherAdvantage();
		Assert.assertFalse(gameMode.isApplicable(player1, player2));
	}

	@Test
	public void testComputeScorePlayer1Win() {
		setUpPlayer1Advantage();
		Assert.assertEquals(ScoreNames.ADV_PREFIX + player1.getName(), gameMode.computeScore(player1, player2));
	}

	@Test
	public void testComputeScorePlayer2Win() {
		setUpPlayer2Advantage();
		Assert.assertEquals(ScoreNames.ADV_PREFIX + player2.getName(), gameMode.computeScore(player1, player2));
	}

	@Test(expected = IllegalStateException.class)
	public void testComputeScoreNeitherWin() {
		setUpNeitherAdvantage();
		gameMode.computeScore(player1, player2);
	}

	private void setUpPlayer1Advantage() {
		player1 = ExamplePlayers.forScore40("player1").wonPoint();
		player2 = ExamplePlayers.forScore40("player2");
	}

	private void setUpPlayer2Advantage() {
		player1 = ExamplePlayers.forScore40("player1");
		player2 = ExamplePlayers.forScore40("player2").wonPoint();
	}

	private void setUpNeitherAdvantage() {
		player1 = ExamplePlayers.forScore15("player1");
		player2 = ExamplePlayers.forScore40("player2");
	}
}
