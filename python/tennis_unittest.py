import unittest

from tennis1 import TennisGame1
from tennis2 import TennisGame2
from tennis3 import TennisGame3
from tennis4 import TennisGame4
from tennis5 import TennisGame5
from tennis6 import TennisGame6
from tennis7 import TennisGame7

test_cases = [
    (0, 0, "Love-All", "player1", "player2"),
    (1, 1, "Fifteen-All", "player1", "player2"),
    (2, 2, "Thirty-All", "player1", "player2"),
    (3, 3, "Deuce", "player1", "player2"),
    (4, 4, "Deuce", "player1", "player2"),
    (1, 0, "Fifteen-Love", "player1", "player2"),
    (0, 1, "Love-Fifteen", "player1", "player2"),
    (2, 0, "Thirty-Love", "player1", "player2"),
    (0, 2, "Love-Thirty", "player1", "player2"),
    (3, 0, "Forty-Love", "player1", "player2"),
    (0, 3, "Love-Forty", "player1", "player2"),
    (4, 0, "Win for player1", "player1", "player2"),
    (0, 4, "Win for player2", "player1", "player2"),
    (2, 1, "Thirty-Fifteen", "player1", "player2"),
    (1, 2, "Fifteen-Thirty", "player1", "player2"),
    (3, 1, "Forty-Fifteen", "player1", "player2"),
    (1, 3, "Fifteen-Forty", "player1", "player2"),
    (4, 1, "Win for player1", "player1", "player2"),
    (1, 4, "Win for player2", "player1", "player2"),
    (3, 2, "Forty-Thirty", "player1", "player2"),
    (2, 3, "Thirty-Forty", "player1", "player2"),
    (4, 2, "Win for player1", "player1", "player2"),
    (2, 4, "Win for player2", "player1", "player2"),
    (4, 3, "Advantage player1", "player1", "player2"),
    (3, 4, "Advantage player2", "player1", "player2"),
    (5, 4, "Advantage player1", "player1", "player2"),
    (4, 5, "Advantage player2", "player1", "player2"),
    (15, 14, "Advantage player1", "player1", "player2"),
    (14, 15, "Advantage player2", "player1", "player2"),
    (6, 4, "Win for player1", "player1", "player2"),
    (4, 6, "Win for player2", "player1", "player2"),
    (16, 14, "Win for player1", "player1", "player2"),
    (14, 16, "Win for player2", "player1", "player2"),
]


def play_game(TennisGame, p1_points, p2_points, p1_name, p2_name):
    game = TennisGame(p1_name, p2_name)
    for i in range(max(p1_points, p2_points)):
        if i < p1_points:
            game.won_point(p1_name)
        if i < p2_points:
            game.won_point(p2_name)
    return game


class TestTennis(unittest.TestCase):
    def test_score_games_1_thru_6(self):
        for TennisGameClass in (
            TennisGame1,
            TennisGame2,
            TennisGame3,
            TennisGame4,
            TennisGame5,
            TennisGame6,
        ):
            for testcase in test_cases:
                (p1_points, p2_points, score, p1_name, p2_name) = testcase
                game = play_game(
                    TennisGameClass, p1_points, p2_points, p1_name, p2_name
                )
                with self.subTest(f"{TennisGameClass.__name__} - {testcase}"):
                    self.assertEqual(score, game.score())

    def test_score_game7(self):
        for testcase in test_cases:
            (p1_points, p2_points, score, p1_name, p2_name) = testcase
            game = play_game(TennisGame7, p1_points, p2_points, p1_name, p2_name)
            with self.subTest(f"{TennisGame7.__name__} - {testcase}"):
                self.assertEqual(
                    "Current score: " + score + ", enjoy your game!",
                    game.score(),
                )


if __name__ == "__main__":
    unittest.main()
