#ifndef TENNIS_GAME2_H
#define TENNIS_GAME2_H

#include "TennisGame.h"

struct TennisGame
{
    int P1point;
    int P2point;
    const char* player1Name;
    const char* player2Name;
    const char* P1res;
    const char* P2res;
    char score[18];
};

extern void TennisGame_SetP1Score(struct TennisGame* game, int number);
extern void TennisGame_SetP2Score(struct TennisGame* game, int number);

extern void TennisGame_P1Score(struct TennisGame* game);
extern void TennisGame_P2Score(struct TennisGame* game);

#endif
