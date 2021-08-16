import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TennisGame} from '../TennisGame';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-tennis-game3',
  templateUrl: './tennis-game3.component.html',
  styleUrls: ['./tennis-game3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TennisGame3Component implements OnInit, TennisGame {
  private p2 = 0;
  private p1 = 0;
  private p1N = 'player1';
  private p2N = 'player2';
  public tennisGameForm = new FormGroup({
    player1Score: new FormControl(0),
    player2Score: new FormControl(0)
  });
  public overallScore = '';

  constructor() { }

  ngOnInit() {
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1 += 1;
    else
      this.p2 += 1;
  }

  getScore(): string {
    let s: string;
    if (this.p1 < 4 && this.p2 < 4 && !(this.p1 + this.p2 === 6)) {
      const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      s = p[this.p1];
      return (this.p1 === this.p2) ? s + '-All' : s + '-' + p[this.p2];
    } else {
      if (this.p1 === this.p2)
        return 'Deuce';
      s = this.p1 > this.p2 ? this.p1N : this.p2N;
      return (((this.p1 - this.p2) * (this.p1 - this.p2)) === 1) ? 'Advantage ' + s : 'Win for ' + s;
    }
  }

  onSubmit() {
    this.p1 = this.tennisGameForm.controls.player1Score.value;
    this.p2 = this.tennisGameForm.controls.player2Score.value;
    this.overallScore = this.getScore();
  }
}
