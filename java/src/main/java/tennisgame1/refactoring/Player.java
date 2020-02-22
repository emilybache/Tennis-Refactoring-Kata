package tennisgame1.refactoring;

public class Player {
	private final String name;
	private final int point;
	
	public Player(String name) {
		this.name = name;
		point = 0;
	}
	
	public String getName() {
		return name;
	}
	
	public int getPoint() {
		return point;
	}
	
}
