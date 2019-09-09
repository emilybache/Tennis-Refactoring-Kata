import 'dart:math';

import 'package:test/test.dart';

import '../lib/TennisGame.dart';
import '../lib/TennisGame1.dart';
import '../lib/TennisGame2.dart';
import '../lib/TennisGame3.dart';

main() {
  var allScores = [
    TennisTest(0, 0, "Love-All"),
    TennisTest(1, 1, "Fifteen-All"),
    TennisTest(2, 2, "Thirty-All"),
    TennisTest(3, 3, "Deuce"),
    TennisTest(4, 4, "Deuce"),
    TennisTest(1, 0, "Fifteen-Love"),
    TennisTest(0, 1, "Love-Fifteen"),
    TennisTest(2, 0, "Thirty-Love"),
    TennisTest(0, 2, "Love-Thirty"),
    TennisTest(3, 0, "Forty-Love"),
    TennisTest(0, 3, "Love-Forty"),
    TennisTest(4, 0, "Win for player1"),
    TennisTest(0, 4, "Win for player2"),
    TennisTest(2, 1, "Thirty-Fifteen"),
    TennisTest(1, 2, "Fifteen-Thirty"),
    TennisTest(3, 1, "Forty-Fifteen"),
    TennisTest(1, 3, "Fifteen-Forty"),
    TennisTest(4, 1, "Win for player1"),
    TennisTest(1, 4, "Win for player2"),
    TennisTest(3, 2, "Forty-Thirty"),
    TennisTest(2, 3, "Thirty-Forty"),
    TennisTest(4, 2, "Win for player1"),
    TennisTest(2, 4, "Win for player2"),
    TennisTest(4, 3, "Advantage player1"),
    TennisTest(3, 4, "Advantage player2"),
    TennisTest(5, 4, "Advantage player1"),
    TennisTest(4, 5, "Advantage player2"),
    TennisTest(15, 14, "Advantage player1"),
    TennisTest(14, 15, "Advantage player2"),
    TennisTest(6, 4, "Win for player1"),
    TennisTest(4, 6, "Win for player2"),
    TennisTest(16, 14, "Win for player1"),
    TennisTest(14, 16, "Win for player2"),
  ];

  void checkAllScores(TennisGame game, TennisTest test) {
    int highestScore = max(test.player1Score, test.player2Score);
    for (int i = 0; i < highestScore; i++) {
      if (i < test.player1Score) game.wonPoint("player1");
      if (i < test.player2Score) game.wonPoint("player2");
    }
    expect(game.getScore(), test.expectedScore);
  }

  group('checkAllScoresTennisGame1', () {
    allScores.forEach((tested) {
      test('${tested.player1Score} - ${tested.player2Score} - ${tested.expectedScore}', () {
        TennisGame1 game = new TennisGame1("player1", "player2");
        checkAllScores(game, tested);
      });
    });
  });

  group('checkAllScoresTennisGame2', () {
    allScores.forEach((tested) {
      test('${tested.player1Score} - ${tested.player2Score} - ${tested.expectedScore}', () {
        TennisGame2 game = new TennisGame2("player1", "player2");
        checkAllScores(game, tested);
      });
    });
  });

  group('checkAllScoresTennisGame3', () {
    allScores.forEach((tested) {
      test('${tested.player1Score} - ${tested.player2Score} - ${tested.expectedScore}', () {
        TennisGame3 game = new TennisGame3("player1", "player2");
        checkAllScores(game, tested);
      });
    });
  });
}

class TennisTest {
  int player1Score;
  int player2Score;
  String expectedScore;

  TennisTest(this.player1Score, this.player2Score, this.expectedScore) {}
}
