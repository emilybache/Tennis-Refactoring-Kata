import {async} from '@angular/core/testing';
import {TennisGame3Component} from './tennis-game3.component';
import {expectedScores, TennisComponentTester} from '../../test/testHelper';

describe('TennisGame3Component', () => {
  let tennisTester: TennisComponentTester;

  beforeEach(async(() => {
    tennisTester = new TennisComponentTester();
    tennisTester.beforeEach([ TennisGame3Component ]);
  }));

  it('should create', () => {
    expect(tennisTester.component).toBeTruthy();
  });

  expectedScores.forEach(([player1Score, player2Score, expectedScore]) => {
    it(`should score '${expectedScore}' when player 1 has '${player1Score}' and player 2 has '${player2Score}'`, () => {
      tennisTester.verifyLabelText('#overall-score', '');

      tennisTester.setInputValue('#player-one-score', player1Score);
      tennisTester.setInputValue('#player-two-score', player2Score);
      tennisTester.selectElement('#get-score-button');

      tennisTester.verifyLabelText('#overall-score', expectedScore);
    });
  });
});
