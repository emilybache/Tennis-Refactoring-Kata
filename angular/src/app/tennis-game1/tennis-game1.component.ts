import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TennisGame} from '../TennisGame';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ManagerOfZanzibar} from './ZanzibarManager';
import {debounceTime} from 'rxjs/operators';
import {DeBouncer} from '../debouncer.service';

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
    player1Score: new FormControl(0, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$'), Validators.max(100)]),
    player2Score: new FormControl(0, [Validators.required, Validators.min(0), Validators.pattern('^[0-9]*$'), Validators.max(100)])
  });
  public overallScore = '';

  constructor(
    private zanzibar: ManagerOfZanzibar,
    private deBouncer: DeBouncer,
  ) { }

  ngOnInit() {
    const player1Score = this.tennisGameForm.get('player1Score');
    player1Score.valueChanges.pipe(this.deBouncer.debounceTime(3000)).subscribe(() => player1Score.markAsTouched());
    const player2Score = this.tennisGameForm.get('player2Score');
    player2Score.valueChanges.pipe(this.deBouncer.debounceTime(3000)).subscribe(() => player2Score.markAsTouched());
  }

  getScore() {
    let score = '';
    let tempScore = 0;

    try
    {
      score = this.zanzibar.getTexas(this.m_score1, this.m_score2);

      if (!Number.isInteger(this.m_score1) || !Number.isInteger(this.m_score2) || this.m_score1 < 0 || this.m_score1 === null || this.m_score2 < 0 || this.m_score2 === null || this.m_score1 > 100 || this.m_score2 > 100) {
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
