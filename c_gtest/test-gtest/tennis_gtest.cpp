#include <gtest/gtest.h>

extern "C"
{
#include "TennisGame1.h"
#include "TennisGame2.h"
#include "TennisGame3.h"
}

using namespace std;
const char *points[] = {"player1", "player1", "player2",
                        "player2", "player1", "player1"};
const char *expectedScores[] = {"Fifteen-Love", "Thirty-Love", "Thirty-Fifteen",
                                "Thirty-All", "Forty-Thirty", "Win for player1"};

TEST(RealisticTennisGameTests, RealisticTennisGame1) {
    struct TennisGame1 *game = TennisGame1_Create("player1", "player2");
    for (int i = 0; i < 6; i++) {
        TennisGame1_WonPoint(game, points[i]);
        ASSERT_EQ(string(expectedScores[i]), string(TennisGame1_GetScore(game)));
    }
    free(game);
}

TEST(RealisticTennisGameTests, RealisticTennisGame2) {
    struct TennisGame2 *game = TennisGame2_Create("player1", "player2");
    for (int i = 0; i < 6; i++) {
        TennisGame2_WonPoint(game, points[i]);
        ASSERT_EQ(string(expectedScores[i]), string(TennisGame2_GetScore(game)));
    }
    free(game);
}

TEST(RealisticTennisGameTests, RealisticTennisGame3) {
    struct TennisGame3 *game = TennisGame3_Create("player1", "player2");
    for (int i = 0; i < 6; i++) {
        TennisGame3_WonPoint(game, points[i]);
        ASSERT_EQ(string(expectedScores[i]), string(TennisGame3_GetScore(game)));
    }
    free(game);
}

const std::tuple<int, int, std::string> all_scores[] =
        {
                {0,  0,  "Love-All"},
                {1,  1,  "Fifteen-All"},
                {2,  2,  "Thirty-All"},
                {3,  3,  "Deuce"},
                {4,  4,  "Deuce"},
                {1,  0,  "Fifteen-Love"},
                {0,  1,  "Love-Fifteen"},
                {2,  0,  "Thirty-Love"},
                {0,  2,  "Love-Thirty"},
                {3,  0,  "Forty-Love"},
                {0,  3,  "Love-Forty"},
                {4,  0,  "Win for player1"},
                {0,  4,  "Win for player2"},
                {2,  1,  "Thirty-Fifteen"},
                {1,  2,  "Fifteen-Thirty"},
                {3,  1,  "Forty-Fifteen"},
                {1,  3,  "Fifteen-Forty"},
                {4,  1,  "Win for player1"},
                {1,  4,  "Win for player2"},
                {3,  2,  "Forty-Thirty"},
                {2,  3,  "Thirty-Forty"},
                {4,  2,  "Win for player1"},
                {2,  4,  "Win for player2"},
                {4,  3,  "Advantage player1"},
                {3,  4,  "Advantage player2"},
                {5,  4,  "Advantage player1"},
                {4,  5,  "Advantage player2"},
                {15, 14, "Advantage player1"},
                {14, 15, "Advantage player2"},
                {6,  4,  "Win for player1"},
                {4,  6,  "Win for player2"},
                {16, 14, "Win for player1"},
                {14, 16, "Win for player2"},
        };

class TennisGameTests :  public ::testing::TestWithParam<std::tuple<int, int, std::string>> {
public:


};

INSTANTIATE_TEST_SUITE_P(AllScores,
                         TennisGameTests,
                         testing::ValuesIn(all_scores));

static int maxScore(int a, int b)
{
    return a > b ? a : b;
}

TEST_P(TennisGameTests, AllScoresTennisGame1) {
    const int p1Points = std::get<0>(GetParam());
    const int p2Points = std::get<1>(GetParam());
    const std::string &expectedScore = std::get<2>(GetParam());

    struct TennisGame1 *game = TennisGame1_Create("player1", "player2");
    for (int i = 0; i < maxScore(p1Points, p2Points); i++)
    {
        if (i < p1Points)
            TennisGame1_WonPoint(game, "player1");
        if (i < p2Points)
            TennisGame1_WonPoint(game, "player2");
    }
    ASSERT_EQ(string(TennisGame1_GetScore(game)), expectedScore);
    free(game);
}

TEST_P(TennisGameTests, AllScoresTennisGame2) {
    const int p1Points = std::get<0>(GetParam());
    const int p2Points = std::get<1>(GetParam());
    const std::string &expectedScore = std::get<2>(GetParam());

    struct TennisGame2 *game = TennisGame2_Create("player1", "player2");
    for (int i = 0; i < maxScore(p1Points, p2Points); i++)
    {
        if (i < p1Points)
            TennisGame2_WonPoint(game, "player1");
        if (i < p2Points)
            TennisGame2_WonPoint(game, "player2");
    }
    ASSERT_EQ(string(TennisGame2_GetScore(game)), expectedScore);
    free(game);
}

TEST_P(TennisGameTests, AllScoresTennisGame3) {
    const int p1Points = std::get<0>(GetParam());
    const int p2Points = std::get<1>(GetParam());
    const std::string &expectedScore = std::get<2>(GetParam());

    struct TennisGame3 *game = TennisGame3_Create("player1", "player2");
    for (int i = 0; i < maxScore(p1Points, p2Points); i++)
    {
        if (i < p1Points)
            TennisGame3_WonPoint(game, "player1");
        if (i < p2Points)
            TennisGame3_WonPoint(game, "player2");
    }
    ASSERT_EQ(string(TennisGame3_GetScore(game)), expectedScore);
    free(game);
}