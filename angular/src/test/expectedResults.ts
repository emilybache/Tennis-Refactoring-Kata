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

export const threeSecondsOfWaitingBeforeGivingInputValidationFeedback = 3000;
export const scoreErrorMessage = 'Please enter an integer score between 1 and 100';

export interface ExpectedError {
  playerNumber: number;
  expectedErrorMessage: string;
}

export interface ExceptedTennisScore {
  player1Score: number | string;
  player2Score: number | string;
  expectedScore: string;
  expectedErrors?: ExpectedError[];
}

const tiedScores: ExceptedTennisScore[] = [
  { player1Score: 0.0, player2Score: 0, expectedScore: loveAll },
  { player1Score: 0, player2Score: 0, expectedScore: loveAll },
  { player1Score: 1, player2Score: 1, expectedScore: fifteenAll },
  { player1Score: 1, player2Score: 1.0, expectedScore: fifteenAll },
  { player1Score: 2, player2Score: 2, expectedScore: thirtyAll },
];

const leadingScores: ExceptedTennisScore[] = [
  { player1Score: 1, player2Score: 0, expectedScore: fifteenLove },
  { player1Score: 0, player2Score: 1, expectedScore: loveFifteen },
  { player1Score: 2, player2Score: 0, expectedScore: thirtyLove },
  { player1Score: 0, player2Score: 2, expectedScore: loveThirty },
  { player1Score: 3, player2Score: 0, expectedScore: fortyLove },
  { player1Score: 0, player2Score: 3, expectedScore: loveForty },
  { player1Score: 2, player2Score: 1, expectedScore: thirtyFifteen },
  { player1Score: 1, player2Score: 2, expectedScore: fifteenThirty },
  { player1Score: 3, player2Score: 1, expectedScore: fortyFifteen },
  { player1Score: 1, player2Score: 3, expectedScore: fifteenForty },
  { player1Score: 3, player2Score: 2, expectedScore: fortyThirty },
  { player1Score: 2, player2Score: 3, expectedScore: thirtyForty },
];

const deuceScores: ExceptedTennisScore[] = [
  { player1Score: 3, player2Score: 3, expectedScore: deuce },
  { player1Score: 4, player2Score: 4, expectedScore: deuce },
  { player1Score: 50, player2Score: 50, expectedScore: deuce },
  { player1Score: 4, player2Score: 3, expectedScore: advantagePlayer1 },
  { player1Score: 3, player2Score: 4, expectedScore: advantagePlayer2 },
  { player1Score: 5, player2Score: 4, expectedScore: advantagePlayer1 },
  { player1Score: 4, player2Score: 5, expectedScore: advantagePlayer2 },
  { player1Score: 15, player2Score: 14, expectedScore: advantagePlayer1 },
  { player1Score: 14, player2Score: 15, expectedScore: advantagePlayer2 },
];

export const winningScores: ExceptedTennisScore[] = [
  { player1Score: 4, player2Score: 0, expectedScore: winForPlayer1 },
  { player1Score: 0, player2Score: 4, expectedScore: winForPlayer2 },
  { player1Score: 4, player2Score: 1, expectedScore: winForPlayer1 },
  { player1Score: 1, player2Score: 4, expectedScore: winForPlayer2 },
  { player1Score: 4, player2Score: 2, expectedScore: winForPlayer1 },
  { player1Score: 2, player2Score: 4, expectedScore: winForPlayer2 },
  { player1Score: 6, player2Score: 4, expectedScore: winForPlayer1 },
  { player1Score: 4, player2Score: 6, expectedScore: winForPlayer2 },
  { player1Score: 16, player2Score: 14, expectedScore: winForPlayer1 },
  { player1Score: 99, player2Score: 14, expectedScore: winForPlayer1 },
  { player1Score: 100, player2Score: 14, expectedScore: winForPlayer1 },
  { player1Score: 14, player2Score: 16, expectedScore: winForPlayer2 },
  { player1Score: 14, player2Score: 99, expectedScore: winForPlayer2 },
  { player1Score: 14, player2Score: 100, expectedScore: winForPlayer2 },
];

const expectedErrorsJustForPlayer1 = [ { playerNumber: 1, expectedErrorMessage: scoreErrorMessage } ];
const expectedErrorsJustForPlayer2 = [ { playerNumber: 2, expectedErrorMessage: scoreErrorMessage } ];
const expectedErrorsForBothPlayers = expectedErrorsJustForPlayer1.concat(expectedErrorsJustForPlayer2);

const invalidNegativeScores: ExceptedTennisScore[] = [
  { player1Score: -1, player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: -99, player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: -99, player2Score: -99, expectedScore: invalidScore, expectedErrors: expectedErrorsForBothPlayers },
  { player1Score: 0, player2Score: -1, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
  { player1Score: 0, player2Score: -99, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
];

const invalidLargeScores: ExceptedTennisScore[] = [
  { player1Score: 101, player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: 999, player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: 101, player2Score: 101, expectedScore: invalidScore, expectedErrors: expectedErrorsForBothPlayers },
  { player1Score: 0, player2Score: 101, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
  { player1Score: 0, player2Score: 999, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
];

const invalidNonNumberScores: ExceptedTennisScore[] = [
  { player1Score: '', player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: 'not a number', player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: '!@#$%^&*()_', player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: '1x', player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: '1x', player2Score: '1x', expectedScore: invalidScore, expectedErrors: expectedErrorsForBothPlayers },
  { player1Score: 0, player2Score: '', expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
  { player1Score: 0, player2Score: 'not a number', expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
  { player1Score: 0, player2Score: '!@#$%^&*()_', expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
];

const invalidNonIntegerScores: ExceptedTennisScore[] = [
  { player1Score: 1.6, player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: 0.6, player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: 1 / 4, player2Score: 0, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer1 },
  { player1Score: 1 / 4, player2Score: 1 / 4, expectedScore: invalidScore, expectedErrors: expectedErrorsForBothPlayers },
  { player1Score: 0, player2Score: 1.6, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
  { player1Score: 0, player2Score: 0.6, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
  { player1Score: 0, player2Score: 1 / 4, expectedScore: invalidScore, expectedErrors: expectedErrorsJustForPlayer2 },
];

export const invalidScores: ExceptedTennisScore[] = []
  .concat(invalidNegativeScores)
  .concat(invalidLargeScores)
  .concat(invalidNonIntegerScores)
  .concat(invalidNonNumberScores);

export const expectedTennisScores: ExceptedTennisScore[] = []
  .concat(tiedScores)
  .concat(leadingScores)
  .concat(deuceScores)
  .concat(winningScores)
  .concat(invalidScores);
