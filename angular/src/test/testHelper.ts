import {TennisGame} from '../app/TennisGame';
import {TennisGame3Component} from '../app/tennis-game3/tennis-game3.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const testImports = [FormsModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, BrowserAnimationsModule];

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

  setInputValue(inputSelector: string, newValue: number | string) {
    const player1ScoreInputElement = this.element.querySelector(inputSelector);
    player1ScoreInputElement.value = newValue;
    player1ScoreInputElement.dispatchEvent(new Event('input'));
  }

  selectElement(elementSelector: string) {
    const getScoreButtonElement = this.element.querySelector(elementSelector);
    getScoreButtonElement.click();
    this.fixture.detectChanges();
  }

  verifyLabelText(labelSelector: string, expectedText: number | string) {
    const overallScore = this.fixture.debugElement.query(By.css(labelSelector));
    // @ts-ignore
    expect(overallScore.nativeElement.outerText).toBe(expectedText);
  }
}

export const overallScoreLabel = '#overall-score';
export const player1ScoreInput = '#player-one-score';
export const player2ScoreInput = '#player-two-score';
export const getScoreButton = '#get-score-button';
export const expectedTennisScores = [
  [0, 0, 'Love-All'],
  [1, 1, 'Fifteen-All'],
  [2, 2, 'Thirty-All'],
  [3, 3, 'Deuce'],
  [4, 4, 'Deuce'],

  [1, 0, 'Fifteen-Love'],
  [0, 1, 'Love-Fifteen'],
  [2, 0, 'Thirty-Love'],
  [0, 2, 'Love-Thirty'],
  [3, 0, 'Forty-Love'],
  [0, 3, 'Love-Forty'],
  [4, 0, 'Win for player1'],
  [0, 4, 'Win for player2'],

  [2, 1, 'Thirty-Fifteen'],
  [1, 2, 'Fifteen-Thirty'],
  [3, 1, 'Forty-Fifteen'],
  [1, 3, 'Fifteen-Forty'],
  [4, 1, 'Win for player1'],
  [1, 4, 'Win for player2'],

  [3, 2, 'Forty-Thirty'],
  [2, 3, 'Thirty-Forty'],
  [4, 2, 'Win for player1'],
  [2, 4, 'Win for player2'],

  [4, 3, 'Advantage player1'],
  [3, 4, 'Advantage player2'],
  [5, 4, 'Advantage player1'],
  [4, 5, 'Advantage player2'],
  [15, 14, 'Advantage player1'],
  [14, 15, 'Advantage player2'],

  [6, 4, 'Win for player1'],
  [4, 6, 'Win for player2'],
  [16, 14, 'Win for player1'],
  [14, 16, 'Win for player2']
];
