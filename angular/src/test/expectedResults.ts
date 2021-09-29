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

export const scoreErrorMessage = 'Please enter integer score between 1 and 100';
export interface ExpectedError {
  player: number;
  expectedErrorMessage: string;
}

export interface ExceptedTennisScore {
  player1Score: number | string;
  player2Score: number | string;
  expectedScore: string;
  isScoreValid: boolean;
  expectedErrors?: ExpectedError[];
}

const tiedScores: ExceptedTennisScore[] = [
  { player1Score: 0.0, player2Score: 0, expectedScore: loveAll, isScoreValid: true },
  { player1Score: 0, player2Score: 0, expectedScore: loveAll, isScoreValid: true },
  { player1Score: 1, player2Score: 1, expectedScore: fifteenAll, isScoreValid: true },
  { player1Score: 1, player2Score: 1.0, expectedScore: fifteenAll, isScoreValid: true },
  { player1Score: 2, player2Score: 2, expectedScore: thirtyAll, isScoreValid: true },
];

const leadingScores: ExceptedTennisScore[] = [
  { player1Score: 1, player2Score: 0, expectedScore: fifteenLove, isScoreValid: true },
  { player1Score: 0, player2Score: 1, expectedScore: loveFifteen, isScoreValid: true },
  { player1Score: 2, player2Score: 0, expectedScore: thirtyLove, isScoreValid: true },
  { player1Score: 0, player2Score: 2, expectedScore: loveThirty, isScoreValid: true },
  { player1Score: 3, player2Score: 0, expectedScore: fortyLove, isScoreValid: true },
  { player1Score: 0, player2Score: 3, expectedScore: loveForty, isScoreValid: true },
  { player1Score: 2, player2Score: 1, expectedScore: thirtyFifteen, isScoreValid: true },
  { player1Score: 1, player2Score: 2, expectedScore: fifteenThirty, isScoreValid: true },
  { player1Score: 3, player2Score: 1, expectedScore: fortyFifteen, isScoreValid: true },
  { player1Score: 1, player2Score: 3, expectedScore: fifteenForty, isScoreValid: true },
  { player1Score: 3, player2Score: 2, expectedScore: fortyThirty, isScoreValid: true },
  { player1Score: 2, player2Score: 3, expectedScore: thirtyForty, isScoreValid: true },
];

const deuceScores: ExceptedTennisScore[] = [
  { player1Score: 3, player2Score: 3, expectedScore: deuce, isScoreValid: true },
  { player1Score: 4, player2Score: 4, expectedScore: deuce, isScoreValid: true },
  { player1Score: 50, player2Score: 50, expectedScore: deuce, isScoreValid: true },
  { player1Score: 4, player2Score: 3, expectedScore: advantagePlayer1, isScoreValid: true },
  { player1Score: 3, player2Score: 4, expectedScore: advantagePlayer2, isScoreValid: true },
  { player1Score: 5, player2Score: 4, expectedScore: advantagePlayer1, isScoreValid: true },
  { player1Score: 4, player2Score: 5, expectedScore: advantagePlayer2, isScoreValid: true },
  { player1Score: 15, player2Score: 14, expectedScore: advantagePlayer1, isScoreValid: true },
  { player1Score: 14, player2Score: 15, expectedScore: advantagePlayer2, isScoreValid: true },
];

