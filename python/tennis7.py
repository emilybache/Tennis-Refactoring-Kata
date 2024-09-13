class TennisGame7:
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
        result = "Current score: "
        if self.player1_score == self.player2_score:
            # tie score
            result: str
            match self.player1_score:
                case 0:
                    result += "Love-All"
                case 1:
                    result += "Fifteen-All"
                case 2:
                    result += "Thirty-All"
                case _:
                    result += "Deuce"

        elif self.player1_score >= 4 or self.player2_score >= 4:
            # end-game score
            if self.player1_score - self.player2_score == 1:
                result += "Advantage " + self.player1_name
            elif self.player1_score - self.player2_score == -1:
                result += "Advantage " + self.player2_name
            elif self.player1_score - self.player2_score >= 2:
                result += "Win for " + self.player1_name
            else:
                result += "Win for " + self.player2_name

        else:
            # regular score
            match self.player1_score:
                case 0:
                    result += "Love"
                case 1:
                    result += "Fifteen"
                case 2:
                    result += "Thirty"
                case _:
                    result += "Forty"

            result += "-"

            match self.player2_score:
                case 0:
                    result += "Love"
                case 1:
                    result += "Fifteen"
                case 2:
                    result += "Thirty"
                case _:
                    result += "Forty"

        return result + ", enjoy your game!"
