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

    def __get_delta_players_scores(self):
        """
        """
        return self.p1points - self.p2points

    def __player_has_4_or_more_points(self):
        """
        """
        return self.p1points >= 4 or self.p2points >= 4
    
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
        return self.p1points == self.p2points and self.p1points in [3, 4]

    def __calculate_score(self):
        """
        """
        return f"{self.scores[self.p1points]}-{self.scores[self.p2points]}"

    def __all_score(self):
        """
        """
        return f"{self.scores[self.p1points]}-All"

    def __winner_score_result(self, player):
        return f"Win for {player['name']}"
    def __advantage_score_result(self, player):
        return f"Advantage {player['name']}"
    def __deuce_score_result(self):
        return "Deuce"
    
    def score(self):
        delta = self.__get_delta_players_scores()
        leading_player = self.__who_is_leading(delta)
        if self.__has_winner(delta) and self.__player_has_4_or_more_points():
            result = self.__winner_score_result(leading_player)
        elif self.__has_advantage(delta) and self.__player_has_4_or_more_points():
            result = self.__advantage_score_result(leading_player)
        elif self.__has_deuce():
            result = self.__deuce_score_result()
        elif self.__has_equal_score(delta):
            result = self.__all_score()
        else:
            result = self.__calculate_score()
        return result
