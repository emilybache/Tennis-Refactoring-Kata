import player.Player;
import player.WinScore;

public class TennisGame1 implements TennisGame {

    private final WinScore winScore = new WinScore();
    private int m_score1 = 0;
    private int m_score2 = 0;
    private String player1Name;
    private String player2Name;
    private PlayerGameScore playerGameScore = new PlayerGameScore();
    private AdvantageScoreWithTwoPointsDifference advantageScore = new AdvantageScoreWithTwoPointsDifference();
    private EqualityScore equalityScore = new EqualityScore(playerGameScore);
    private IncrementScore incrementScore = new IncrementScore();
    private DeuceScore deuceScore = new DeuceScore();

    public TennisGame1(String player1Name, String player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    public void wonPoint(String playerName) {
        if (playerName == "player1") {
            m_score1 = incrementScore.scoreAPoint(m_score1);
        } else
            m_score2 = incrementScore.scoreAPoint(m_score2);
    }


    public String getScore() {
        Player player1 = new Player(m_score1, player1Name);
        Player player2 = new Player(m_score2, player2Name);

        String score;
        if (m_score1 == m_score2 && m_score1 >= 3) {
            score = deuceScore.deuceScore();
        } else if (m_score1 == m_score2) {
            score = equalityScore.equalityScore(playerGameScore.score(m_score1));
        } else if ((m_score1 < 4 && m_score2 < 4)) {
            score = playerGameScore.score(m_score1) + "-" + playerGameScore.score(m_score2);
        } else if (Math.abs(m_score1 - m_score2) < 2) {
            score = advantageScore.advantagesScore(player1, player2);
        } else {
            score = winScore.winScore(player1, player2);
        }

        return score;
    }



}
