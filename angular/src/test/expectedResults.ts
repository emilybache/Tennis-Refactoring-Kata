export const expectedText = {
  kataTitle: 'Tennis Kata',
  cardSubtitle: 'Score Calculator',
  player1ScoreLabel: 'Player 1 Score',
  player2ScoreLabel: 'Player 2 Score',
  getScoreLabel: 'Get Score',
  overallScoreLabel: 'Overall Score',
  scoringError: 'Failed to get score',
  errorMessage: 'Something has gone wrong, please try again'
};

const loveAll = 'Love-All';
const fifteenAll = 'Fifteen-All';
const thirtyAll = 'Thirty-All';
const deuce = 'Deuce';
const fifteenLove = 'Fifteen-Love';
const loveFifteen = 'Love-Fifteen';
const thirtyLove = 'Thirty-Love';
const loveThirty = 'Love-Thirty';
const fortyLove = 'Forty-Love';
const loveForty = 'Love-Forty';
const winForPlayer1 = 'Win for player1';
const winForPlayer2 = 'Win for player2';
const thirtyFifteen = 'Thirty-Fifteen';
const fifteenThirty = 'Fifteen-Thirty';
const fortyFifteen = 'Forty-Fifteen';
const fifteenForty = 'Fifteen-Forty';
const fortyThirty = 'Forty-Thirty';
const thirtyForty = 'Thirty-Forty';
const advantagePlayer1 = 'Advantage player1';
const advantagePlayer2 = 'Advantage player2';
const invalidScore = 'Invalid Score';

const tiedScores = [
  [0.0, 0, loveAll],
  [0, 0, loveAll],
  [1, 1, fifteenAll],
  [1, 1.0, fifteenAll],
  [2, 2, thirtyAll],
  [3, 3, deuce],
  [4, 4, deuce],
];

const advantageScores = [
  [4, 3, advantagePlayer1],
  [3, 4, advantagePlayer2],
  [5, 4, advantagePlayer1],
  [4, 5, advantagePlayer2],
  [15, 14, advantagePlayer1],
  [14, 15, advantagePlayer2],
];

const leadingScores = [
  [1, 0, fifteenLove],
  [0, 1, loveFifteen],
  [2, 0, thirtyLove],
  [0, 2, loveThirty],
  [3, 0, fortyLove],
  [0, 3, loveForty],
  [2, 1, thirtyFifteen],
  [1, 2, fifteenThirty],
  [3, 1, fortyFifteen],
  [1, 3, fifteenForty],
  [3, 2, fortyThirty],
  [2, 3, thirtyForty],
].concat(advantageScores);

const winningScores = [
  [4, 0, winForPlayer1],
  [0, 4, winForPlayer2],
  [4, 1, winForPlayer1],
  [1, 4, winForPlayer2],
  [4, 2, winForPlayer1],
  [2, 4, winForPlayer2],
  [6, 4, winForPlayer1],
  [4, 6, winForPlayer2],
  [16, 14, winForPlayer1],
  [14, 16, winForPlayer2],
];

const invalidNegativeScores = [
  [-1, 0, invalidScore],
  [-99, 0, invalidScore],
  [-99, -99, invalidScore],
  [0, -1, invalidScore],
  [0, -99, invalidScore]
];

const invalidNonNumberScores = [
  ['not a number', 0, invalidScore],
  ['!@#$%^&*()_', 0, invalidScore],
  ['1x', 0, invalidScore],
  ['1x', '1x', invalidScore],
  [0, 'not a number', invalidScore],
  [0, '!@#$%^&*()_', invalidScore],
  [0, '1x', invalidScore],
];

const invalidNonIntegerScores = [
  [1.6, 0, invalidScore],
  [0.6, 0, invalidScore],
  [1 / 4, 0, invalidScore],
  [1 / 4, 1 / 4, invalidScore],
  [0, 1.6, invalidScore],
  [0, 0.6, invalidScore],
  [0, 1 / 4, invalidScore],
];

const invalidScores = []
  .concat(invalidNegativeScores)
  .concat(invalidNonIntegerScores)
  .concat(invalidNonNumberScores);

// todo: manual test to find more ZOMBIES
// todo: any other ZOMBIES?
// todo: test drive add html attributes to prevent bad input e.g. negative, non-int, etc.
// todo: separate out error message from score and show it on the gui (one error message label or one per input?)
// todo: expect different error messages for different kinds of issues?
// todo: any other ZOMBIES?
// todo: make product error handling code more dirty (each component different)
// todo: make test code for error handling be clean

export const expectedTennisScores = []
  .concat(tiedScores)
  .concat(leadingScores)
  .concat(winningScores)
  .concat(invalidScores);
