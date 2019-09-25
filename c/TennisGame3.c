#include <stdlib.h>
#include <string.h>

#include "TennisGame.h"

struct TennisGame
{
    int p2;
    int p1;
    const char* p1N;
    const char* p2N;
    char s[18];
};

struct TennisGame* TennisGame_Create(const char* p1N, const char* p2N)
{
    struct TennisGame* newGame = malloc(sizeof(struct TennisGame));
    newGame->p2 = 0;
    newGame->p1 = 0;
    newGame->p1N = p1N;
    newGame->p2N = p2N;
    return newGame;
}

const char* TennisGame_GetScore(struct TennisGame* g)
{
    if (g->p1 < 4 && g->p2 < 4 && !(g->p1 + g->p2 == 6))
    {
        const char* p[4] = { "Love", "Fifteen", "Thirty", "Forty" };
        strcpy(g->s, p[g->p1]);
        return g->p1 == g->p2 ? strcat(g->s, "-All") : strcat(strcat(g->s, "-"), p[g->p2]);
    }
    else
    {
        if (g->p1 == g->p2)
            return strcpy(g->s, "Deuce");
        strcpy(g->s, (g->p1 - g->p2) * (g->p1 - g->p2) == 1 ? "Advantage " : "Win for ");
        return strcat(g->s, g->p1 > g->p2 ? g->p1N : g->p2N);
    }
}

void TennisGame_WonPoint(struct TennisGame* g, const char* pN)
{
    if (strcmp(pN, "player1") == 0)
        g->p1 += 1;
    else
        g->p2 += 1;
}
