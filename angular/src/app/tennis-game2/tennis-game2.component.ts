import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TennisGame} from '../TennisGame';
import {FormControl, FormGroup} from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
  }

  getScore(): string {
    let score = '';
    if (this.P1point === this.P2point && this.P1point < 4) {
      if (this.P1point === 0)
        score = 'Love';
      if (this.P1point === 1)
        score = 'Fifteen';
      if (this.P1point === 2)
        score = 'Thirty';
      score += '-All';
    }
    if (this.P1point === this.P2point && this.P1point >= 3)
      score = 'Deuce';

    if (this.P1point > 0 && this.P2point === 0) {
      if (this.P1point === 1)
        this.P1res = 'Fifteen';
      if (this.P1point === 2)
        this.P1res = 'Thirty';
      if (this.P1point === 3)
        this.P1res = 'Forty';

      this.P2res = 'Love';
      score = this.P1res + '-' + this.P2res;
    }
    if (this.P2point > 0 && this.P1point === 0) {
      if (this.P2point === 1)
        this.P2res = 'Fifteen';
      if (this.P2point === 2)
        this.P2res = 'Thirty';
      if (this.P2point === 3)
        this.P2res = 'Forty';

      this.P1res = 'Love';
      score = this.P1res + '-' + this.P2res;
    }

    if (this.P1point > this.P2point && this.P1point < 4) {
      if (this.P1point === 2)
        this.P1res = 'Thirty';
      if (this.P1point === 3)
        this.P1res = 'Forty';
      if (this.P2point === 1)
        this.P2res = 'Fifteen';
      if (this.P2point === 2)
        this.P2res = 'Thirty';
      score = this.P1res + '-' + this.P2res;
    }
    if (this.P2point > this.P1point && this.P2point < 4) {
      if (this.P2point === 2)
        this.P2res = 'Thirty';
      if (this.P2point === 3)
        this.P2res = 'Forty';
      if (this.P1point === 1)
        this.P1res = 'Fifteen';
      if (this.P1point === 2)
        this.P1res = 'Thirty';
      score = this.P1res + '-' + this.P2res;
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
      score = 'Advantage player1';
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
      score = 'Advantage player2';
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
      score = 'Win for player1';
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
      score = 'Win for player2';
    }
    return score;
  }

  SetP1Score(score: number): void {

    for (let i = 0; i < score; i++) {
      this.P1Score();
    }

  }

  SetP2Score(score: number): void {

    for (let i = 0; i < score; i++) {
      this.P2Score();
    }

  }

  P1Score(): void {
    this.P1point++;
  }

  P2Score(): void {
    this.P2point++;
  }


  wonPoint(playerName: string): void {
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
