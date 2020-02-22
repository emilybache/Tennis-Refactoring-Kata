package tennisgame1.refactoring;

import org.junit.Assert;
import org.junit.Test;


public class ScoreNamesTest {
	@Test
	public void testConstants() {
		Assert.assertEquals("Love", ScoreNames.LOVE);
		Assert.assertEquals("Fifteen", ScoreNames.FIFTEEN);
		Assert.assertEquals("Thirty", ScoreNames.THIRTY);
		Assert.assertEquals("Forty", ScoreNames.FORTY);
		Assert.assertEquals("Deuce", ScoreNames.DEUCE);
		Assert.assertEquals("Advantage ", ScoreNames.ADV_PREFIX);
		Assert.assertEquals("Win for ", ScoreNames.WIN_PREFIX);
	}	
}
