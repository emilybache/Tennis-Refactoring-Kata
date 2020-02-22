package tennisgame1.refactoring;

import org.junit.Assert;
import org.junit.Test;

public class PlayerTest {
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
	public void testIsInPostFortyPhaseLoveScore() {
		final Player player = new Player("player");
		Assert.assertFalse(player.isInPostFortyPhase());
	}
	
	@Test
	public void testIsInPostFortyPhaseAdvScore() {
		Assert.assertTrue(new Player("player") //
				.wonPoint() // 15
				.wonPoint() // 30
				.wonPoint() // 40 
				.wonPoint() // adv
				.isInPostFortyPhase());
	}
}
