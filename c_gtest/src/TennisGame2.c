#include <stdlib.h>
#include <string.h>

#include "TennisGame2.h"

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

struct TennisGame* TennisGame_Create(const char* player1Name, const char* player2Name)
{
    struct TennisGame* newGame = malloc(sizeof(struct TennisGame));
    newGame->P1point = 0;
    newGame->P2point = 0;
    newGame->P1res = "";
    newGame->P2res = "";
    newGame->player1Name = player1Name;
    newGame->player2Name = player2Name;
    return newGame;
}

const char* TennisGame_GetScore(struct TennisGame* game)
{
    game->score[0] = '\0';
    if (game->P1point == game->P2point && game->P1point < 4)
    {
        if (game->P1point == 0)
            strcpy(game->score, "Love");
        if (game->P1point == 1)
            strcpy(game->score, "Fifteen");
        if (game->P1point == 2)
            strcpy(game->score, "Thirty");
        strcat(game->score, "-All");
    }
    if (game->P1point == game->P2point && game->P1point > 2)
        strcpy(game->score, "Deuce");

    if (game->P1point > 0 && game->P2point == 0)
    {
        if (game->P1point == 1)
            game->P1res = "Fifteen";
        if (game->P1point == 2)
            game->P1res = "Thirty";
        if (game->P1point == 3)
            game->P1res = "Forty";

        game->P2res = "Love";
        strcat(strcat(strcpy(game->score, game->P1res), "-"), game->P2res);
    }
    if (game->P2point > 0 && game->P1point == 0)
    {
        if (game->P2point == 1)
            game->P2res = "Fifteen";
        if (game->P2point == 2)
            game->P2res = "Thirty";
        if (game->P2point == 3)
            game->P2res = "Forty";

        game->P1res = "Love";
        strcat(strcat(strcpy(game->score, game->P1res), "-"), game->P2res);
    }

    if (game->P1point > game->P2point && game->P1point < 4)
    {
        if (game->P1point == 2)
            game->P1res = "Thirty";
        if (game->P1point == 3)
            game->P1res = "Forty";
        if (game->P2point == 1)
            game->P2res = "Fifteen";
        if (game->P2point == 2)
            game->P2res = "Thirty";
        strcat(strcat(strcpy(game->score, game->P1res), "-"), game->P2res);
    }
    if (game->P2point > game->P1point && game->P2point < 4)
    {
        if (game->P2point == 2)
            game->P2res = "Thirty";
        if (game->P2point == 3)
            game->P2res = "Forty";
        if (game->P1point == 1)
            game->P1res = "Fifteen";
        if (game->P1point == 2)
            game->P1res = "Thirty";
        strcat(strcat(strcpy(game->score, game->P1res), "-"), game->P2res);
    }

    if (game->P1point > game->P2point && game->P2point >= 3)
    {
        strcpy(game->score, "Advantage player1");
    }

    if (game->P2point > game->P1point && game->P1point >= 3)
    {
        strcpy(game->score, "Advantage player2");
    }

    if (game->P1point >= 4 && game->P2point >= 0 && (game->P1point - game->P2point) >= 2)
    {
        strcpy(game->score, "Win for player1");
    }
    if (game->P2point >= 4 && game->P1point >= 0 && (game->P2point - game->P1point) >= 2)
    {
        strcpy(game->score, "Win for player2");
    }
    return game->score;
}

void TennisGame_SetP1Score(struct TennisGame* game, int number)
{
    for (int i = 0; i < number; i++)
    {
        TennisGame_P1Score(game);
    }
}

void TennisGame_SetP2Score(struct TennisGame* game, int number)
{
    for (int i = 0; i < number; i++)
    {
        TennisGame_P2Score(game);
    }
}

void TennisGame_P1Score(struct TennisGame* game)
{
    game->P1point++;
}

void TennisGame_P2Score(struct TennisGame* game)
{
    game->P2point++;
}

void TennisGame_WonPoint(struct TennisGame* game, const char* player)
{
    if (strcmp(player, "player1") == 0)
        TennisGame_P1Score(game);
    else
        TennisGame_P2Score(game);
}
