package tennisgame1.refactoring;

import org.junit.Assert;
import org.junit.Test;

public class PlayerTest {
	private Player player1;
	private Player player2;
	
	@Test
	public void testNew() {
		final Player player = new Player("player");
		Assert.assertEquals("player", player.getName());
		Assert.assertEquals(0, player.getPoint());
	}

	@Test
	public void testWonPoint() {
		final Player player = new Player("player");
		Assert.assertEquals(player.getPoint() + 1, player.wonPoint().getPoint());
	}
	
	@Test
	public void testHasAdvantageOverDeuce1() {
		setUpDeuce1();
		Assert.assertFalse(player1.hasAdvantageOver(player2));
		Assert.assertFalse(player2.hasAdvantageOver(player1));
	}

	@Test
	public void testHasAdvantageOverPlayer1Adv1() {
		setUpPlayer1Adv1();
		Assert.assertTrue(player1.hasAdvantageOver(player2));
		Assert.assertFalse(player2.hasAdvantageOver(player1));
	}

	@Test
	public void testHasAdvantageOverDeuce2() {
		setUpDeuce2();
		Assert.assertFalse(player1.hasAdvantageOver(player2));
		Assert.assertFalse(player2.hasAdvantageOver(player1));
	}

	@Test
	public void testHasWonOverDeuce1() {
		setUpDeuce1();
		Assert.assertFalse(player1.hasWonOver(player2));
		Assert.assertFalse(player2.hasWonOver(player1));
	}

	@Test
	public void testHasWonOverPlayer1Adv1() {
		setUpPlayer1Adv1();
		Assert.assertFalse(player1.hasWonOver(player2));
		Assert.assertFalse(player2.hasAdvantageOver(player1));
	}

	@Test
	public void testHasWonOverPlayer1Win() {
		setUpPlayer1Adv1();
		player1 = player1.wonPoint(); // win!
		Assert.assertTrue(player1.hasWonOver(player2));
		Assert.assertFalse(player2.hasWonOver(player1));
	}
	
	@Test
	public void testIsInDeuceAfterAdvantageDeuce1() {
		setUpDeuce1();
		Assert.assertFalse(player1.isInDeuceAfterAdvantage(player2));
		Assert.assertFalse(player2.isInDeuceAfterAdvantage(player1));
	}

	@Test
	public void testIsInDeuceAfterAdvantagePlayer1Adv1() {
		setUpPlayer1Adv1();
		Assert.assertFalse(player1.isInDeuceAfterAdvantage(player2));
		Assert.assertFalse(player2.isInDeuceAfterAdvantage(player1));
	}

	@Test
	public void testIsInDeuceAfterAdvantageDeuce2() {
		setUpDeuce2();
		Assert.assertTrue(player1.isInDeuceAfterAdvantage(player2));
		Assert.assertTrue(player2.isInDeuceAfterAdvantage(player1));
	}
	
	@Test
	public void testGetNumericScoreValue() {
		final Player player1 = ExamplePlayers.forScore30("player");
		final Player player2 = ExamplePlayers.forScore15("player2");
		
		Assert.assertEquals(NumericScore.THIRTY.pairDescription(NumericScore.FIFTEEN),
				player1.getNumericScoreValue(player2));
	}


	private void setUpDeuce1() {
		player1 = ExamplePlayers.forScore40("player1");
		player2 = ExamplePlayers.forScore40("player2");
	}

	private void setUpPlayer1Adv1() {
		setUpDeuce1();
		player1 = player1.wonPoint();
	}

	private void setUpDeuce2() {
		setUpPlayer1Adv1();
		player2 = player2.wonPoint();
	}
}
