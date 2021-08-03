import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TennisGame2Component} from './tennis-game2.component';
import {getScore, expectedScores} from '../../test/testHelper';

describe('TennisGame2Component', () => {
  let component: TennisGame2Component;
  let fixture: ComponentFixture<TennisGame2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TennisGame2Component]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisGame2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  expectedScores.forEach(([player1Score, player2Score, expectedScore]) => {
    it(`should score '${expectedScore}' when player 1 has '${player1Score}' and player 2 has '${player2Score}'`, () => {
      const score = getScore(component, player1Score, player2Score);

      expect(score).toBe(expectedScore as string);
    });
  });
});
