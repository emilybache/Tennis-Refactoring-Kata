import { Component, OnInit } from '@angular/core';
import {TennisGame} from '../TennisGame';

@Component({
  selector: 'app-tennis-game1',
  templateUrl: './tennis-game1.component.html',
  styleUrls: ['./tennis-game1.component.scss']
})
export class TennisGame1Component implements OnInit, TennisGame {
  private m_score1 = 0;
  private m_score2 = 0;
  private player1Name = 'player1';
  private player2Name = 'player2';

  constructor() { }

  ngOnInit() {
  }

  getScore(): string {
    let score = '';
    let tempScore = 0;
    if (this.m_score1 === this.m_score2) {
      switch (this.m_score1) {
        case 0:
          score = 'Love-All';
          break;
        case 1:
          score = 'Fifteen-All';
          break;
        case 2:
          score = 'Thirty-All';
          break;
        default:
          score = 'Deuce';
          break;

      }
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
    return score;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1') {
      this.m_score1 += 1;
    } else {
      this.m_score2 += 1;
    }
  }

}
