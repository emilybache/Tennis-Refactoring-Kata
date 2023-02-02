#ifndef TENNIS_GAME_H
#define TENNIS_GAME_H

struct TennisGame1;

extern struct TennisGame1* TennisGame1_Create(const char* player1Name, const char* player2Name);

extern void TennisGame1_WonPoint(struct TennisGame1* game, const char* playerName);

extern const char* TennisGame1_GetScore(struct TennisGame1* game);

#endif
