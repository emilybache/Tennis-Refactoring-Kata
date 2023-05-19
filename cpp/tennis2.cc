#include <string>

const std::string tennis_score(int p1Score, int p2Score) {
    std::string score = "";
    std::string P1res = "";
    std::string P2res = "";
    if (p1Score == p2Score)
    {
        if(p1Score < 4)
        {   
            if (p1Score==0)
                score = "Love-All";
            else if (p1Score==1)
                score = "Fifteen-All";
            else if (p1Score==2)
                score = "Thirty-All";
        }
        if(p1Score > 2)
        {
            score = "Deuce";
        }    
    }
    
    else if (p1Score > 0 && p2Score==0)
    {
        if (p1Score==1)
            score = "Fifteen-Love";
        if (p1Score==2)
            score = "Thirty-Love";
        if (p1Score==3)
            score = "Forty-Love";
    }
    else if (p2Score > 0 && p1Score==0)
    {
        if (p2Score==1)
            score = "Love-Fifteen";
        if (p2Score==2)
            score = "Love-Thirty";
        if (p2Score==3)
            score = "Love-Forty";
    }
    
    if (p1Score > p2Score)
    {
        if(p2Score >= 3)
            score = "Advantage player1";
        else if(p1Score < 4)
            P1res = (p1Score==2) ? "Thirty" : ((p1Score==3) ? "Forty" : "");
            P2res = (p2Score==2) ? "Thirty" : ((p2Score==1) ? "Fifteen" : "");
            score = P1res + "-" + P2res;
    }
    
    else
    {
        if(p1Score >= 3)
            score = "Advantage player2";
        else if (p2Score < 4)
            P2res = (p2Score==2) ? "Thirty" : ((p2Score==3) ? "Forty" : "");
            P1res = (p1Score==2) ? "Thirty" : ((p1Score==1) ? "Fifteen" : "");
            score = P1res + "-" + P2res;
            
    }
    
    if (p1Score>=4 && p2Score>=0 && (p1Score-p2Score)>=2)
    {
        score = "Win for player1";
    }
    if (p2Score>=4 && p1Score>=0 && (p2Score-p1Score)>=2)
    {
        score = "Win for player2";
    }
    return score;
    
}
