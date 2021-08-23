import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TennisGame} from '../TennisGame';
import {FormControl, FormGroup} from '@angular/forms';
import {SevenStagesOfNamingService} from './SevenStagesOfNamingService';

@Component({
  selector: 'app-tennis-game2',
  templateUrl: './tennis-game2.component.html',
  styleUrls: ['./tennis-game2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TennisGame2Component implements OnInit, TennisGame {
  P1point = 0;
  P2point = 0;
  P1res = '';
  P2res = '';
  private player1Name = 'player1';
  private player2Name = 'player2';
  public tennisGameForm = new FormGroup({
    player1Score: new FormControl(0),
    player2Score: new FormControl(0)
  });
  public overallScore = '';

  constructor(private sevenStagesOfNamingService: SevenStagesOfNamingService) { }

  ngOnInit() {
  }

  getScore() {
    let score = '';
    try {
      console.log(this.P1point);
      if (!Number.isInteger(this.P1point) || !Number.isInteger(this.P2point) || this.P1point === null || this.P1point < 0 || this.P2point < 0 || this.P2point === null) {
        return 'Invalid Score';
      }
      score = this.sevenStagesOfNamingService.getAppleSauce(this.P1point, this.P2point, this.P1res, this.P2res);
    }
    catch (x){
      score = 'Something has gone wrong, please try again';
    }

    return score;
  }

  SetP1Score(score: number) {

    for (let i = 0; i < score; i++) {
      this.P1Score();
    }

  }

  SetP2Score(score: number) {

    for (let i = 0; i < score; i++) {
      this.P2Score();
    }

  }

  P1Score() {
    this.P1point++;
  }

  P2Score() {
    this.P2point++;
  }


  wonPoint(playerName: string) {
    if (playerName === 'player1')
      this.P1Score();
    else
      this.P2Score();
  }

  onSubmit() {
    this.P1point = this.tennisGameForm.controls.player1Score.value;
    this.P2point = this.tennisGameForm.controls.player2Score.value;
    this.overallScore = this.getScore();
  }
}
