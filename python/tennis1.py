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

    def __get_game_score(self):
        """
        """
        result = ""
        temp_score = 0
        for i in range(1, 3):
                if i == 1:
                    temp_score = self.p1points
                else:
                    result += "-"
                    temp_score = self.p2points
                result += self.scores[temp_score]
        return result

    def score(self):
        if self.p1points == self.p2points:
            result = self.__get_equal_points_score(self.p1points)
        elif self.p1points >= 4 or self.p2points >= 4:
            result = self.__get_4_or_more_score()
        else:
            result = self.__get_game_score()
        return result
