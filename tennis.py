# -*- coding: utf-8 -*-


class Player:
    def __init__(self, name):
        self.name = name
        self.points = 0


class TennisGame1:
    def __init__(self, player1Name, player2Name):
        self.player1 = Player(player1Name)
        self.player2 = Player(player2Name)

    def won_point(self, playerName):
        if playerName == self.player1.name:
            self.player1.points += 1
        else:
            self.player2.points += 1

    def score(self):
        result = ""
        tempScore = 0
        if self.player1.points == self.player2.points:
            result = {
                0: "Love-All",
                1: "Fifteen-All",
                2: "Thirty-All",
            }.get(self.player1.points, "Deuce")
        elif self.player1.points >= 4 or self.player2.points >= 4:
            minusResult = self.player1.points - self.player2.points
            if minusResult == 1:
                result = "Advantage " + self.player1.name
            elif minusResult == -1:
                result = "Advantage " + self.player2.name
            elif minusResult >= 2:
                result = "Win for " + self.player1.name
            else:
                result = "Win for " + self.player2.name
        else:
            for i in range(1, 3):
                if i == 1:
                    tempScore = self.player1.points
                else:
                    result += "-"
                    tempScore = self.player2.points
                result += {
                    0: "Love",
                    1: "Fifteen",
                    2: "Thirty",
                    3: "Forty",
                }[tempScore]
        return result


class TennisGame2:
    def __init__(self, player1Name, player2Name):
        self.player1 = Player(player1Name)
        self.player2 = Player(player2Name)

    def won_point(self, playerName):
        if playerName == self.player1.name:
            self.P1Score()
        else:
            self.P2Score()

    def score(self):
        result = ""
        if self.player1.points == self.player2.points and self.player1.points < 3:
            if self.player1.points == 0:
                result = "Love"
            if self.player1.points == 1:
                result = "Fifteen"
            if self.player1.points == 2:
                result = "Thirty"
            result += "-All"
        if self.player1.points == self.player2.points and self.player1.points > 2:
            result = "Deuce"

        P1res = ""
        P2res = ""
        if self.player1.points > 0 and self.player2.points == 0:
            if self.player1.points == 1:
                P1res = "Fifteen"
            if self.player1.points == 2:
                P1res = "Thirty"
            if self.player1.points == 3:
                P1res = "Forty"

            P2res = "Love"
            result = P1res + "-" + P2res
        if self.player2.points > 0 and self.player1.points == 0:
            if self.player2.points == 1:
                P2res = "Fifteen"
            if self.player2.points == 2:
                P2res = "Thirty"
            if self.player2.points == 3:
                P2res = "Forty"

            P1res = "Love"
            result = P1res + "-" + P2res

        if self.player1.points > self.player2.points and self.player1.points < 4:
            if self.player1.points == 2:
                P1res = "Thirty"
            if self.player1.points == 3:
                P1res = "Forty"
            if self.player2.points == 1:
                P2res = "Fifteen"
            if self.player2.points == 2:
                P2res = "Thirty"
            result = P1res + "-" + P2res
        if self.player2.points > self.player1.points and self.player2.points < 4:
            if self.player2.points == 2:
                P2res = "Thirty"
            if self.player2.points == 3:
                P2res = "Forty"
            if self.player1.points == 1:
                P1res = "Fifteen"
            if self.player1.points == 2:
                P1res = "Thirty"
            result = P1res + "-" + P2res

        if self.player1.points > self.player2.points and self.player2.points >= 3:
            result = "Advantage " + self.player1.name

        if self.player2.points > self.player1.points and self.player1.points >= 3:
            result = "Advantage " + self.player2.name

        if (
            self.player1.points >= 4
            and self.player2.points >= 0
            and (self.player1.points - self.player2.points) >= 2
        ):
            result = "Win for " + self.player1.name
        if (
            self.player2.points >= 4
            and self.player1.points >= 0
            and (self.player2.points - self.player1.points) >= 2
        ):
            result = "Win for " + self.player2.name
        return result

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


class TennisGame3:
    def __init__(self, player1Name, player2Name):
        self.player1 = Player(player1Name)
        self.player2 = Player(player2Name)

    def won_point(self, n):
        if n == self.player1.name:
            self.player1.points += 1
        else:
            self.player2.points += 1

    def score(self):
        if (self.player1.points < 4 and self.player2.points < 4) and (
            self.player1.points + self.player2.points < 6
        ):
            p = ["Love", "Fifteen", "Thirty", "Forty"]
            s = p[self.player1.points]
            return (
                s + "-All"
                if (self.player1.points == self.player2.points)
                else s + "-" + p[self.player2.points]
            )
        else:
            if self.player1.points == self.player2.points:
                return "Deuce"
            s = (
                self.player1.name
                if self.player1.points > self.player2.points
                else self.player2.name
            )
            return (
                "Advantage " + s
                if (
                    (self.player1.points - self.player2.points)
                    * (self.player1.points - self.player2.points)
                    == 1
                )
                else "Win for " + s
            )
