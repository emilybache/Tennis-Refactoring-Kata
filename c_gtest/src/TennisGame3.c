#include <stdlib.h>
#include <string.h>

#include "TennisGame3.h"

struct TennisGame3
{
    int p2;
    int p1;
    const char* p1N;
    const char* p2N;
    char s[18];
};

struct TennisGame3* TennisGame3_Create(const char* p1N, const char* p2N)
{
    struct TennisGame3* newGame = malloc(sizeof(struct TennisGame3));
    newGame->p2 = 0;
    newGame->p1 = 0;
    newGame->p1N = p1N;
    newGame->p2N = p2N;
    return newGame;
}

const char* TennisGame3_GetScore(struct TennisGame3* game)
{
    if (game->p1 < 4 && game->p2 < 4 && !(game->p1 + game->p2 == 6))
    {
        const char* p[4] = { "Love", "Fifteen", "Thirty", "Forty" };
        strcpy(game->s, p[game->p1]);
        return game->p1 == game->p2 ? strcat(game->s, "-All") : strcat(strcat(game->s, "-"), p[game->p2]);
    }
    else
    {
        if (game->p1 == game->p2)
            return strcpy(game->s, "Deuce");
        strcpy(game->s, (game->p1 - game->p2) * (game->p1 - game->p2) == 1 ? "Advantage " : "Win for ");
        return strcat(game->s, game->p1 > game->p2 ? game->p1N : game->p2N);
    }
}

void TennisGame3_WonPoint(struct TennisGame3* game, const char* playerName)
{
    if (strcmp(playerName, "player1") == 0)
        game->p1 += 1;
    else
        game->p2 += 1;
}
