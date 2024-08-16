#include <string>

std::string tennis_score(int player1Score, int player2Score)
{
    std::string result = "";
    std::string player1Name = "player1";
    std::string player2Name = "player2";

    if (player1Score == player2Score)
    {
        // tie score
        switch (player1Score)
        {
            case 0: result += "Love-All"; break;
            case 1: result += "Fifteen-All"; break;
            case 2: result += "Thirty-All"; break;
            default: result += "Deuce"; break;
        }
    }
    else if (player1Score >= 4 || player2Score >= 4)
    {
        // end-game score
        if (player1Score - player2Score == 1)
        {
            result += "Advantage " + player1Name;
        }
        else if (player1Score - player2Score == -1)
        {
            result += "Advantage " + player2Name;
        }
        else if (player1Score - player2Score >= 2)
        {
            result += "Win for " + player1Name;
        }
        else
        {
            result += "Win for " + player2Name;
        }
    } else {
        // regular score
        switch (player1Score) {
            case 0:
                result += "Love";
            break;
            case 1:
                result += "Fifteen";
            break;
            case 2:
                result += "Thirty";
            break;
            default:
                result += "Forty";
            break;
        }
        result += "-";
        switch (player2Score) {
            case 0:
                result += "Love";
            break;
            case 1:
                result += "Fifteen";
            break;
            case 2:
                result += "Thirty";
            break;
            default:
                result += "Forty";
            break;
        }
    }

    return result;
}
