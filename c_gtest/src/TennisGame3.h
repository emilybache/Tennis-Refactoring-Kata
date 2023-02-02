#ifndef TENNIS_REFACTORING_KATA_TENNISGAME3_H
#define TENNIS_REFACTORING_KATA_TENNISGAME3_H

struct TennisGame3;

extern struct TennisGame3* TennisGame3_Create(const char* player1Name, const char* player2Name);

extern void TennisGame3_WonPoint(struct TennisGame3* game, const char* playerName);

extern const char* TennisGame3_GetScore(struct TennisGame3* game);

#endif //TENNIS_REFACTORING_KATA_TENNISGAME3_H
