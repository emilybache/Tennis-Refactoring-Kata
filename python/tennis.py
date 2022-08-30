# -*- coding: utf-8 -*-

class TennisGame1:

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

    def score(self):
        result = ""
        tempScore = 0
        if (self.p1points == self.p2points):
            result = {
                0: "Love-All",
                1: "Fifteen-All",
                2: "Thirty-All",
            }.get(self.p1points, "Deuce")
        elif (self.p1points >= 4 or self.p2points >= 4):
            minusResult = self.p1points-self.p2points
            if (minusResult == 1):
                result = "Advantage " + self.player1Name
            elif (minusResult == -1):
                result = "Advantage " + self.player2Name
            elif (minusResult >= 2):
                result = "Win for " + self.player1Name
            else:
                result = "Win for " + self.player2Name
        else:
            for i in range(1, 3):
                if (i == 1):
                    tempScore = self.p1points
                else:
                    result += "-"
                    tempScore = self.p2points
                result += {
                    0: "Love",
                    1: "Fifteen",
                    2: "Thirty",
                    3: "Forty",
                }[tempScore]
        return result


class TennisGame2:
    def __init__(self, player1Name, player2Name):
        self.player1Name = player1Name
        self.player2Name = player2Name
        self.p1points = 0
        self.p2points = 0

    def won_point(self, playerName):
        if playerName == self.player1Name:
            self.P1Score()
        else:
            self.P2Score()

    def score(self):
        pointToResult = {
            0: "Love",
            1: "Fifteen",
            2: "Thirty",
            3: "Forty",
        }

        equality = self.p1points == self.p2points
        minPoints = min(self.p1points, self.p2points)
        maxPoints = max(self.p1points, self.p2points)
        gap = maxPoints - minPoints
        leader = self.player1Name if self.p1points > self.p2points else self.player2Name

        if equality:
            if self.p1points < 3:
                return pointToResult[self.p1points] + "-All"
            else:
                return "Deuce"
        else:
            if maxPoints >= 4:
                if gap >= 2:
                    return "Win for " + leader
                else:
                    return "Advantage " + leader
            else:
                return pointToResult[self.p1points] + "-" + pointToResult[self.p2points]

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


class TennisGame3:
    def __init__(self, player1Name, player2Name):
        self.p1N = player1Name
        self.p2N = player2Name
        self.p1 = 0
        self.p2 = 0

    def won_point(self, n):
        if n == self.p1N:
            self.p1 += 1
        else:
            self.p2 += 1

    def score(self):
        if (self.p1 < 4 and self.p2 < 4) and (self.p1 + self.p2 < 6):
            p = ["Love", "Fifteen", "Thirty", "Forty"]
            s = p[self.p1]
            return s + "-All" if (self.p1 == self.p2) else s + "-" + p[self.p2]
        else:
            if (self.p1 == self.p2):
                return "Deuce"
            s = self.p1N if self.p1 > self.p2 else self.p2N
            return "Advantage " + s if ((self.p1-self.p2)*(self.p1-self.p2) == 1) else "Win for " + s
