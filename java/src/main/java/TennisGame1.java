
public class TennisGame1 implements TennisGame {
    
	// TODO encapsulate score and player name in a "Player" class
    private int m_score1 = 0;
    private int m_score2 = 0;
    private String player1Name;
    private String player2Name;

    public TennisGame1(String player1Name, String player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    public void wonPoint(String playerName) {
    	// TODO remove hard-coded "player1" and compare with actual player1 object
    	// Encapsulating score and name in Player, we can have a method player.wonPoint()
        if (playerName == "player1")
            m_score1 += 1;
        else
            m_score2 += 1;
    }

    public String getScore() {
        String score = "";
        int tempScore=0;
        
        // TODO This logic can be delegated to a separate method call
        // 
        // This is the matching score mode
        if (m_score1==m_score2)
        {
            switch (m_score1)
            {
             // TODO These constants need to be declared in a class rather than hard-coded strings
             // prone to typographical errors
                case 0:
                        score = "Love-All";
                    break;
                case 1:
                        score = "Fifteen-All";
                    break;
                case 2:
                        score = "Thirty-All";
                    break;
                    
			// it's too intuitive to understand that any equal points are a "deuce"
			// case (m_score1==m_score2) = 3 is first deuce, (m_score1==m_score2) >= 4 equal
			// values are all post advantage deuces.
                default:
                        score = "Deuce";
                    break;
                
            }
        }
        else if (m_score1>=4 || m_score2>=4) // TODO make this conditional check a meaningful method
        {
        	// TODO this logic can be delegated and simplified to another method
        	// Also code formatting can applied for readability
        	
        	// This is the beyond 40 point mode
            int minusResult = m_score1-m_score2;
            if (minusResult==1) score ="Advantage player1";
            else if (minusResult ==-1) score ="Advantage player2";
            else if (minusResult>=2) score = "Win for player1";
            else score ="Win for player2";
        }
        else
        {
        	// TODO Perhaps there is a better way to do this rather than a for-loop
        	//
        	// This is the non-matching score mode
        	// This can be simplified by utilizing LOVE, FIFTEEN, THIRTY, FORTY
            for (int i=1; i<3; i++)
            {
                if (i==1) tempScore = m_score1;
                else { score+="-"; tempScore = m_score2;}
                switch(tempScore)
                {
                // TODO use constants for "Love", "Fifteen", "Thirty" etc..
                    case 0:
                        score+="Love";
                        break;
                    case 1:
                        score+="Fifteen";
                        break;
                    case 2:
                        score+="Thirty";
                        break;
                    case 3:
                        score+="Forty";
                        break;
                }
            }
        }
        return score;
    }
}
