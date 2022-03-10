import {TennisGame} from '../app/TennisGame';
import {TennisGame3Component} from '../app/tennis-game3/tennis-game3.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  getScoreButton,
  player1ScoreInput,
  player2ScoreInput,
  errorLabelForPlayer,
  player1ScoreFormField,
  player2ScoreFormField
} from './selectors';
import {ExpectedError} from './expectedResults';
import {DeBouncer} from '../app/debouncer.service';
import {smartSpyOn} from './smartSpy';
import {debounceTime} from 'rxjs/operators';

export const tennisPlayerNumbers = [1, 2];
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
  deBouncer: DeBouncer;
  debounceDueTimesSent: number[] = [];
  private readonly tennisComponentIndex = 0;

  async beforeEach(declarations: any[]) {
    await TestBed.configureTestingModule({
      imports: testImports,
      declarations
    }).compileComponents();
    this.fixture = TestBed.createComponent(declarations[this.tennisComponentIndex]);
    this.component = this.fixture.componentInstance;
    this.element = this.fixture.nativeElement;
    this.setupDeBouncerMock();
    this.fixture.detectChanges();
    // @ts-ignore
    expect(this.component).toBeTruthy();
  }

  private setupDeBouncerMock() {
    this.deBouncer = this.fixture.debugElement.injector.get(DeBouncer);
    smartSpyOn(this.deBouncer, this.deBouncer.debounceTime).and.callFake(dueTime => {
      this.debounceDueTimesSent.push(dueTime);
      return debounceTime(0);
    });
  }

  public getElement(elementSelector: string) {
    return this.fixture.debugElement.query(By.css(elementSelector));
  }

  public getStylesFor(selectors: string) {
    const element = this.element.querySelector(selectors);
    return getComputedStyle(element);
  }

  public getPlayerScoreFormFieldsStyles() {
    const playerScoreFormFieldsStyles = [];
    playerScoreFormFieldsStyles.push(this.getStylesFor(player1ScoreFormField));
    playerScoreFormFieldsStyles.push(this.getStylesFor(player2ScoreFormField));
    return playerScoreFormFieldsStyles;
  }

  public getParentStylesFor(selectors: string) {
    const element = this.getElement(selectors);
    return getComputedStyle(element.parent.nativeElement);
  }

  public setInputValue(inputSelector: string, newValue: number | string) {
    const inputElement = this.element.querySelector(inputSelector);
    inputElement.value = newValue;
    inputElement.dispatchEvent(new Event('input'));
  }

  public enterPlayersScores(player1Score: string | number, player2Score: string | number) {
    this.setInputValue(player1ScoreInput, player1Score);
    this.setInputValue(player2ScoreInput, player2Score);
    this.component.tennisGameForm.controls.player1Score.markAsTouched();
    this.component.tennisGameForm.controls.player2Score.markAsTouched();
  }

  public selectElement(elementSelector: string) {
    const element = this.element.querySelector(elementSelector);
    element.click();
    this.fixture.detectChanges();
  }

  public verifyLabelText(labelSelector: string, expectedText: number | string) {
    const label = this.getElement(labelSelector);
    // @ts-ignore
    expect(label.nativeElement.outerText).toBe(expectedText);
  }

  public verifyInputValue(buttonElementSelector: string, expectedValue: string) {
    const buttonElement = this.getElement(buttonElementSelector);
    // @ts-ignore
    expect(buttonElement.properties.value.toString()).toBe(expectedValue);
  }

  public verifyButtonIsEnabled(buttonElementSelector: string, isEnabled: boolean = true) {
    const buttonElement = this.getElement(buttonElementSelector);
    // @ts-ignore
    expect(buttonElement.properties.disabled).toBe(!isEnabled);
  }

  public verifyElementExists(selector: string) {
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

  public verifyErrorLabelText(selector: string, expectedErrorMessage: string) {
    this.verifyElementExists(selector);
    this.verifyElementIsVisible(selector);
    const errorLabel = this.element.querySelector(selector);
    // @ts-ignore
    expect(errorLabel.innerText).toBe(expectedErrorMessage);
  }

  public verifyInputValidation(expectedScoreErrors: ExpectedError[]) {
    if (this.thereAreAny(expectedScoreErrors)) {
      this.verifyErrorMessageForInvalidScores(expectedScoreErrors);
      this.verifyNoErrorMessageForValidScores(expectedScoreErrors);
      this.verifyButtonIsEnabled(getScoreButton, false);
    } else {
      this.verifyNoScoreInputErrorMessages();
      this.verifyButtonIsEnabled(getScoreButton, true);
    }
  }

  public verifyScoreInputsHaveBeenTouched(isTouched: boolean) {
    const tennisGameForm = this.component.tennisGameForm;
    // @ts-ignore
    expect(tennisGameForm.get('player1Score').touched).toBe(isTouched);
    // @ts-ignore
    expect(tennisGameForm.get('player2Score').touched).toBe(isTouched);
  }

  public verifyNoScoreInputErrorMessages() {
    tennisPlayerNumbers.forEach(playerNumber => this.verifyElementIsVisible(errorLabelForPlayer[playerNumber], false));
  }

  public verifyAllScoreInputsHaveAnErrorMessage() {
    tennisPlayerNumbers.forEach(playerNumber => this.verifyElementIsVisible(errorLabelForPlayer[playerNumber], true));
  }

  private verifyNoErrorMessageForValidScores(expectedScoreErrors: ExpectedError[]) {
    const playerNumbersWithError = [];
    expectedScoreErrors.forEach(error => playerNumbersWithError.push(error.playerNumber));
    const playerNumbersWithoutErrors = tennisPlayerNumbers.filter(x => !playerNumbersWithError.includes(x));
    playerNumbersWithoutErrors.forEach(playerNumber => this.verifyElementIsVisible(errorLabelForPlayer[playerNumber], false));
  }

  private verifyErrorMessageForInvalidScores(expectedErrors: ExpectedError[]) {
    expectedErrors.forEach(error => this.verifyErrorLabelText(errorLabelForPlayer[error.playerNumber], error.expectedErrorMessage));
  }

  private thereAreAny(expectedErrors: ExpectedError[]) {
    return expectedErrors && expectedErrors.length > 0;
  }
}
