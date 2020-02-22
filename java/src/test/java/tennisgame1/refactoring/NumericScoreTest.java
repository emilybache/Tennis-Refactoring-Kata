package tennisgame1.refactoring;

import java.util.EnumSet;
import java.util.Set;

import org.junit.Assert;
import org.junit.Test;

import tennisgame1.refactoring1.NumericScore;


public class NumericScoreTest {
	@Test
	public void testPairDescriptionDeuce() {
		Assert.assertEquals(ScoreNames.DEUCE, //
				NumericScore.FORTY.pairDescription(NumericScore.FORTY));
	}

	@Test
	public void testPairDescriptionEndingInAllForEqualScores() {
		Set<NumericScore> nonFortyScores = EnumSet.complementOf(EnumSet.of(NumericScore.FORTY));
		for (NumericScore score : nonFortyScores) {
			final String expected = score.getDescription() + ScoreNames.ALL_SUFFIX;
			Assert.assertEquals(expected, score.pairDescription(score));
		}
	}

	@Test
	public void testPairDescriptionForNonEqualScores() {
		for (NumericScore score1 : NumericScore.values()) {
			final Set<NumericScore> nonMatchingScore2s = EnumSet.complementOf(EnumSet.of(score1));
			for (NumericScore score2 : nonMatchingScore2s) {
				final String expected = score1.getDescription() + '-' + score2.getDescription();
				Assert.assertEquals(expected, score1.pairDescription(score2));
			}
		}
	}

	@Test(expected = IllegalArgumentException.class)
	public void testForInvalidValue() {
		NumericScore.forPoint(Integer.MIN_VALUE);
	}

	@Test
	public void testForValidValue() {
		EnumSet.allOf(NumericScore.class).stream() //
				.forEach(score -> Assert.assertEquals(score, NumericScore.forPoint(score.getPoint())));
	}

}
