package code.practise;
/**
 * Refactor of Tennis Game 1.
 *
 *
 */

public class TennisGameRefactor implements TennisGame {

	private int m_score1 = 0;
	private int m_score2 = 0;
	private GameStatus status;
	private String player1Str;
	private String player2Str;

	public TennisGameRefactor(String player1, String player2){
		player1Str = player1;
		player2Str = player2;
		status = GameStatus.LESS_THAN_THREE;
		status.setMsg(convert(0) +"-All");
	}
	public enum GameStatus {
		WINNER(""), ADVANTAGE(""), DEUCE("Deuce"), LESS_THAN_THREE("");

		private String msg;

		private GameStatus(String m) {
			msg = m;
		}

		public void setMsg(String m) {
			msg = m;
		}

		public String getMsg() {
			return msg;
		}
	}

	public void wonPoint(String playerName) {
		if (playerName.equals(player1Str))
			m_score1 += 1;
		else
			m_score2 += 1;
		updateStatus();
	}

	private void updateStatus() {
		if (m_score1 <= 3 && m_score2 <= 3) {
			int diff = m_score1 - m_score2;
			if (diff == 0 && m_score1 == 3) {
				status = GameStatus.DEUCE;
			} else {
				status = GameStatus.LESS_THAN_THREE;
				switch (diff) {
				case 0:
					status.setMsg(convert(m_score1) + "-All");
					break;
				default:
					status.setMsg(convert(m_score1) + "-" + convert(m_score2));
				}
			}
		} else {
			int minusResult = m_score1 - m_score2;
			switch (minusResult) {
			case 1:
				status = GameStatus.ADVANTAGE;
				status.setMsg("Advantage player1");
				break;
			case 0:
				status = GameStatus.DEUCE;
				break;
			case -1:
				status = GameStatus.ADVANTAGE;
				status.setMsg("Advantage player2");
				break;
			default:
				status = GameStatus.WINNER;
				if(minusResult >= 2){
					status = GameStatus.WINNER;
					status.setMsg("Win for player1");
				}else{
					status.setMsg("Win for player2");
				}
				break;
			}
		}
	}

	private String convert(int score) {
		switch (score) {
		case 0:
			return "Love";
		case 1:
			return "Fifteen";
		case 2:
			return "Thirty";
		case 3:
			return "Forty";
		default:
			return "";
		}
	}

	@Override
	public String getScore() {
		return status.getMsg();
	}
}
