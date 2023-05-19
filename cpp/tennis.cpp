#include "tennis.h"

const std::string tennis_score(int p1Score, int p2Score) {
    std::string score;
    if (p1Score==p2Score)
    {
        switch (p1Score)
        {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;

        }
    }
    else if (p1Score>=4 || p2Score>=4)
    {
        switch (p1Score-p2Score)
        {
                case 1:
                    score = "Advantage player1";
                    break;
                case -1:
                    score = "Advantage player2";
                    break;
                default:
                    score = (minusResult>=2) ? "Win for player1" : "Win for player2";
                    break;
        }
    }
    else
    {
        for (int i=1; i<=2; i++)
        {
            switch((i==1) ? p1Score : p2Score)
            {
                case 0:
                    score = "Love";
                    break;
                case 1:
                    score = "Fifteen";
                    break;
                case 2:
                    score = "Thirty";
                    break;
                case 3:
                    score = "Forty";
                    break;
            }
        }
    }
    return score;   
}
