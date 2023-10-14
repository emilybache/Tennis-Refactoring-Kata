# -*- coding: utf-8 -*-

class TennisGame5:
    def __init__(self, player1Name, player2Name):
        self.player1Name = player1Name
        self.player2Name = player2Name
        self.player1Score = 0
        self.player2Score = 0

    def won_point(self, playerName):
        if (playerName == "player1"):
            self.player1Score += 1
        elif (playerName == "player2"):
            self.player2Score += 1
        else:
            raise ValueError("Invalid player name.")

    def score(self):
        p1 = self.player1Score
        p2 = self.player2Score

        while (p1 > 4 or p2 > 4):
            p1 -= 1
            p2 -= 1

        lookup = {
            (0, 0): "Love-All",
            (0, 1): "Love-Fifteen",
            (0, 2): "Love-Thirty",
            (0, 3): "Love-Forty",
            (0, 4): "Win for player2",
            (1, 0): "Fifteen-Love",
            (1, 1): "Fifteen-All",
            (1, 2): "Fifteen-Thirty",
            (1, 3): "Fifteen-Forty",
            (1, 4): "Win for player2",
            (2, 0): "Thirty-Love",
            (2, 1): "Thirty-Fifteen",
            (2, 2): "Thirty-All",
            (2, 3): "Thirty-Forty",
            (2, 4): "Win for player2",
            (3, 0): "Forty-Love",
            (3, 1): "Forty-Fifteen",
            (3, 2): "Forty-Thirty",
            (3, 3): "Deuce",
            (3, 4): "Advantage player2",
            (4, 0): "Win for player1",
            (4, 1): "Win for player1",
            (4, 2): "Win for player1",
            (4, 3): "Advantage player1",
            (4, 4): "Deuce",
        }

        entry = (p1, p2)
        if (entry in lookup):
            return lookup[entry]
        else:
            raise ValueError("Invalid score.")
