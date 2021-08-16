import {async} from '@angular/core/testing';
import {TennisGame2Component} from './tennis-game2.component';
import {
  TennisComponentTester
} from '../../test/tennisTester';
import {
  getScoreButton,
  overallScore, overallScoreLabel, overallScoreSection,
  player1ScoreInput, player1ScoreLabel,
  player2ScoreInput, player2ScoreLabel,
  tennisGameCard,
  tennisGameCardContents, tennisGameCardSubtitle, tennisGameCardTitle
} from '../../test/selectors';
import {expectedTennisScores, expectedText} from '../../test/expectedResults';
import {
  boldFontWeight,
  flex,
  slightlyRoundedBottomCorners, spaceBetween,
  tennisBallOpticYellowColor,
  tennisCardMaxWidth,
  tennisCourtGreenColor,
  twentyPixels,
  whiteColor,
  zeroPixels
} from '../../test/expectedStyles';

describe('Tennis Game 2', () => {
  let tennisTester: TennisComponentTester;

  beforeEach(async(() => {
    tennisTester = new TennisComponentTester();
    tennisTester.beforeEach([TennisGame2Component]);
  }));

  describe('Scoring', () => {
    expectedTennisScores.forEach(([player1Score, player2Score, expectedScore]) => {
      it(`should score '${expectedScore}' when player 1 has '${player1Score}' and player 2 has '${player2Score}'`, () => {
        tennisTester.verifyLabelText(overallScore, '');

        tennisTester.setInputValue(player1ScoreInput, player1Score);
        tennisTester.setInputValue(player2ScoreInput, player2Score);
        tennisTester.selectElement(getScoreButton);

        tennisTester.verifyLabelText(overallScore, expectedScore);
      });
    });
  });

  describe('Card', () => {
    let tennisGameCardStyles;

    beforeEach(() => {
      tennisGameCardStyles = tennisTester.getStylesFor(tennisGameCard);
    });

    it('should not apply extra padding since padding is handled within card contents', () => {
      expect(tennisGameCardStyles.padding).toBe(zeroPixels);
    });

    it('should be proper width so can full card can be easily seen', () => {
      expect(tennisGameCardStyles.maxWidth).toBe(tennisCardMaxWidth);
    });

    it('should have some space between each tennis game card so that they are not jammed next to each other', () => {
      expect(tennisGameCardStyles.marginBottom).toBe(twentyPixels);
    });

    it('should have some left margin so that it is not jammed up right next to edge of browser', () => {
      expect(tennisGameCardStyles.marginLeft).toBe(twentyPixels);
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

      it('should have correct text', () => {
        tennisTester.verifyLabelText(tennisGameCardTitle, 'Tennis Game 2');
        tennisTester.verifyLabelText(tennisGameCardSubtitle, expectedText.cardSubtitle);
      });
    });

    describe('Player Scores', () => {
      it('should have correct text labels', () => {
        tennisTester.verifyLabelText(player1ScoreLabel, expectedText.player1ScoreLabel);
        tennisTester.verifyLabelText(player2ScoreLabel, expectedText.player2ScoreLabel);
      });
    });

    describe('Get Score Button', () => {
      it('should have correct text', () => {
        tennisTester.verifyLabelText(getScoreButton, expectedText.getScoreLabel);
      });

      it('should be tennis court green color', () => {
        const getScoreButtonStyles = tennisTester.getStylesFor(getScoreButton);

        expect(getScoreButtonStyles.backgroundColor).toBe(tennisCourtGreenColor);
        expect(getScoreButtonStyles.color).toBe(whiteColor);
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
        it('should have correct text', () => {
          tennisTester.verifyLabelText(overallScoreLabel, expectedText.overallScoreLabel);
        });

        it('should be bold to stand out', () => {
          const overallScoreLabelStyles = tennisTester.getStylesFor(overallScoreLabel);

          expect(overallScoreLabelStyles.fontWeight).toBe(boldFontWeight);
        });
      });
    });
  });
});
