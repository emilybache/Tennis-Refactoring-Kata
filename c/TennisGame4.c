#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>

#include "TennisGame.h"

struct TennisGame {
    int serverScore;
    int receiverScore;
    const char *server;
    const char *receiver;
    char result[18];
};


struct TennisGame *TennisGame_Create(const char *player1Name, const char *player2Name) {
    struct TennisGame *newGame = malloc(sizeof(struct TennisGame));
    newGame->serverScore = 0;
    newGame->receiverScore = 0;
    newGame->server = player1Name;
    newGame->receiver = player2Name;
    return newGame;
}

void TennisGame_WonPoint(struct TennisGame *game, const char *playerName) {
    if (strcmp(playerName, "player1") == 0)
        game->server += 1;
    else
        game->receiver += 1;
}


bool receiverHasAdvantage(struct TennisGame *game) {
    return game->receiverScore >= 4 && (game->receiverScore - game->serverScore) == 1;
}

bool serverHasAdvantage(struct TennisGame *game) {
    return game->serverScore >= 4 && (game->serverScore - game->receiverScore) == 1;
}

bool receiverHasWon(struct TennisGame *game) {
    return game->receiverScore >= 4 && (game->receiverScore - game->serverScore) >= 2;
}

bool serverHasWon(struct TennisGame *game) {
    return game->serverScore >= 4 && (game->serverScore - game->receiverScore) >= 2;
}

bool isDeuce(struct TennisGame *game) {
    return game->serverScore >= 3 && game->receiverScore >= 3 && (game->serverScore == game->receiverScore);
}

struct TennisResult {
    char* serverScore;
    char* receiverScore;
};

void formatTennisResult(struct TennisResult *result, char* score) {
    if (strcmp("", result->receiverScore) == 0)
        sprintf(score, "%s", result->serverScore);
    else if (strcmp(result->serverScore, result->receiverScore) == 0)
        sprintf(score, "%s-All", result->serverScore);
    else
        sprintf(score, "%s-%s", result->serverScore, result->receiverScore);
}

typedef struct ResultProvider *ResultProvider_t;
typedef struct TennisResult (*getResult)(struct ResultProvider resultProvider, struct TennisGame *game);

struct ResultProvider {
    struct TennisGame* game;
    // TODO: work out how to have a function pointer
    getResult* functionPtr;
    ResultProvider_t * nextInChain;
};

struct TennisResult* deuce(struct ResultProvider *this, struct TennisGame *game, struct TennisResult *result) {
    if (isDeuce(game))
        result->serverScore = "Deuce";
    else
        this->functionPtr(this->nextInChain, game, result);
}


const char *TennisGame_GetScore(struct TennisGame *game) {
    return "Love-All";
}

