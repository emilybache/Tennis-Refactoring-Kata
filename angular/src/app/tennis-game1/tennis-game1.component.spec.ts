import {async} from '@angular/core/testing';
import {TennisGame1Component} from './tennis-game1.component';
import {TennisComponentTester} from '../../test/tennisTester';
import {
  boldFontWeight,
  flex,
  slightlyRoundedBottomCorners,
  spaceBetween,
  tennisBallOpticYellowColor,
  twentyPixels,
  zeroPixels
} from '../../test/expectedStyles';
import {
  getScoreButton,
  tennisGameCardContents,
  overallScore,
  overallScoreLabel,
  overallScoreSection,
  player1ScoreInput,
  player2ScoreInput,
  tennisGameCard,
  tennisGameCardTitle, tennisGameCardSubtitle
} from '../../test/selectors';
import {expectedTennisScores} from '../../test/expectedResults';
import {By} from '@angular/platform-browser';

describe('Tennis Game 1', () => {
  let tennisTester: TennisComponentTester;

  beforeEach(async(() => {
    tennisTester = new TennisComponentTester();
    tennisTester.beforeEach([TennisGame1Component]);
  }));

  expectedTennisScores.forEach(([player1Score, player2Score, expectedScore]) => {
    it(`should score '${expectedScore}' when player 1 has '${player1Score}' and player 2 has '${player2Score}'`, () => {
      tennisTester.verifyLabelText(overallScore, '');

      tennisTester.setInputValue(player1ScoreInput, player1Score);
      tennisTester.setInputValue(player2ScoreInput, player2Score);
      tennisTester.selectElement(getScoreButton);

      tennisTester.verifyLabelText(overallScore, expectedScore);
    });
  });

  describe('Card', () => {
    it('should not apply extra padding since padding is handled within card contents', () => {
      const tennisGameCardStyles = tennisTester.getStylesFor(tennisGameCard);

      expect(tennisGameCardStyles.padding).toBe(zeroPixels);
    });

    describe('Contents', () => {
      it('should have some padding so items are are not jammed next to each other', () => {
        const tennisGameCardContentsStyles = tennisTester.getStylesFor(tennisGameCardContents);

        expect(tennisGameCardContentsStyles.padding).toBe(twentyPixels);
      });
    });

    describe('Title and Subtitle', () => {
      it('should have no extra margin so they are left aligned with rest of card contents', () => {
        const titleParent = tennisTester.getParentStylesFor(tennisGameCardTitle);
        const subtitleParent = tennisTester.getParentStylesFor(tennisGameCardSubtitle);

        expect(titleParent.margin).toBe(zeroPixels);
        expect(subtitleParent.margin).toBe(zeroPixels);
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

      describe('Overall Score Label', () => {
        it('should be bold to stand out', () => {
          const overallScoreLabelStyles = tennisTester.getStylesFor(overallScoreLabel);

          const overallScoreLabelFontWeight = overallScoreLabelStyles.fontWeight;

          expect(overallScoreLabelFontWeight).toBe(boldFontWeight);
        });
      });
    });
  });
});
