import {TennisGame} from '../app/TennisGame';
import {TennisGame3Component} from '../app/tennis-game3/tennis-game3.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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

  getStylesFor(selectors: string) {
    const element = this.element.querySelector(selectors);
    const stylesForElement = getComputedStyle(element);
    return stylesForElement;
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
