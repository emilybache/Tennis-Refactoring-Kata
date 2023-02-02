#include <gtest/gtest.h>

extern "C"
{
#include "TennisGame.h"
}

using namespace std;

TEST(SampleSuite, SampleTest) {
    const char* points[] = { "player1", "player1", "player2",
                             "player2", "player1", "player1" };
    const char* expectedScores[] = { "Fifteen-Love", "Thirty-Love", "Thirty-Fifteen",
                                     "Thirty-All", "Forty-Thirty", "Win for player1" };
    struct TennisGame* game = TennisGame_Create("player1", "player2");

    for (int i = 0; i < 6; i++)
    {
        TennisGame_WonPoint(game, points[i]);
        ASSERT_EQ(string(expectedScores[i]), string(TennisGame_GetScore(game)));
    }

    free(game);
}