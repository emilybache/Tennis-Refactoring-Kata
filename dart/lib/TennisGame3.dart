
import 'dart:core';

import 'TennisGame.dart';

class TennisGame3 implements TennisGame {

    int _p2 = 0;
    int _p1 = 0;
    String _p1N;
    String _p2N;

    TennisGame3(String p1N, String p2N) {
        this._p1N = p1N;
        this._p2N = p2N;
    }

    String getScore() {
        String s;
        if (_p1 < 4 && _p2 < 4 && !(_p1 + _p2 == 6)) {
            List<String> p = ["Love", "Fifteen", "Thirty", "Forty"];
            s = p[_p1];
            return (_p1 == _p2) ? s + "-All" : s + "-" + p[_p2];
        } else {
            if (_p1 == _p2)
                return "Deuce";
            s = _p1 > _p2 ? _p1N : _p2N;
            return ((_p1-_p2)*(_p1-_p2) == 1) ? "Advantage " + s : "Win for " + s;
        }
    }

    void wonPoint(String playerName) {
        if (playerName == "player1")
            this._p1 += 1;
        else
            this._p2 += 1;

    }

}
