'use strict';

const getScore = (player1Score, player2Score) => {
    let result;

    if (player1Score === player2Score)
    {
      // tie score
      let tieScore;
      switch (player1Score)
      {
        case 0:
          tieScore = "Love-All";
          break;
        case 1:
          tieScore = "Fifteen-All";
          break;
        case 2:
          tieScore = "Thirty-All";
          break;
        default:
          tieScore = "Deuce";
          break;
      }

      result = tieScore;
    }
    else if (player1Score >= 4 || player2Score >= 4)
    {
      // end-game score
      let endGameScore;

      if (player1Score - player2Score === 1) {
        endGameScore = "Advantage " + "player1";
      } else if (player1Score - player2Score === -1) {
        endGameScore = "Advantage " + "player2";
      } else if (player1Score - player2Score >= 2) {
        endGameScore = "Win for " + "player1";
      } else {
        endGameScore = "Win for " + "player2";
      }

      result = endGameScore;
    }
    else
    {
      // regular score
      let regularScore;

      let score1;

      switch (player1Score) {
        case 0:
          score1 = "Love";
          break;
        case 1:
          score1 = "Fifteen";
          break;
        case 2:
          score1 = "Thirty";
          break;
        default:
          score1 = "Forty";
          break;
      }

      let score2;
      switch (player2Score) {
        case 0:
          score2 = "Love";
          break;
        case 1:
          score2 = "Fifteen";
          break;
        case 2:
          score2 = "Thirty";
          break;
        default:
          score2 = "Forty";
          break;
      }

      regularScore = score1 + "-" + score2;

      result = regularScore;
    }

    return result;

}

module.exports = getScore;
