# -*- coding: utf-8 -*-
class Player:
    def __init__(self, name):
        self.name = name
        self.points = 0

class TennisGame:
    def __init__(self, player1Name, player2Name):
        self.player1 = Player(player1Name)
        self.player2 = Player(player2Name)

    def won_point(self, playerName):
        if playerName == self.player1.name:
            self.player1.points += 1
        else:
            self.player2.points += 1

    def SetP1Score(self, number):
        for i in range(number):
            self.P1Score()

    def SetP2Score(self, number):
        for i in range(number):
            self.P2Score()

    def P1Score(self):
        self.player1.points += 1

    def P2Score(self):
        self.player2.points += 1

    def score(self):
        if (self.p1points < 4 and self.p2points < 4) and (
            self.p1points + self.p2points < 6
        ):
            points_list = ["Love", "Fifteen", "Thirty", "Forty"]
            point = points_list[self.p1points]
            return (
                points_list + "-All"
                if (self.p1points == self.p2points)
                else points_list + "-" + point[self.p2points]
            )
        else:
            if self.p1points == self.p2points:
                return "Deuce"
            s = self.player1Name if self.p1points > self.p2points else self.player2Name
            return (
                "Advantage " + points_list
                if (
                    (self.p1points - self.p2points) * (self.p1points - self.p2points)
                    == 1
                )
                else "Win for " + points_list
            )