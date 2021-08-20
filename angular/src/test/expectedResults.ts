export const expectedText = {
  kataTitle: 'Tennis Kata',
  cardSubtitle: 'Score Calculator',
  player1ScoreLabel: 'Player 1 Score',
  player2ScoreLabel: 'Player 2 Score',
  getScoreLabel: 'Get Score',
  overallScoreLabel: 'Overall Score'
};

export const expectedTennisScores = [
    [0.0, 0, 'Love-All'],
    [0, 0, 'Love-All'],
    [1, 1, 'Fifteen-All'],
    [1, 1.0, 'Fifteen-All'],
    [2, 2, 'Thirty-All'],
    [3, 3, 'Deuce'],
    [4, 4, 'Deuce'],

    [1, 0, 'Fifteen-Love'],
    [0, 1, 'Love-Fifteen'],
    [2, 0, 'Thirty-Love'],
    [0, 2, 'Love-Thirty'],
    [3, 0, 'Forty-Love'],
    [0, 3, 'Love-Forty'],
    [4, 0, 'Win for player1'],
    [0, 4, 'Win for player2'],

    [2, 1, 'Thirty-Fifteen'],
    [1, 2, 'Fifteen-Thirty'],
    [3, 1, 'Forty-Fifteen'],
    [1, 3, 'Fifteen-Forty'],
    [4, 1, 'Win for player1'],
    [1, 4, 'Win for player2'],

    [3, 2, 'Forty-Thirty'],
    [2, 3, 'Thirty-Forty'],
    [4, 2, 'Win for player1'],
    [2, 4, 'Win for player2'],

    [4, 3, 'Advantage player1'],
    [3, 4, 'Advantage player2'],
    [5, 4, 'Advantage player1'],
    [4, 5, 'Advantage player2'],
    [15, 14, 'Advantage player1'],
    [14, 15, 'Advantage player2'],

    [6, 4, 'Win for player1'],
    [4, 6, 'Win for player2'],
    [16, 14, 'Win for player1'],
    [14, 16, 'Win for player2'],

    [-1, 0, 'Invalid Score'],
    [-99, 0, 'Invalid Score'],
    [0, -1, 'Invalid Score'],
    [0, -99, 'Invalid Score'],
    ['not a number', 0, 'Invalid Score'],
    ['!@#$%^&*()_', 0, 'Invalid Score'],
    ['1x', 0, 'Invalid Score'],
    [1.6, 0, 'Invalid Score'],
    [0.6, 0, 'Invalid Score'],
    [1 / 4, 0, 'Invalid Score'],
    [0, 'not a number', 'Invalid Score'],
    [0, '!@#$%^&*()_', 'Invalid Score'],
    [0, '1x', 'Invalid Score'],
    ['1x', 0, 'Invalid Score'],
    [0, 1.6, 'Invalid Score'],
    [0, 0.6, 'Invalid Score'],
    [0, 1 / 4, 'Invalid Score'],
    // todo: catch exceptions thrown from new inline service called Zanzibar
    // todo: extract magic strings above for better names
    // todo: extract blocks of the array into named sub arrays
    // todo: manual test to find more ZOMBIES
    // todo: any other ZOMBIES?
    // todo: test drive add html attributes to prevent bad input e.g. negative, non-int, etc.
    // todo: separate out error message from score and show it on the gui
    // todo: expect different error messages for different kinds of issues
    // todo: any other ZOMBIES?
    // todo: make product error handling code more dirty (each component different)
    // todo: make test code for error handling be clean
];
