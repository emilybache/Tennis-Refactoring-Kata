import {async} from '@angular/core/testing';
import {TennisGame1Component} from './tennis-game1.component';
import {TennisComponentTester} from '../../test/tennisTester';
import {
  blockDisplay,
  boldFontWeight, darkGrayColor, expectedVerticalSpacingBetweenScores,
  flex, lightGrayColor,
  slightlyRoundedBottomCorners,
  spaceBetween,
  tennisBallOpticYellowColor, tennisCardMaxWidth, tennisCourtGreenColor,
  twentyPixels, whiteColor,
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
  tennisGameCardTitle,
  tennisGameCardSubtitle, player1ScoreLabel, player2ScoreLabel, errorLabelForPlayer
} from '../../test/selectors';
import {expectedTennisScores, expectedText, invalidScores, scoreErrorMessage, winningScores} from '../../test/expectedResults';
import {ManagerOfZanzibar} from './ZanzibarManager';
import {smartSpyOn} from '../../test/smartSpy';
import {maxScore, minScore, numberType} from '../../test/expectedElementAttributes';

describe('Tennis Game 1', () => {
  let tennisTester: TennisComponentTester;

  beforeEach(async(async () => {
    tennisTester = new TennisComponentTester();
    await tennisTester.beforeEach([TennisGame1Component]);
  }));

  describe('Scoring', () => {

    it('should have correct initial value before any scores are entered', () => {
      tennisTester.verifyLabelText(overallScore, '');
      tennisTester.verifyInputValue(player1ScoreInput, '0');
      tennisTester.verifyInputValue(player2ScoreInput, '0');
    });

    expectedTennisScores.forEach(({player1Score, player2Score, expectedScore, expectedErrors}) => {
      it(`should score '${expectedScore}' when player 1 has '${player1Score}' and player 2 has '${player2Score}'`, () => {
        tennisTester.verifyButtonIsEnabled(getScoreButton);

        tennisTester.enterPlayersScores(player1Score, player2Score);
        tennisTester.selectElement(getScoreButton);

        tennisTester.verifyInputValidation(expectedErrors);
        tennisTester.verifyLabelText(overallScore, expectedScore);
      });
    });

    describe('Score Input', () => {
      let player1ScoreInputElement;
      let player2ScoreInputElement;

      beforeEach(() => {
        player1ScoreInputElement = tennisTester.getElement(player1ScoreInput);
        player2ScoreInputElement = tennisTester.getElement(player2ScoreInput);
      });

      it('should only allow numbers', () => {
        expect(player1ScoreInputElement.attributes.type).toBe(numberType);
        expect(player2ScoreInputElement.attributes.type).toBe(numberType);
      });

      it('should prevent large numbers via the incrementer button', () => {
        expect(player1ScoreInputElement.attributes.max).toBe(maxScore);
        expect(player2ScoreInputElement.attributes.max).toBe(maxScore);
      });

      it('should prevent negative numbers via the decrementer button', () => {
        expect(player1ScoreInputElement.attributes.min).toBe(minScore);
        expect(player2ScoreInputElement.attributes.min).toBe(minScore);
      });

      // todo: replace magic and dups
      // todo: way to get rid of setTimeout
      // todo: apply this to other tennis games spec files
      it('should show validation feedback after user starts entering data for more than 3 seconds', (done) => {
        expect(tennisTester.component.tennisGameForm.get('player1Score').touched).toBe(false);
        expect(tennisTester.component.tennisGameForm.get('player2Score').touched).toBe(false);
        tennisTester.verifyNoErrorMessages();

        tennisTester.setInputValue(player1ScoreInput, -3);
        tennisTester.setInputValue(player2ScoreInput, -1);
        tennisTester.selectElement(getScoreButton);

        setTimeout(() => {
          tennisTester.verifyErrorLabelText(errorLabelForPlayer[1], scoreErrorMessage);
          tennisTester.verifyErrorLabelText(errorLabelForPlayer[2], scoreErrorMessage);
          expect(tennisTester.component.tennisGameForm.get('player1Score').touched).toBe(true);
          expect(tennisTester.component.tennisGameForm.get('player2Score').touched).toBe(true);
          expect(tennisTester.debounceDueTimesSent[0]).toBe(3000);
          expect(tennisTester.debounceDueTimesSent[1]).toBe(3000);
          expect(tennisTester.debounceDueTimesSent.length).toBe(2);
          done();
          }, 0);
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

    it('should have some space between each tennis game card so that they are not jammed next to each other', () => {
      expect(tennisGameCardStyles.marginBottom).toBe(twentyPixels);
    });

    it('should be proper width so can full card can be easily seen', () => {
      expect(tennisGameCardStyles.maxWidth).toBe(tennisCardMaxWidth);
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
        tennisTester.verifyLabelText(tennisGameCardTitle, 'Tennis Game 1');
        tennisTester.verifyLabelText(tennisGameCardSubtitle, expectedText.cardSubtitle);
      });
    });

    describe('Player Scores', () => {
      it('should have correct text labels', () => {
        tennisTester.verifyLabelText(player1ScoreLabel, expectedText.player1ScoreLabel);
        tennisTester.verifyLabelText(player2ScoreLabel, expectedText.player2ScoreLabel);
      });

      it('should have proper spacing to allow space for validation error messages', () => {
        const playerScoreFormFieldsStyles = tennisTester.getPlayerScoreFormFieldsStyles();

        playerScoreFormFieldsStyles.forEach(playerScoreFormFieldStyles => {
          expect(playerScoreFormFieldStyles.display).toBe(blockDisplay);
          expect(playerScoreFormFieldStyles.marginBottom).toBe(expectedVerticalSpacingBetweenScores);
        });
      });
    });

    describe('Get Score Button', () => {
      it('should have correct text', () => {
        tennisTester.verifyLabelText(getScoreButton, expectedText.getScoreLabel);
      });

      it('should be tennis court green color when enabled', () => {
        tennisTester.verifyButtonIsEnabled(getScoreButton);

        const getScoreButtonStyles = tennisTester.getStylesFor(getScoreButton);

        expect(getScoreButtonStyles.backgroundColor).toBe(tennisCourtGreenColor);
        expect(getScoreButtonStyles.color).toBe(whiteColor);
      });

      it('should be grayed out when disabled', () => {
        tennisTester.enterPlayersScores(invalidScores[0].player1Score, winningScores[0].player2Score);
        tennisTester.fixture.detectChanges();
        tennisTester.verifyButtonIsEnabled(getScoreButton, false);

        const getScoreButtonStyles = tennisTester.getStylesFor(getScoreButton);

        expect(getScoreButtonStyles.backgroundColor).toBe(lightGrayColor);
        expect(getScoreButtonStyles.color).toBe(darkGrayColor);
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

  it('should notify user when there is an error', () => {
    SetupScoringServiceToHaveAnError();

    tennisTester.enterPlayersScores(1, 1);
    tennisTester.selectElement(getScoreButton);

    tennisTester.verifyLabelText(overallScore, expectedText.errorMessage);
  });

  function SetupScoringServiceToHaveAnError() {
    const scoringService = tennisTester.fixture.debugElement.injector.get(ManagerOfZanzibar);
    smartSpyOn(scoringService, scoringService.getTexas).and.throwError(expectedText.scoringError);
  }
});
