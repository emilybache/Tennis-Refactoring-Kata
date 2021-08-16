import {async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {TennisGame1Component} from './tennis-game1/tennis-game1.component';
import {TennisGame2Component} from './tennis-game2/tennis-game2.component';
import {TennisGame3Component} from './tennis-game3/tennis-game3.component';
import {TennisComponentTester} from '../test/tennisTester';
import {largeHeadingElement, tennisGame, tennisKataTitleId} from '../test/selectors';
import {materialDesignHeading1ClassName, twentyPixels} from '../test/expectedStyles';
import {classKey, idKey} from '../test/attributes';
import {expectedText} from '../test/expectedResults';

describe('Tennis App', () => {
  let tennisTester: TennisComponentTester;

  beforeEach(async(() => {
    const declarations = [
      AppComponent,
      TennisGame1Component,
      TennisGame2Component,
      TennisGame3Component,
    ];
    tennisTester = new TennisComponentTester();
    tennisTester.beforeEach(declarations);
  }));

  describe('Tennis Kata Title', () => {

    it('should have the correct text', () => {
      tennisTester.verifyLabelText('#' + tennisKataTitleId, expectedText.kataTitle);
    });

    it('should have moderate spacing around it', () => {
      const tennisKataTitleStyles = tennisTester.getStylesFor('#' + tennisKataTitleId);

      expect(tennisKataTitleStyles.margin).toBe(twentyPixels);
    });

    it('should be the only large material design heading', () => {
      const tennisKataHeadings = tennisTester.element.querySelectorAll(largeHeadingElement);

      expect(tennisKataHeadings.length).toBe(1);
      expect(tennisKataHeadings[0].getAttribute(classKey)).toContain(materialDesignHeading1ClassName);
      expect(tennisKataHeadings[0].getAttribute(idKey)).toContain(tennisKataTitleId);
    });
  });

  it('should display tennis games 1-3', () => {
    tennisTester.verifyElementExists(tennisGame + '1');
    tennisTester.verifyElementExists(tennisGame + '2');
    tennisTester.verifyElementExists(tennisGame + '3');
  });
});
