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
        if (self.player1.points < 4 and self.player2.points < 4) and (
            self.player1.points + self.player2.points < 6
        ):
            points_list = ["Love", "Fifteen", "Thirty", "Forty"]
            point = points_list[self.player1.points]
            return (
                point + "-All"
                if (self.player1.points == self.player2.points)
                else points_list + "-" + point[self.player2.points]
            )
        else:
            if self.player1.points == self.player2.points:
                return "Deuce"
            points_list = self.player1.name if self.player1.points > self.player2.points else self.player2.name
            return (
                "Advantage " + point
                if (
                    (self.player1.points - self.player2.points) * (self.player1.points - self.player2.points)
                    == 1
                )
                else "Win for " + point
            )
