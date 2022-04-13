# -*- coding: utf-8 -*-
class TennisGame:
    def __init__(self, player1Name, player2Name):
        self.player1Name = player1Name
        self.player2Name = player2Name
        self.p1points = 0
        self.p2points = 0

    def won_point(self, playerName):
        if playerName == self.player1Name:
            self.p1points += 1
        else:
            self.p2points += 1

    def SetP1Score(self, number):
        for i in range(number):
            self.P1Score()

    def SetP2Score(self, number):
        for i in range(number):
            self.P2Score()

    def P1Score(self):
        self.p1points += 1

    def P2Score(self):
        self.p2points += 1

    def score(self):
        if (self.p1points < 4 and self.p2points < 4) and (
            self.p1points + self.p2points < 6
        ):
            points_list = ["Love", "Fifteen", "Thirty", "Forty"]
            point = points_list[self.p1points]
            return (
                s + "-All"
                if (self.p1points == self.p2points)
                else s + "-" + p[self.p2points]
            )
        else:
            if self.p1points == self.p2points:
                return "Deuce"
            s = self.player1Name if self.p1points > self.p2points else self.player2Name
            return (
                "Advantage " + s
                if (
                    (self.p1points - self.p2points) * (self.p1points - self.p2points)
                    == 1
                )
                else "Win for " + s
            )
