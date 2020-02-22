package tennisgame1.refactoring;

import java.util.EnumSet;

public enum NumericScore {
	LOVE(ScoreNames.LOVE), //
	FIFTEEN(ScoreNames.FIFTEEN), //
	THIRTY(ScoreNames.THIRTY), //
	FORTY(ScoreNames.FORTY);
	
	private final String description;

	private NumericScore(String description) {
		this.description = description;
	}
	
	public int getPoint() {
		return ordinal();
	}
	
	public String getDescription() {
		return description;
	}
	
	public String pairDescription(NumericScore score2) {
		return (getPoint() == score2.getPoint()) ? //
				equalPointDescription() : //
				description + '-' + score2.description;
	}

	private String equalPointDescription() {
		return this == FORTY ? ScoreNames.DEUCE : description + ScoreNames.ALL_SUFFIX;
	}

	@Override
	public String toString() {
		return description + '(' + getPoint() + ')';
	}
	
	public static NumericScore forPoint(int point) {
		return EnumSet.allOf(NumericScore.class).stream() //
				.filter(score -> point == score.getPoint()) //
				.findFirst() //
				.orElseThrow(() -> new IllegalArgumentException("Invalid point:" + point
						+ ". Numeric scores are supported from " + LOVE + " to " + FORTY + " only"));
	}
}
