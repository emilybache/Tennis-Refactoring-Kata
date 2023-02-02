#ifndef TENNIS_GAME2_H
#define TENNIS_GAME2_H

struct TennisGame2;

extern struct TennisGame2* TennisGame2_Create(const char* player1Name, const char* player2Name);

extern void TennisGame2_WonPoint(struct TennisGame2* game, const char* playerName);

extern const char* TennisGame2_GetScore(struct TennisGame2* game);

extern void TennisGame_SetP1Score(struct TennisGame2* game, int number);
extern void TennisGame_SetP2Score(struct TennisGame2* game, int number);

extern void TennisGame_P1Score(struct TennisGame2* game);
extern void TennisGame_P2Score(struct TennisGame2* game);

#endif
