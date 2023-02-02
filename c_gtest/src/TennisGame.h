#ifndef TENNIS_GAME_H
#define TENNIS_GAME_H

struct TennisGame;

extern struct TennisGame* TennisGame_Create(const char* player1Name, const char* player2Name);

extern void TennisGame_WonPoint(struct TennisGame* game, const char* playerName);

extern const char* TennisGame_GetScore(struct TennisGame* game);

#endif
