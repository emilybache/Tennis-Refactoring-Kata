import {async} from '@angular/core/testing';
import {TennisGame2Component} from './tennis-game2.component';
import {expectedTennisScores, TennisComponentTester} from '../../test/testHelper';

describe('TennisGame2Component', () => {
  let tennisTester: TennisComponentTester;

  beforeEach(async(() => {
    tennisTester = new TennisComponentTester();
    tennisTester.beforeEach([TennisGame2Component]);
  }));

  expectedTennisScores.forEach(([player1Score, player2Score, expectedScore]) => {
    it(`should score '${expectedScore}' when player 1 has '${player1Score}' and player 2 has '${player2Score}'`, () => {
      tennisTester.verifyLabelText('#overall-score', '');

      tennisTester.setInputValue('#player-one-score', player1Score);
      tennisTester.setInputValue('#player-two-score', player2Score);
      tennisTester.selectElement('#get-score-button');

      tennisTester.verifyLabelText('#overall-score', expectedScore);
    });
  });
});
