#ifndef TENNIS_GAME2_H
#define TENNIS_GAME2_H

#include "TennisGame.h"

extern void TennisGame_SetP1Score(struct TennisGame* game, int number);
extern void TennisGame_SetP2Score(struct TennisGame* game, int number);

extern void TennisGame_P1Score(struct TennisGame* game);
extern void TennisGame_P2Score(struct TennisGame* game);

#endif
