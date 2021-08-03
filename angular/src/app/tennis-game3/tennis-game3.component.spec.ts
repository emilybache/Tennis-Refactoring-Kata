import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TennisGame3Component} from './tennis-game3.component';
import {expectedScores} from '../../test/testHelper';
import {By} from '@angular/platform-browser';

describe('TennisGame3Component', () => {
  let component: TennisGame3Component;
  let fixture: ComponentFixture<TennisGame3Component>;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ TennisGame3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisGame3Component);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  expectedScores.forEach(([player1Score, player2Score, expectedScore]) => {
    it(`should score '${expectedScore}' when player 1 has '${player1Score}' and player 2 has '${player2Score}'`, () => {
      verifyLabelText('#overall-score', '');

      setInputValue('#player-one-score', player1Score);
      setInputValue('#player-two-score', player2Score);
      selectElement('#get-score-button');

      verifyLabelText('#overall-score', expectedScore);
    });

    function setInputValue(inputSelector: string, newValue: number | string) {
      const player1ScoreInput = element.querySelector(inputSelector);
      player1ScoreInput.value = newValue;
      player1ScoreInput.dispatchEvent(new Event('input'));
    }

    function selectElement(elementSelector: string) {
      const getScoreButton = element.querySelector(elementSelector);
      getScoreButton.click();
      fixture.detectChanges();
    }

    function verifyLabelText(labelSelector: string, expectedText: number | string) {
      const overallScore = fixture.debugElement.query(By.css(labelSelector));
      expect(overallScore.nativeElement.outerText).toBe(expectedText);
    }
  });
});
