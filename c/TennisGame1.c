#include <stdlib.h>
#include <string.h>

#include "TennisGame.h"

struct TennisGame
{
    int m_score1;
    int m_score2;
    const char* player1Name;
    const char* player2Name;
    char score[18];
};

struct TennisGame* TennisGame_Create(const char* player1Name, const char* player2Name)
{
    struct TennisGame* newGame = malloc(sizeof(struct TennisGame));
    newGame->m_score1 = 0;
    newGame->m_score2 = 0;
    newGame->player1Name = player1Name;
    newGame->player2Name = player2Name;
    return newGame;
}

void TennisGame_WonPoint(struct TennisGame* game, const char* playerName)
{
    if (strcmp(playerName, "player1") == 0)
        game->m_score1 += 1;
    else
        game->m_score2 += 1;
}

const char* TennisGame_GetScore(struct TennisGame* game)
{
    game->score[0] = '\0';
    int tempScore = 0;
    if (game->m_score1 == game->m_score2)
    {
        switch (game->m_score1)
        {
        case 0:
            strcpy(game->score, "Love-All");
            break;
        case 1:
            strcpy(game->score, "Fifteen-All");
            break;
        case 2:
            strcpy(game->score, "Thirty-All");
            break;
        default:
            strcpy(game->score, "Deuce");
            break;

        }
    }
    else if (game->m_score1 >= 4 || game->m_score2 >= 4)
    {
        int minusResult = game->m_score1 - game->m_score2;
        if (minusResult == 1)
            strcpy(game->score, "Advantage player1");
        else if (minusResult == -1)
            strcpy(game->score, "Advantage player2");
        else if (minusResult >= 2)
            strcpy(game->score, "Win for player1");
        else
            strcpy(game->score, "Win for player2");
    }
    else
    {
        for (int i = 1; i < 3; i++)
        {
            if (i == 1) tempScore = game->m_score1;
            else { strcat(game->score, "-"); tempScore = game->m_score2; }
            switch (tempScore)
            {
            case 0:
                strcat(game->score, "Love");
                break;
            case 1:
                strcat(game->score, "Fifteen");
                break;
            case 2:
                strcat(game->score, "Thirty");
                break;
            case 3:
                strcat(game->score, "Forty");
                break;
            }
        }
    }
    return game->score;
}
