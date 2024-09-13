class TennisGame6:
    def __init__(self, player1_name, player2_name):
        self.player1_name = player1_name
        self.player2_name = player2_name
        self.player1_score = 0
        self.player2_score = 0

    def won_point(self, player_name):
        if player_name == "player1":
            self.player1_score += 1
        else:
            self.player2_score += 1

    def score(self):
        result: str

        if self.player1_score == self.player2_score:
            # tie score
            tie_score: str
            match self.player1_score:
                case 0:
                    tie_score = "Love-All"
                case 1:
                    tie_score = "Fifteen-All"
                case 2:
                    tie_score = "Thirty-All"
                case _:
                    tie_score = "Deuce"

            result = tie_score
        elif self.player1_score >= 4 or self.player2_score >= 4:
            # end-game score
            end_game_score: str

            if self.player1_score - self.player2_score == 1:
                end_game_score = "Advantage " + self.player1_name
            elif self.player1_score - self.player2_score == -1:
                end_game_score = "Advantage " + self.player2_name
            elif self.player1_score - self.player2_score >= 2:
                end_game_score = "Win for " + self.player1_name
            else:
                end_game_score = "Win for " + self.player2_name

            result = end_game_score
        else:
            # regular score
            regular_score: str

            match self.player1_score:
                case 0:
                    score1 = "Love"
                case 1:
                    score1 = "Fifteen"
                case 2:
                    score1 = "Thirty"
                case _:
                    score1 = "Forty"

            match self.player2_score:
                case 0:
                    score2 = "Love"
                case 1:
                    score2 = "Fifteen"
                case 2:
                    score2 = "Thirty"
                case _:
                    score2 = "Forty"

            regular_score = score1 + "-" + score2

            result = regular_score

        return result
