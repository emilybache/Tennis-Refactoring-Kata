# -*- coding: utf-8 -*-


class TennisGame7:
    def __init__(self, player1Name, player2Name):
        self.player1Name = player1Name
        self.player2Name = player2Name
        self.player1Score = 0
        self.player2Score = 0

    def won_point(self, playerName):
        if playerName == "player1":
            self.player1Score += 1
        else:
            self.player2Score += 1

    def score(self):
        result = "Current score: "
        if self.player1Score == self.player2Score:
            # tie score
            result: str
            match self.player1Score:
                case 0:
                    result += "Love-All"
                case 1:
                    result += "Fifteen-All"
                case 2:
                    result += "Thirty-All"
                case _:
                    result += "Deuce"

        elif self.player1Score >= 4 or self.player2Score >= 4:
            # end-game score
            if self.player1Score - self.player2Score == 1:
                result += "Advantage " + self.player1Name
            elif self.player1Score - self.player2Score == -1:
                result += "Advantage " + self.player2Name
            elif self.player1Score - self.player2Score >= 2:
                result += "Win for " + self.player1Name
            else:
                result += "Win for " + self.player2Name

        else:
            # regular score
            match self.player1Score:
                case 0:
                    result += "Love"
                case 1:
                    result += "Fifteen"
                case 2:
                    result += "Thirty"
                case _:
                    result += "Forty"

            result += "-"

            match self.player2Score:
                case 0:
                    result += "Love"
                case 1:
                    result += "Fifteen"
                case 2:
                    result += "Thirty"
                case _:
                    result += "Forty"

        return result + ", enjoy your game!"
