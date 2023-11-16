// getScore.js

const getScore = (player1Score, player2Score) => {
  if (player1Score === player2Score) {
      return getTieScore(player1Score);
  } else if (player1Score >= 4 || player2Score >= 4) {
      return getEndGameScore(player1Score, player2Score);
  } else {
      return getRegularScore(player1Score, player2Score);
  }
};

const getTieScore = (score) => {
  const tieScores = ["Love-All", "Fifteen-All", "Thirty-All", "Deuce"];
  return tieScores[score] || "Deuce";
};

const getEndGameScore = (player1Score, player2Score) => {
  const scoreDifference = player1Score - player2Score;

  if (Math.abs(scoreDifference) === 1) {
      return `Advantage player${scoreDifference === 1 ? '1' : '2'}`;
  } else {
      return `Win for player${scoreDifference > 1 ? '1' : '2'}`;
  }
};

const getRegularScore = (player1Score, player2Score) => {
  const scoreNames = ["Love", "Fifteen", "Thirty", "Forty"];
  const score1 = scoreNames[player1Score];
  const score2 = scoreNames[player2Score];
  return `${score1}-${score2}`;
};

module.exports = getScore;