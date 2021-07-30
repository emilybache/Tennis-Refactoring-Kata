import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisGame3Component } from './tennis-game3.component';
import {expectedScores, getScore} from "../../test/testHelper";

describe('TennisGame3Component', () => {
  let component: TennisGame3Component;
  let fixture: ComponentFixture<TennisGame3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisGame3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisGame3Component);
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
