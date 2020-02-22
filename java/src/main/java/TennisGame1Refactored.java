import tennisgame1.refactoring.Player;

public class TennisGame1Refactored implements TennisGame {
	private Player player1;
	private Player player2;
	
	public TennisGame1Refactored(String player1Name, String player2Name) {
		player1 = new Player(player1Name);
		player2 = new Player(player2Name);
	}

	@Override
	public void wonPoint(String playerName) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getScore() {
		// TODO Auto-generated method stub
		return null;
	}

}
