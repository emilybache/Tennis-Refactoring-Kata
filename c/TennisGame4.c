#include <stdbool.h>
#include <stdlib.h>
#include <string.h>

#include "TennisGame.h"

typedef struct TennisGame {
  int serverScore;
  int receiverScore;
  char *server;
  char *receiver;
} TennisGame4;

TennisGame4 *TennisGame_Create(const char *player1, const char *player2) {
  TennisGame4 *game = malloc(sizeof(TennisGame4));
  game->serverScore = 0;
  game->receiverScore = 0;
  game->server = strdup(player1);
  game->receiver = strdup(player2);
  return game;
}

void TennisGame_WonPoint(TennisGame4 *game, const char *playerName) {
  if (strcmp(game->server, playerName) == 0)
    game->serverScore += 1;
  else
    game->receiverScore += 1;
}

typedef struct TennisResult *(*getResultFunc)(void *self);

typedef struct TennisResult {
  char *serverScore;
  char *receiverScore;
} TennisResult;

char *format(TennisResult *result) {
  if (result->receiverScore == NULL || strcmp(result->receiverScore, "") == 0)
    return result->serverScore;

  if (strcmp(result->serverScore, result->receiverScore) == 0) {
    char *output = malloc(strlen(result->serverScore) + strlen("-All") + 1);
    strcpy(output, result->serverScore);
    strcat(output, "-All");
    return output;
  }

  char *output = malloc(strlen(result->serverScore) +
                        strlen(result->receiverScore) + strlen("-") + 1);
  strcpy(output, result->serverScore);
  strcat(output, "-");
  strcat(output, result->receiverScore);
  return output;
}

typedef struct ResultProvider {
  TennisGame4 *game;
  getResultFunc getResult;
  struct ResultProvider *nextResult;
} ResultProvider;

bool isDeuce(TennisGame4 *game) {
  return game->serverScore >= 3 && game->receiverScore >= 3 &&
         game->serverScore == game->receiverScore;
}

TennisResult *getResultDeuce(void *self) {
  ResultProvider *rp = (ResultProvider *)self;
  if (isDeuce(rp->game)) {
    TennisResult *result = malloc(sizeof(TennisResult));
    result->serverScore = "Deuce";
    result->receiverScore = "";
    return result;
  }
  return rp->nextResult->getResult(rp->nextResult);
}

ResultProvider *Deuce(TennisGame4 *game, ResultProvider *nextResult) {
  ResultProvider *temp = malloc(sizeof(ResultProvider));
  temp->game = game;
  temp->getResult = getResultDeuce;
  temp->nextResult = nextResult;
  return temp;
}

bool serverHasWon(TennisGame4 *game) {
  return game->serverScore >= 4 &&
         (game->serverScore - game->receiverScore) >= 2;
}

TennisResult *getResultServerWon(void *self) {
  ResultProvider *rp = (ResultProvider *)self;
  if (serverHasWon(rp->game)) {
    TennisResult *result = malloc(sizeof(TennisResult));
    char *output = malloc(strlen("Win for ") + strlen(rp->game->server) + 1);
    strcpy(output, "Win for ");
    strcat(output, rp->game->server);
    result->serverScore = output;
    result->receiverScore = "";
    return result;
  }
  return rp->nextResult->getResult(rp->nextResult);
}

ResultProvider *GameServer(TennisGame4 *game, ResultProvider *nextResult) {
  ResultProvider *temp = malloc(sizeof(ResultProvider));
  temp->game = game;
  temp->getResult = getResultServerWon;
  temp->nextResult = nextResult;
  return temp;
}

const char *TennisGame_GetScore(TennisGame4 *game) {
  ResultProvider *rp = Deuce(game, GameServer(game, NULL));
  TennisResult *result = rp->getResult(rp);

  char *score = format(result);

  free(result);

  return score;
}
