class TennisGame1:
    _scores = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty",
        }

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
        """ Return what score would be announced by the referee """
        if self.delta_score == 0:
            return self._tie_round
        elif self.p1points >= 4 or self.p2points >= 4:
            return self._final_round
        return self._winning_round

    @property
    def _winning_round(self):
        return f"{self._scores[ self.p1points ]}-{self._scores[ self.p2points ]}"

    @property
    def _tie_round(self):
        return f"{self._scores[ self.p1points ]}-All" if self.p1points < 3 else "Deuce"

    @property
    def _final_round(self):
        if self.delta_score >= 2:
            return "Win for player1"
        elif self.delta_score > -2:
            return "Advantage player1" if self.delta_score > 0 else "Advantage player2"
        return "Win for player2"

    @property
    def delta_score(self):
        return self.p1points - self.p2points
