package tennisgame1.refactoring;

import java.util.EnumSet;

import org.junit.Assert;
import org.junit.Test;


public class NumericScoreTest {
	public void testForInvalidValue() {
		NumericScore.forPoint(Integer.MIN_VALUE);
	}

	@Test
	public void testForValidValue() {
		EnumSet.allOf(NumericScore.class).stream() //
				.forEach(score -> Assert.assertEquals(score, NumericScore.forPoint(score.getPoint())));
	}

}
