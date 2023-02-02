#include <gtest/gtest.h>

extern "C"
{
#include "TennisGame1.h"
#include "TennisGame2.h"
#include "TennisGame3.h"
}

using namespace std;
const char* points[] = { "player1", "player1", "player2",
                         "player2", "player1", "player1" };
const char* expectedScores[] = { "Fifteen-Love", "Thirty-Love", "Thirty-Fifteen",
                                 "Thirty-All", "Forty-Thirty", "Win for player1" };

class TennisGameTests : public ::testing::Test {
public:
    TennisGameTests() = default;

};

TEST_F(TennisGameTests, RealisticTennisGame1) {
    struct TennisGame1* game = TennisGame1_Create("player1", "player2");
    for (int i = 0; i < 6; i++)
    {
        TennisGame1_WonPoint(game, points[i]);
        ASSERT_EQ(string(expectedScores[i]), string(TennisGame1_GetScore(game)));
    }
    free(game);
}
TEST_F(TennisGameTests, RealisticTennisGame2) {
    struct TennisGame2* game = TennisGame2_Create("player1", "player2");
    for (int i = 0; i < 6; i++)
    {
        TennisGame2_WonPoint(game, points[i]);
        ASSERT_EQ(string(expectedScores[i]), string(TennisGame2_GetScore(game)));
    }
    free(game);
}
TEST_F(TennisGameTests, RealisticTennisGame3) {
    struct TennisGame3* game = TennisGame3_Create("player1", "player2");
    for (int i = 0; i < 6; i++)
    {
        TennisGame3_WonPoint(game, points[i]);
        ASSERT_EQ(string(expectedScores[i]), string(TennisGame3_GetScore(game)));
    }
    free(game);
}