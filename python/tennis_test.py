import pytest

from tennis1 import TennisGame1
from tennis2 import TennisGame2
from tennis3 import TennisGame3
from tennis4 import TennisGame4
from tennis5 import TennisGame5
from tennis6 import TennisGame6
from tennis7 import TennisGame7
from tennis_unittest import play_game, test_cases


@pytest.mark.parametrize("p1Points p2Points score p1Name p2Name".split(), test_cases)
def test_get_score_game1(p1Points, p2Points, score, p1Name, p2Name):
    game = play_game(TennisGame1, p1Points, p2Points, p1Name, p2Name)
    assert score == game.score()


@pytest.mark.parametrize("p1Points p2Points score p1Name p2Name".split(), test_cases)
def test_get_score_game2(p1Points, p2Points, score, p1Name, p2Name):
    game = play_game(TennisGame2, p1Points, p2Points, p1Name, p2Name)
    assert score == game.score()


@pytest.mark.parametrize("p1Points p2Points score p1Name p2Name".split(), test_cases)
def test_get_score_game3(p1Points, p2Points, score, p1Name, p2Name):
    game = play_game(TennisGame3, p1Points, p2Points, p1Name, p2Name)
    assert score == game.score()


@pytest.mark.parametrize("p1Points p2Points score p1Name p2Name".split(), test_cases)
def test_get_score_game4(p1Points, p2Points, score, p1Name, p2Name):
    game = play_game(TennisGame4, p1Points, p2Points, p1Name, p2Name)
    assert score == game.score()


@pytest.mark.parametrize("p1Points p2Points score p1Name p2Name".split(), test_cases)
def test_get_score_game5(p1Points, p2Points, score, p1Name, p2Name):
    game = play_game(TennisGame5, p1Points, p2Points, p1Name, p2Name)
    assert score == game.score()


@pytest.mark.parametrize("p1Points p2Points score p1Name p2Name".split(), test_cases)
def test_get_score_game6(p1Points, p2Points, score, p1Name, p2Name):
    game = play_game(TennisGame6, p1Points, p2Points, p1Name, p2Name)
    assert score == game.score()


@pytest.mark.parametrize("p1Points p2Points score p1Name p2Name".split(), test_cases)
def test_get_score_game7(p1Points, p2Points, score, p1Name, p2Name):
    game = play_game(TennisGame7, p1Points, p2Points, p1Name, p2Name)
    assert "Current score: " + score + ", enjoy your game!" == game.score()
