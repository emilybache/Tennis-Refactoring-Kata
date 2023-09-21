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
        if self.scores_delta == 0:
            return self._tie_round
        elif self.p1points >= 4 or self.p2points >= 4:
            return self._final_rounds
        return self._winning_round

    @property
    def _winning_round(self):
        return f"{self._scores[ self.p1points ]}-{self._scores[ self.p2points ]}"

    @property
    def _tie_round(self):
        return f"{self._scores[ self.p1points ]}-All" if self.p1points < 3 else "Deuce"

    @property
    def _final_rounds(self):
        winning_player = 1 if self.scores_delta > 0 else 2
        if abs(self.scores_delta) >= 2:
            return f"Win for player{winning_player}"
        return f"Advantage player{winning_player}"

    @property
    def scores_delta(self):
        """ Return the delta of the players' score """
        return self.p1points - self.p2points
