class TennisGame1:

    scores = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty",
    }
    def __init__(self, player1_name, player2_name):
        self.player1_name = player1_name
        self.player2_name = player2_name
        self.p1points = 0
        self.p2points = 0

    def won_point(self, player_name):
        if player_name == "player1":
            self.p1points += 1
        else:
            self.p2points += 1

    def __get_equal_points_score(self, score):
        """
        """
        return {
                0: "Love-All",
                1: "Fifteen-All",
                2: "Thirty-All",
            }.get(score, "Deuce")

    def __get_4_or_more_score(self):
        """
        """
        minus_result = self.p1points - self.p2points
        if minus_result == 1:
            result = "Advantage player1"
        elif minus_result == -1:
            result = "Advantage player2"
        elif minus_result >= 2:
            result = "Win for player1"
        else:
            result = "Win for player2"
        return result

    def __get_delta_players_scores(self):
        """
        """
        return self.p1points - self.p2points
    
    def __has_winner(self, delta_score):
        """
        """
        return abs(delta_score) >= 2

    def __has_advantage(self, delta_score):
        """
        """
        return abs(delta_score) == 1
    
    def __who_is_leading(self, delta_score):
        """
        """
        if delta_score > 0:
            return {"name": self.player1_name, "score": self.p1points}
        elif delta_score < 0:
            return {"name": self.player2_name, "score": self.p2points}
        return None

    def __has_equal_score(self, delta_score):
        """
        """
        return abs(delta_score) == 0

    def __has_deuce(self):
        """
        """
        return self.p1points == self.p2points == 3

    def __calculate_score(self, delta_score=None):
        """
        """
        return f"{self.scores[self.p1points]}-{'All' if delta_score else self.scores[self.p2points]}"

    def __winner_score_result(player):
        return f"Win for {player['name']}"
    def __advantage_score_result(player):
        return f"Advantage {player['name']}"
    def __deuce_score_result():
        return "Deuce"
    
    def score(self):
        if self.p1points == self.p2points:
            result = self.__get_equal_points_score(self.p1points)
        elif self.p1points >= 4 or self.p2points >= 4:
            result = self.__get_4_or_more_score()
        else:
            result = self.__calculate_score()
        return result
