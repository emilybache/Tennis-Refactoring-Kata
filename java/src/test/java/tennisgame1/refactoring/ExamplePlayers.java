package tennisgame1.refactoring;

public class ExamplePlayers {
	private ExamplePlayers() {
	}
	
	public static Player forScore15(String name) {
		return new Player(name).wonPoint();
	}
	
	public static Player forScore30(String name) {
		return forScore15(name).wonPoint();
	}
	
	public static Player forScore40(String name) {
		return forScore30(name).wonPoint();
	}
}
