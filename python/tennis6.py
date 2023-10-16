# -*- coding: utf-8 -*-

class TennisGame6:
    def __init__(self, player1Name, player2Name):
        self.player1Name = player1Name
        self.player2Name = player2Name
        self.player1Score = 0
        self.player2Score = 0

    def won_point(self, playerName):
        if (playerName == "player1"):
            self.player1Score += 1
        else:
            self.player2Score += 1

    def score(self):
        result: str

        if (self.player1Score == self.player2Score):
            # tie score
            tieScore: str
            match self.player1Score:
                case 0:
                    tieScore = "Love-All"
                case 1:
                    tieScore = "Fifteen-All"
                case 2:
                    tieScore = "Thirty-All"
                case _:
                    tieScore = "Deuce"

            result = tieScore
        elif (self.player1Score >= 4 or self.player2Score >= 4):
            # end-game score
            endGameScore: str

            if (self.player1Score - self.player2Score == 1):
                endGameScore = "Advantage " + self.player1Name
            elif (self.player1Score - self.player2Score == -1):
                endGameScore = "Advantage " + self.player2Name
            elif (self.player1Score - self.player2Score >= 2):
                endGameScore = "Win for " + self.player1Name
            else:
                endGameScore = "Win for " + self.player2Name

            result = endGameScore
        else:
            # regular score
            regularScore: str

            match (self.player1Score):
                case 0:
                    score1 = "Love"
                case 1:
                    score1 = "Fifteen"
                case 2:
                    score1 = "Thirty"
                case _:
                    score1 = "Forty"

            match (self.player2Score):
                case 0:
                    score2 = "Love"
                case 1:
                    score2 = "Fifteen"
                case 2:
                    score2 = "Thirty"
                case _:
                    score2 = "Forty"

            regularScore = score1 + "-" + score2

            result = regularScore

        return result
