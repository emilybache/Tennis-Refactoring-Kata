import { async} from '@angular/core/testing';
import { TennisGame1Component } from './tennis-game1.component';
import {
  expectedTennisScores,
  getScoreButton,
  overallScoreLabel,
  player1ScoreInput,
  player2ScoreInput,
  TennisComponentTester
} from '../../test/testHelper';

describe('TennisGame1Component', () => {
  let tennisTester: TennisComponentTester;

  beforeEach(async(() => {
    tennisTester = new TennisComponentTester();
    tennisTester.beforeEach([ TennisGame1Component ]);
  }));

  expectedTennisScores.forEach(([player1Score, player2Score, expectedScore]) => {
    it(`should score '${expectedScore}' when player 1 has '${player1Score}' and player 2 has '${player2Score}'`, () => {
      tennisTester.verifyLabelText(overallScoreLabel, '');

      tennisTester.setInputValue(player1ScoreInput, player1Score);
      tennisTester.setInputValue(player2ScoreInput, player2Score);
      tennisTester.selectElement(getScoreButton);

      tennisTester.verifyLabelText(overallScoreLabel, expectedScore);
    });
  });
});
