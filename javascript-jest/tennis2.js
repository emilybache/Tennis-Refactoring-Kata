const getScore = (P1point, P2point) => {
    let score = "";

    if (P1point === P2point && P1point < 3) {
        const scoreMapping = ["Love", "Fifteen", "Thirty"];
        score = `${scoreMapping[P1point]}-All`;
    } else if (P1point === P2point && P1point > 2) {
        score = "Deuce";
    } else {
        const scoreMapping = ["Love", "Fifteen", "Thirty", "Forty"];

        const P1res = P1point > 0 ? scoreMapping[P1point] : "";
        const P2res = P2point > 0 ? scoreMapping[P2point] : "";

        if (P1point > 0 && P2point === 0) {
            score = `${P1res}-${P2res || "Love"}`;
        } else if (P2point > 0 && P1point === 0) {
            score = `${P1res || "Love"}-${P2res}`;
        } else if (P1point > P2point && P1point < 4) {
            score = `${P1res}-${P2res}`;
        } else if (P2point > P1point && P2point < 4) {
            score = `${P1res}-${P2res}`;
        } else if (P1point > P2point && P2point >= 3) {
            score = "Advantage player1";
        } else if (P2point > P1point && P1point >= 3) {
            score = "Advantage player2";
        } else if (P1point >= 4 && P2point >= 0 && P1point - P2point >= 2) {
            score = "Win for player1";
        } else if (P2point >= 4 && P1point >= 0 && P2point - P1point >= 2) {
            score = "Win for player2";
        }
    }

    return score;
};

module.exports = getScore;
