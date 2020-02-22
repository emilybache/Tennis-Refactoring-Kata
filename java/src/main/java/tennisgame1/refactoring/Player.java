package tennisgame1.refactoring;

public class Player {
	private final String name;
	private final int point;
	
	public Player(String name) {
		this(name, 0);
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
	
	public boolean isInPostFortyPhase() {
		return point > NumericScore.FORTY.getPoint();
	}
	
}
