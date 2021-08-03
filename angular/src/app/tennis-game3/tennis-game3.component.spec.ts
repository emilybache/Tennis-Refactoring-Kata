import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TennisGame3Component } from './tennis-game3.component';
import {expectedScores} from '../../test/testHelper';

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
      expect(component.overallScore).toBe('');

      setInputValue('#player-one-score', player1Score);
      setInputValue('#player-two-score', player2Score);
      selectElement('#get-score-button');

      expect(component.overallScore).toBe(expectedScore as string);
    });

    function setInputValue(inputSelector: string, newPlayer1Score: number | string) {
      const player1ScoreInput = element.querySelector(inputSelector);
      player1ScoreInput.value = newPlayer1Score;
      player1ScoreInput.dispatchEvent(new Event('input'));
    }

    function selectElement(selector: string) {
      const getScoreButton = element.querySelector(selector);
      getScoreButton.click();
    }
  });
});
