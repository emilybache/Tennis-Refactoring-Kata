import {async} from '@angular/core/testing';
import {TennisGame1Component} from './tennis-game1.component';
import {TennisComponentTester} from '../../test/tennisTester';
import {
  flex,
  slightlyRoundedBottomCorners,
  spaceBetween,
  tennisBallOpticYellowColor,
  twentyPixels,
  zeroPixels
} from '../../test/expectedStyles';
import {getScoreButton, overallScoreLabel, overallScoreSection, player1ScoreInput, player2ScoreInput} from '../../test/selectors';
import {expectedTennisScores} from '../../test/expectedResults';

describe('Tennis Game 1', () => {
  let tennisTester: TennisComponentTester;

  beforeEach(async(() => {
    tennisTester = new TennisComponentTester();
    tennisTester.beforeEach([TennisGame1Component]);
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

  describe('Overall Score Section', () => {
    let overallScoreSectionStyles;

    beforeEach(() => {
      overallScoreSectionStyles = tennisTester.getStylesFor(overallScoreSection);
    });

    it('should be a bright tennis color so it stands out', () => {
      expect(overallScoreSectionStyles.backgroundColor).toBe(tennisBallOpticYellowColor);
    });

    it('should look like the bottom of a card', () => {
      expect(overallScoreSectionStyles.borderRadius).toBe(slightlyRoundedBottomCorners);
    });

    it('should be spaced correctly so the label is distinct from the computed score', () => {
      expect(overallScoreSectionStyles.padding).toBe(twentyPixels);
      expect(overallScoreSectionStyles.marginLeft).toBe(zeroPixels);
      expect(overallScoreSectionStyles.marginRight).toBe(zeroPixels);
      expect(overallScoreSectionStyles.display).toBe(flex);
      expect(overallScoreSectionStyles.justifyContent).toBe(spaceBetween);
    });
  });
});
