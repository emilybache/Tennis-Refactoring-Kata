#ifndef TENNIS_KATA_INTERNATIONALIZATION_H
#define TENNIS_KATA_INTERNATIONALIZATION_H


#define MAX_SCORE_LENGTH 50

struct ScoreStrings_t {
    char advantageScore[MAX_SCORE_LENGTH];
    char winScore[MAX_SCORE_LENGTH];
    char all[MAX_SCORE_LENGTH];
    char love[MAX_SCORE_LENGTH];
    char fifteen[MAX_SCORE_LENGTH];
    char thirty[MAX_SCORE_LENGTH];
    char forty[MAX_SCORE_LENGTH];
    char deuce[MAX_SCORE_LENGTH];
};

struct ScoreStrings_t* create_scoreStrings_en();
struct ScoreStrings_t* create_scoreStrings_se();

#endif //TENNIS_KATA_INTERNATIONALIZATION_H
