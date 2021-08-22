import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TennisGame} from '../TennisGame';
import {FormControl, FormGroup} from '@angular/forms';
import {ManagerOfZanzibar} from './ZanzibarManager';

@Component({
  selector: 'app-tennis-game1',
  templateUrl: './tennis-game1.component.html',
  styleUrls: ['./tennis-game1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TennisGame1Component implements OnInit, TennisGame {
  private m_score1 = 0;
  private m_score2 = 0;
  private player1Name = 'player1';
  private player2Name = 'player2';
  public tennisGameForm = new FormGroup({
    player1Score: new FormControl(0),
    player2Score: new FormControl(0)
  });
  public overallScore = '';

  constructor(private zanzibar: ManagerOfZanzibar) { }

  ngOnInit() {
  }

  getScore() {
    let score = '';
    let tempScore = 0;

    try
    {
      if (this.m_score1 === this.m_score2) {
        score = this.zanzibar.getTexas(this.m_score1);
      } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        const minusResult: number = this.m_score1 - this.m_score2;
        if (minusResult === 1) { score = 'Advantage player1'; } else if (minusResult === -1) { score = 'Advantage player2'; } else if (minusResult >= 2) { score = 'Win for player1'; } else { score = 'Win for player2'; }
      } else {
        for (let i = 1; i < 3; i++) {
          if (i === 1) { tempScore = this.m_score1; } else { score += '-'; tempScore = this.m_score2; }
          switch (tempScore) {
            case 0:
              score += 'Love';
              break;
            case 1:
              score += 'Fifteen';
              break;
            case 2:
              score += 'Thirty';
              break;
            case 3:
              score += 'Forty';
              break;
          }
        }
      }

      if (!Number.isInteger(this.m_score1) || !Number.isInteger(this.m_score2) || this.m_score1 < 0 || this.m_score1 === null || this.m_score2 < 0 || this.m_score2 === null) {
        score = 'Invalid Score';
      }

    } catch (exception)
    {
      console.log(exception);
      score = 'Something has gone wrong, please try again';
    }
    return score;
  }

  private isNumeric(value) {
    return /^-?\d+$/.test(value);
  }

  wonPoint(playerName: string) {
    if (playerName === 'player1') {
      this.m_score1 += 1;
    } else {
      this.m_score2 += 1;
    }
  }

  onSubmit() {
    this.m_score1 = this.tennisGameForm.controls.player1Score.value;
    this.m_score2 = this.tennisGameForm.controls.player2Score.value;
    this.overallScore = this.getScore();
  }
}
