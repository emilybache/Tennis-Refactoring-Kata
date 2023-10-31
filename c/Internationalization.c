#include <stdlib.h>
#include <string.h>

#include "Internationalization.h"

struct ScoreStrings_t * create_scoreStrings_en() {
    struct ScoreStrings_t *s = malloc(sizeof *s);
    strncpy(s->advantageScore, "Advantage %s", sizeof(s->advantageScore) - 1);
    strncpy(s->winScore, "Win for %s", sizeof(s->winScore) - 1);
    strncpy(s->all, "All", sizeof(s->all) - 1);
    strncpy(s->love, "Love", sizeof(s->love) - 1);
    strncpy(s->fifteen, "Fifteen", sizeof(s->fifteen) - 1);
    strncpy(s->thirty, "Thirty", sizeof(s->thirty) - 1);
    strncpy(s->forty, "Forty", sizeof(s->forty) - 1);
    strncpy(s->deuce, "Deuce", sizeof(s->deuce) - 1);

    return s;
}
struct ScoreStrings_t * create_scoreStrings_se() {
    struct ScoreStrings_t *s = malloc(sizeof *s);
    strncpy(s->advantageScore, "Fördel %s", sizeof(s->advantageScore) - 1);
    strncpy(s->winScore, "Vinst för %s", sizeof(s->winScore) - 1);
    strncpy(s->all, "Alla", sizeof(s->all) - 1);
    strncpy(s->love, "Noll", sizeof(s->love) - 1);
    strncpy(s->fifteen, "Femton", sizeof(s->fifteen) - 1);
    strncpy(s->thirty, "Trettio", sizeof(s->thirty) - 1);
    strncpy(s->forty, "Fyrtio", sizeof(s->forty) - 1);
    strncpy(s->deuce, "Kvitt", sizeof(s->deuce) - 1);

    return s;
}