export const winningScores: ExceptedTennisScore[] = [
  { player1Score: 4, player2Score: 0, expectedScore: winForPlayer1, isScoreValid: true },
  { player1Score: 0, player2Score: 4, expectedScore: winForPlayer2, isScoreValid: true },
  { player1Score: 4, player2Score: 1, expectedScore: winForPlayer1, isScoreValid: true },
  { player1Score: 1, player2Score: 4, expectedScore: winForPlayer2, isScoreValid: true },
  { player1Score: 4, player2Score: 2, expectedScore: winForPlayer1, isScoreValid: true },
  { player1Score: 2, player2Score: 4, expectedScore: winForPlayer2, isScoreValid: true },
  { player1Score: 6, player2Score: 4, expectedScore: winForPlayer1, isScoreValid: true },
  { player1Score: 4, player2Score: 6, expectedScore: winForPlayer2, isScoreValid: true },
  { player1Score: 16, player2Score: 14, expectedScore: winForPlayer1, isScoreValid: true },
  { player1Score: 99, player2Score: 14, expectedScore: winForPlayer1, isScoreValid: true },
  { player1Score: 100, player2Score: 14, expectedScore: winForPlayer1, isScoreValid: true },
  { player1Score: 14, player2Score: 16, expectedScore: winForPlayer2, isScoreValid: true },
  { player1Score: 14, player2Score: 99, expectedScore: winForPlayer2, isScoreValid: true },
  { player1Score: 14, player2Score: 100, expectedScore: winForPlayer2, isScoreValid: true },
];

//todo: get rid of isScoreValid after all tests use new expectedErrors
// todo: extract dups
const expectedErrorsForPlayer1 = [ { player: 1, expectedErrorMessage: scoreErrorMessage } ];
const expectedErrorsForPlayer2 = [ { player: 2, expectedErrorMessage: scoreErrorMessage } ];
const expectedErrorsForBothPlayers = [
  { player: 1, expectedErrorMessage: scoreErrorMessage },
  { player: 2, expectedErrorMessage: scoreErrorMessage }
];

const invalidNegativeScores: ExceptedTennisScore[] = [
  { player1Score: -1, player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: -99, player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: -99, player2Score: -99, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForBothPlayers },
  { player1Score: 0, player2Score: -1, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
  { player1Score: 0, player2Score: -99, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
];

const invalidLargeScores: ExceptedTennisScore[] = [
  { player1Score: 101, player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: 999, player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: 101, player2Score: 101, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForBothPlayers },
  { player1Score: 0, player2Score: 101, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
  { player1Score: 0, player2Score: 999, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
];

const invalidNonNumberScores: ExceptedTennisScore[] = [
  { player1Score: '', player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: 'not a number', player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: '!@#$%^&*()_', player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: '1x', player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: '1x', player2Score: '1x', expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForBothPlayers },
  { player1Score: 0, player2Score: '', expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
  { player1Score: 0, player2Score: 'not a number', expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
  { player1Score: 0, player2Score: '!@#$%^&*()_', expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
  { player1Score: 0, player2Score: -99, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
];

const invalidNonIntegerScores: ExceptedTennisScore[] = [
  { player1Score: 1.6, player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: 0.6, player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: 1 / 4, player2Score: 0, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer1 },
  { player1Score: 1 / 4, player2Score: 1 / 4, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForBothPlayers },
  { player1Score: 0, player2Score: 1.6, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
  { player1Score: 0, player2Score: 0.6, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
  { player1Score: 0, player2Score: 1 / 4, expectedScore: invalidScore, isScoreValid: false, expectedErrors: expectedErrorsForPlayer2 },
];

export const invalidScores: ExceptedTennisScore[] = []
  .concat(invalidNegativeScores)
  .concat(invalidLargeScores)
  .concat(invalidNonIntegerScores)
  .concat(invalidNonNumberScores);

// todo: separate out error message from score and show it on the gui (one error message label or one per input?
// https://material.angular.io/components/input/overview
// https://github.com/DeborahK/Angular-ReactiveForms/blob/master/Demo-Final/src/app/customers/customer.component.html
// todo: get rid of isScoreValid in expected data since that can be inferered from error text
// todo: need tests for the above two and apply to other tennis games other than 1
// todo do we want hint text for each input?
// todo: do full fancy reactive forms implementation with subsriptions and delayed feedback while still in value? not needed?
// todo: expect different error messages for different kinds of issues?
// todo: any other ZOMBIES?
// todo: make product error handling code more dirty (each component different)
// todo: make test code for error handling be clean
// todo: try out TCR on this project

export const expectedTennisScores: ExceptedTennisScore[] = []
  .concat(tiedScores)
  .concat(leadingScores)
  .concat(deuceScores)
  .concat(winningScores)
  .concat(invalidScores);
