# -*- coding: utf-8 -*-

class TennisGame4:
    def __init__(self, player1Name, player2Name):
        self.server = player1Name
        self.receiver = player2Name
        self.serverScore = 0
        self.receiverScore = 0

    def won_point(self, playerName):
        if self.server == playerName:
            self.serverScore += 1
        else:
            self.receiverScore += 1

    def score(self):
        result = Deuce(
            self, GameServer(
                self, GameReceiver(
                    self, AdvantageServer(
                        self, AdvantageReceiver(
                            self, DefaultResult(self)))))).getResult()
        return result.format()

    def receiverHasAdvantage(self):
        return self.receiverScore >= 4 and (self.receiverScore - self.serverScore) == 1

    def serverHasAdvantage(self):
        return self.serverScore >= 4 and (self.serverScore - self.receiverScore) == 1

    def receiverHasWon(self):
        return self.receiverScore >= 4 and (self.receiverScore - self.serverScore) >= 2

    def serverHasWon(self):
        return self.serverScore >= 4 and (self.serverScore - self.receiverScore) >= 2

    def isDeuce(self):
        return self.serverScore >= 3 and self.receiverScore >= 3 and (self.serverScore == self.receiverScore)


class TennisResult:
    def __init__(self, serverScore, receiverScore):
        self.serverScore = serverScore
        self.receiverScore = receiverScore

    def format(self):
        if "" == self.receiverScore:
            return self.serverScore
        if self.serverScore == self.receiverScore:
            return self.serverScore + "-All"
        return self.serverScore + "-" + self.receiverScore


class Deuce:
    def __init__(self, game, nextResult):
        self.game = game
        self.nextResult = nextResult

    def getResult(self):
        if (self.game.isDeuce()):
            return TennisResult("Deuce", "")
        return self.nextResult.getResult()


class GameServer:
    def __init__(self, game, nextResult):
        self.game = game
        self.nextResult = nextResult

    def getResult(self):
        if (self.game.serverHasWon()):
            return TennisResult("Win for " + self.game.server, "")
        return self.nextResult.getResult()


class GameReceiver:
    def __init__(self, game, nextResult):
        self.game = game
        self.nextResult = nextResult

    def getResult(self):
        if (self.game.receiverHasWon()):
            return TennisResult("Win for " + self.game.receiver, "")
        return self.nextResult.getResult()


class AdvantageServer:
    def __init__(self, game, nextResult):
        self.game = game
        self.nextResult = nextResult

    def getResult(self):
        if (self.game.serverHasAdvantage()):
            return TennisResult("Advantage " + self.game.server, "")
        return self.nextResult.getResult()


class AdvantageReceiver:
    def __init__(self, game, nextResult):
        self.game = game
        self.nextResult = nextResult

    def getResult(self):
        if (self.game.receiverHasAdvantage()):
            return TennisResult("Advantage " + self.game.receiver, "")
        return self.nextResult.getResult()


class DefaultResult:
    def __init__(self, game):
        self.game = game
        self.scores = ["Love", "Fifteen", "Thirty", "Forty"]

    def getResult(self):
        return TennisResult(self.scores[self.game.serverScore], self.scores[self.game.receiverScore])
