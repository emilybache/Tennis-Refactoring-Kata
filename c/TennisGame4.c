#include <stdlib.h>
#include <string.h>
#include <stdio.h>
#include <stdbool.h>

#include "TennisGame.h"

struct TennisGame
{
    int serverScore;
    int receiverScore;
    const char *server;
    const char *receiver;
};

struct TennisGame *TennisGame_Create(const char *player1, const char *player2)
{
    struct TennisGame *newGame = malloc(sizeof(struct TennisGame));
    newGame->serverScore = 0;
    newGame->receiverScore = 0;
    newGame->server = player1;
    newGame->receiver = player2;
    return newGame;
}

void TennisGame_WonPoint(struct TennisGame *game, const char *playerName)
{
    if (strcmp(game->server, playerName) == 0)
        game->server += 1;
    else
        game->receiver += 1;
}

bool receiverHasAdvantage(struct TennisGame *game)
{
    return game->receiverScore >= 4 && (game->receiverScore - game->serverScore) == 1;
}

bool serverHasAdvantage(struct TennisGame *game)
{
    return game->serverScore >= 4 && (game->serverScore - game->receiverScore) == 1;
}

bool receiverHasWon(struct TennisGame *game)
{
    return game->receiverScore >= 4 && (game->receiverScore - game->serverScore) >= 2;
}

bool serverHasWon(struct TennisGame *game)
{
    return game->serverScore >= 4 && (game->serverScore - game->receiverScore) >= 2;
}

bool isDeuce(struct TennisGame *game)
{
    return game->serverScore >= 3 && game->receiverScore >= 3 && (game->serverScore == game->receiverScore);
}

struct TennisResult
{
    char serverScore[100];
    char receiverScore[100];
};

void formatTennisResult(struct TennisResult *result, char *output)
{
    if (strcmp("", result->receiverScore) == 0)
        sprintf(output, "%s", result->serverScore);
    else if (strcmp(result->serverScore, result->receiverScore) == 0)
        sprintf(output, "%s-All", result->serverScore);
    else
        sprintf(output, "%s-%s", result->serverScore, result->receiverScore);
}

typedef struct ResultProvider *ResultProvider_t;
typedef void (*getResult)(struct ResultProvider *resultProvider, struct TennisResult *result);

struct ResultProvider
{
    struct TennisGame *game;
    getResult getResult;
    ResultProvider_t nextResult;
};

void deuce_getResult(struct ResultProvider *this, struct TennisResult *result)
{
    if (isDeuce(this->game))
        strcpy(result->serverScore, "Deuce");
    else
        this->getResult(this->nextResult, result);
}

void gameServer_getResult(struct ResultProvider *this, struct TennisResult *result)
{
    if (serverHasWon(this->game))
    {
        strcpy(result->serverScore, "Win for ");
        strcat(result->serverScore, this->game->server);
    }
    else
        this->getResult(this->nextResult, result);
}

void gameReceiver_getResult(struct ResultProvider *this, struct TennisResult *result)
{
    if (receiverHasWon(this->game))
    {
        strcpy(result->serverScore, "Win for ");
        strcat(result->serverScore, this->game->receiver);
    }
    else
        this->getResult(this->nextResult, result);
}

void advantageServer_getResult(struct ResultProvider *this, struct TennisResult *result)
{
    if (serverHasAdvantage(this->game))
    {
        strcpy(result->serverScore, "Advantage ");
        strcat(result->serverScore, this->game->server);
    }
    else
        this->getResult(this->nextResult, result);
}

void advantageReceiver_getResult(struct ResultProvider *this, struct TennisResult *result)
{
    if (receiverHasAdvantage(this->game))
    {
        strcpy(result->serverScore, "Advantage ");
        strcat(result->serverScore, this->game->receiver);
    }
    else
        this->getResult(this->nextResult, result);
}

void defaultResult_getResult(struct ResultProvider *this, struct TennisResult *result)
{
    const char *scores[] = {"Love", "Fifteen", "Thirty", "Forty"};
    strcpy(result->serverScore, scores[this->game->serverScore]);
    strcpy(result->receiverScore, scores[this->game->receiverScore]);
}

const char *TennisGame_GetScore(struct TennisGame *game)
{
    char score[200];
    struct TennisResult result;

    struct ResultProvider resultProvider =
        {game, deuce_getResult,                 //
         {game, gameServer_getResult,           //
          {game, gameReceiver_getResult,        //
           {game, advantageServer_getResult,    //
            {game, advantageReceiver_getResult, //
             {game, defaultResult_getResult, NULL}}}}}};

    resultProvider.getResult(&resultProvider, &result);
    formatTennisResult(&result, score);

    return score;
}
