'use strict';



const getScore = (p1, p2) => {
    while (p1 > 4 || p2 > 4) {
      p1--;
      p2--;
    }

    const lookup = {
      0: {0: "Love-All",
        1: "Love-Fifteen",
        2: "Love-Thirty",
        3: "Love-Forty",
        4: "Win for player2"},

      1: {0: "Fifteen-Love",
        1: "Fifteen-All",
        2: "Fifteen-Thirty",
        3: "Fifteen-Forty",
        4: "Win for player2"},

      2: {0: "Thirty-Love",
        1: "Thirty-Fifteen",
        2: "Thirty-All",
        3: "Thirty-Forty",
        4: "Win for player2"},

      3: {0: "Forty-Love",
        1: "Forty-Fifteen",
        2: "Forty-Thirty",
        3: "Deuce",
        4: "Advantage player2"},

      4: {0: "Win for player1",
        1: "Win for player1",
        2: "Win for player1",
        3: "Advantage player1",
        4: "Deuce"}
    };

    return lookup[p1][p2]
  };

module.exports = getScore;
