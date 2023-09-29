#include <stdlib.h>
#include <string.h>
#include <stdio.h>

#include "TennisGame.h"

struct TennisGame {
    int player1Score;
    int player2Score;
    const char *player1Name;
    const char *player2Name;
    char result[18];
};

struct TennisGame *TennisGame_Create(const char *player1Name, const char *player2Name) {
    struct TennisGame *newGame = malloc(sizeof(struct TennisGame));
    newGame->player1Score = 0;
    newGame->player2Score = 0;
    newGame->player1Name = player1Name;
    newGame->player2Name = player2Name;
    return newGame;
}

const char *TennisGame_GetScore(struct TennisGame *game) {
    if (game->player1Score == game->player2Score) {
        // tie score
        char tieScore[18];
        switch (game->player1Score) {
            case 0:
                strcpy(tieScore, "Love-All");
                break;
            case 1:
                strcpy(tieScore, "Fifteen-All");
                break;
            case 2:
                strcpy(tieScore, "Thirty-All");
                break;
            default:
                strcpy(tieScore, "Deuce");
                break;
        }

        strcpy(game->result, tieScore);
    } else if (game->player1Score >= 4 || game->player2Score >= 4) {
        // end-game score
        char endGameScore[18];
        int difference = game->player1Score - game->player2Score;
        if (difference > 2)
            difference = 2;
        switch (difference) {
            case 1:
                sprintf(endGameScore, "Advantage %s", game->player1Name);
                break;
            case -1:
                sprintf(endGameScore, "Advantage %s", game->player2Name);
                break;
            case 2:
                sprintf(endGameScore, "Win for %s", game->player1Name);
                break;
            default:
                sprintf(endGameScore, "Win for %s", game->player2Name);
                break;
        }

        strcpy(game->result, endGameScore);
    } else {
        // regular score
        char regularScore[18];

        char score1[18];
        switch (game->player1Score) {
            case 0:
                strcpy(score1, "Love");
                break;
            case 1:
                strcpy(score1, "Fifteen");
                break;
            case 2:
                strcpy(score1, "Thirty");
                break;
            case 3:
                strcpy(score1, "Forty");
                break;
        };

        char score2[18];
        switch (game->player2Score) {
            case 0:
                strcpy(score2, "Love");
                break;
            case 1:
                strcpy(score2, "Fifteen");
                break;
            case 2:
                strcpy(score2, "Thirty");
                break;
            case 3:
                strcpy(score2, "Forty");
                break;
        };

        sprintf(regularScore, "%s-%s", score1, score2);

        strcpy(game->result, regularScore);
    }

    return game->result;
}

void TennisGame_WonPoint(struct TennisGame *game, const char *playerName) {
    if (strcmp(playerName, "player1") == 0)
        game->player1Score += 1;
    else
        game->player2Score += 1;
}
