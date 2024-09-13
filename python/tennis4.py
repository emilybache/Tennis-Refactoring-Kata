class TennisGame4:
    def __init__(self, player1_name, player2_name):
        self.server = player1_name
        self.receiver = player2_name
        self.server_score = 0
        self.receiver_score = 0

    def won_point(self, player_name):
        if self.server == player_name:
            self.server_score += 1
        else:
            self.receiver_score += 1

    def score(self):
        result = Deuce(
            self,
            GameServer(
                self,
                GameReceiver(
                    self,
                    AdvantageServer(self, AdvantageReceiver(self, DefaultResult(self))),
                ),
            ),
        ).get_result()
        return result.format()

    def receiver_has_advantage(self):
        return (
            self.receiver_score >= 4 and (self.receiver_score - self.server_score) == 1
        )

    def server_has_advantage(self):
        return self.server_score >= 4 and (self.server_score - self.receiver_score) == 1

    def receiver_has_won(self):
        return (
            self.receiver_score >= 4 and (self.receiver_score - self.server_score) >= 2
        )

    def server_has_won(self):
        return self.server_score >= 4 and (self.server_score - self.receiver_score) >= 2

    def is_deuce(self):
        return (
            self.server_score >= 3
            and self.receiver_score >= 3
            and (self.server_score == self.receiver_score)
        )


class TennisResult:
    def __init__(self, server_score, receiver_score):
        self.server_score = server_score
        self.receiver_score = receiver_score

    def format(self):
        if "" == self.receiver_score:
            return self.server_score
        if self.server_score == self.receiver_score:
            return self.server_score + "-All"
        return self.server_score + "-" + self.receiver_score


class Deuce:
    def __init__(self, game, next_result):
        self.game = game
        self.next_result = next_result

    def get_result(self):
        if self.game.is_deuce():
            return TennisResult("Deuce", "")
        return self.next_result.get_result()


class GameServer:
    def __init__(self, game, next_result):
        self.game = game
        self.next_result = next_result

    def get_result(self):
        if self.game.server_has_won():
            return TennisResult("Win for " + self.game.server, "")
        return self.next_result.get_result()


class GameReceiver:
    def __init__(self, game, next_result):
        self.game = game
        self.next_result = next_result

    def get_result(self):
        if self.game.receiver_has_won():
            return TennisResult("Win for " + self.game.receiver, "")
        return self.next_result.get_result()


class AdvantageServer:
    def __init__(self, game, next_result):
        self.game = game
        self.next_result = next_result

    def get_result(self):
        if self.game.server_has_advantage():
            return TennisResult("Advantage " + self.game.server, "")
        return self.next_result.get_result()


class AdvantageReceiver:
    def __init__(self, game, next_result):
        self.game = game
        self.next_result = next_result

    def get_result(self):
        if self.game.receiver_has_advantage():
            return TennisResult("Advantage " + self.game.receiver, "")
        return self.next_result.get_result()


class DefaultResult:
    def __init__(self, game):
        self.game = game
        self.scores = ["Love", "Fifteen", "Thirty", "Forty"]

    def get_result(self):
        return TennisResult(
            self.scores[self.game.server_score], self.scores[self.game.receiver_score]
        )
