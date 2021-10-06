import {TennisGame} from '../app/TennisGame';
import {TennisGame3Component} from '../app/tennis-game3/tennis-game3.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {getScoreButton, player1ScoreInput, player2ScoreInput, errorLabelForPlayer} from './selectors';
import {ExpectedError} from './expectedResults';

export const testImports = [
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatCardModule
  ];

export class TennisComponentTester {
  component: TennisGame;
  fixture: ComponentFixture<TennisGame3Component>;
  element: any;
  private readonly tennisComponentIndex = 0;

  async beforeEach(declarations: any[]) {
    await TestBed.configureTestingModule({
      imports: testImports,
      declarations
    }).compileComponents();
    this.fixture = TestBed.createComponent(declarations[this.tennisComponentIndex]);
    this.component = this.fixture.componentInstance;
    this.element = this.fixture.nativeElement;
    this.fixture.detectChanges();
    // @ts-ignore
    expect(this.component).toBeTruthy();
  }

  public getElement(elementSelector: string) {
    return this.fixture.debugElement.query(By.css(elementSelector));
  }

  getStylesFor(selectors: string) {
    const element = this.element.querySelector(selectors);
    return getComputedStyle(element);
  }

  getParentStylesFor(selectors: string) {
    const element = this.getElement(selectors);
    return getComputedStyle(element.parent.nativeElement);
  }

  setInputValue(inputSelector: string, newValue: number | string) {
    const inputElement = this.element.querySelector(inputSelector);
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));
  }

  enterPlayersScores(player1Score: string | number, player2Score: string | number) {
    this.setInputValue(player1ScoreInput, player1Score);
    this.setInputValue(player2ScoreInput, player2Score);
    this.component.tennisGameForm.controls.player1Score.markAsTouched();
    this.component.tennisGameForm.controls.player2Score.markAsTouched();
  }

  selectElement(elementSelector: string) {
    const element = this.element.querySelector(elementSelector);
    element.click();
    this.fixture.detectChanges();
  }

  verifyLabelText(labelSelector: string, expectedText: number | string) {
    const label = this.getElement(labelSelector);
    // @ts-ignore
    expect(label.nativeElement.outerText).toBe(expectedText);
  }

  verifyInputValue(buttonElementSelector: string, expectedValue: string) {
    const buttonElement = this.getElement(buttonElementSelector);
    // @ts-ignore
    expect(buttonElement.properties.value.toString()).toBe(expectedValue);
  }

  verifyButtonIsEnabled(buttonElementSelector: string, isEnabled: boolean = true) {
    const buttonElement = this.getElement(buttonElementSelector);
    // @ts-ignore
    expect(buttonElement.properties.disabled).toBe(!isEnabled);
  }

  verifyElementExists(selector: string) {
    const element = this.getElement(selector);
    // @ts-ignore
    expect(element).toBeTruthy();
  }

  private verifyElementIsVisible(selector: string, isVisible: boolean = true) {
    const element = this.element.querySelector(selector);
    if (isVisible) {
      // @ts-ignore
      expect(element).not.toBeNull();
    } else {
      // @ts-ignore
      expect(element).toBeNull();
    }

  }

  verifyErrorLabelText(selector: string, expectedErrorMessage: string) {
    this.verifyElementExists(selector);
    this.verifyElementIsVisible(selector);
    const errorLabel = this.element.querySelector(selector);
    // @ts-ignore
    expect(errorLabel.innerText).toBe(expectedErrorMessage);
  }

  // todo: lots of clean up here
  // todo: make generic reduces instead of hard coded array indexes
  verifyInputValidation(expectedErrors: ExpectedError[]) {
    if (this.thereAreAny(expectedErrors)) {
      this.verifyButtonIsEnabled(getScoreButton, false);
      expectedErrors.forEach(error => {
        if (error.player === 1) {
          this.verifyErrorLabelText(errorLabelForPlayer[1], error.expectedErrorMessage);
        }
        if (error.player === 2) {
          this.verifyErrorLabelText(errorLabelForPlayer[2], error.expectedErrorMessage);
        }
      });
    } else {
      this.verifyElementIsVisible(errorLabelForPlayer[1], false);
      this.verifyElementIsVisible(errorLabelForPlayer[2], false);
      this.verifyButtonIsEnabled(getScoreButton, true);
    }
  }

  private thereAreAny(expectedErrors: ExpectedError[]) {
    return expectedErrors && expectedErrors.length > 0;
  }
}
