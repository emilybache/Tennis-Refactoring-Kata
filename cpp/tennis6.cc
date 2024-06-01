#include <string>

std::string tennis_score(int player1Score, int player2Score)
{
    std::string result;
    std::string player1Name = "player1";
    std::string player2Name = "player2";

    if (player1Score == player2Score)
    {
        // tie score
        std::string tieScore;
        switch (player1Score)
        {
            case 0: tieScore = "Love-All"; break;
            case 1: tieScore = "Fifteen-All"; break;
            case 2: tieScore = "Thirty-All"; break;
            default: tieScore = "Deuce"; break;
        }
        result = tieScore;
    }
    else if (player1Score >= 4 || player2Score >= 4)
    {
        // end-game score
        std::string endGameScore;
        if (player1Score - player2Score == 1)
        {
            endGameScore = "Advantage " + player1Name;
        }
        else if (player1Score - player2Score == -1)
        {
            endGameScore = "Advantage " + player2Name;
        }
        else if (player1Score - player2Score >= 2)
        {
            endGameScore = "Win for " + player1Name;
        }
        else
        {
            endGameScore = "Win for " + player2Name;
        }
        result = endGameScore;
    } else {
        // regular score
        std::string regularScore;
        std::string score1;
        switch (player1Score) {
            case 0:
                score1 = "Love";
            break;
            case 1:
                score1 = "Fifteen";
            break;
            case 2:
                score1 = "Thirty";
            break;
            default:
                score1 = "Forty";
            break;
        }

        std::string score2;
        switch (player2Score) {
            case 0:
                score2 = "Love";
            break;
            case 1:
                score2 = "Fifteen";
            break;
            case 2:
                score2 = "Thirty";
            break;
            default:
                score2 = "Forty";
            break;
        }

        regularScore = score1 + "-" + score2;
        result = regularScore;
    }

    return result;
}
