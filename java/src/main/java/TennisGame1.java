import player.Player;

public class TennisGame1 implements TennisGame {
    
    private int m_score1 = 0;
    private int m_score2 = 0;
    private String player1Name;
    private String player2Name;
    private PlayerGameScore playerGameScore = new PlayerGameScore();
    private AdvantageScoreWithTwoPointsDifference advantageScore = new  AdvantageScoreWithTwoPointsDifference();
    private EqualityScore equalityScore = new EqualityScore(playerGameScore);
    private IncrementScore incrementScore = new IncrementScore();

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
        String score = "";
        if (m_score1==m_score2)
        {
            score = equalityScore.equalityScore(m_score1);
        }
        else if ((m_score1>=4 || m_score2>=4) )
        {
            score = advantageScore.advantagesScore(new Player(m_score1, player1Name), new Player(m_score2, player2Name));
        }
        else
        {
            score = playerGameScore.score(m_score1) + "-" + playerGameScore.score(m_score2);
        }
        return score;
    }



}
