
import 'dart:core';

import 'TennisGame.dart';

class TennisGame1 implements TennisGame {

    int _m_score1 = 0;
    int _m_score2 = 0;
    String _player1Name;
    String _player2Name;

    TennisGame1(String player1Name, String player2Name) {
        this._player1Name = player1Name;
        this._player2Name = player2Name;
    }

    void wonPoint(String playerName) {
        if (playerName == "player1")
            _m_score1 += 1;
        else
            _m_score2 += 1;
    }

    String getScore() {
        String score = "";
        int tempScore=0;
        if (_m_score1==_m_score2)
        {
            switch (_m_score1)
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
        else if (_m_score1>=4 || _m_score2>=4)
        {
            int minusResult = _m_score1-_m_score2;
            if (minusResult==1) score ="Advantage player1";
            else if (minusResult ==-1) score ="Advantage player2";
            else if (minusResult>=2) score = "Win for player1";
            else score ="Win for player2";
        }
        else
        {
            for (int i=1; i<3; i++)
            {
                if (i==1) tempScore = _m_score1;
                else { score+="-"; tempScore = _m_score2;}
                switch(tempScore)
                {
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
