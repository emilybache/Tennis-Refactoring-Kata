package tennisgame1.refactoring;

public class Player {
	private final String name;
	private final int point;
	
	public Player(String name) {
		this(name, NumericScore.LOVE.getPoint());
	}
	
	private Player(String name, int point) {
		this.name = name;
		this.point = point;
	}
	
	public String getName() {
		return name;
	}
	
	public int getPoint() {
		return point;
	}
	
	public Player wonPoint() {
		return new Player(name, point + 1);
	}
	
	public boolean hasAdvantageOver(Player player2) {
		return isInPostFortyPhase() && pointDiff(player2) == 1;
	}

	public boolean hasWonOver(Player player2) {
		return isInPostFortyPhase() && pointDiff(player2) >= 2;
	}
	
	public boolean isInDeuceAfterAdvantage(Player player2) {
		return isInPostFortyPhase() && pointDiff(player2) == 0;
	}
	
	public String getNumericScoreValue(Player player2) {
		final NumericScore score1 = NumericScore.forPoint(point);
		final NumericScore score2 = NumericScore.forPoint(player2.point);
		return score1.pairDescription(score2);
	}
	
	private boolean isInPostFortyPhase() {
		return point > NumericScore.FORTY.getPoint();
	}
	
	private int pointDiff(Player player2) {
		return point - player2.point;
	}
	
}
