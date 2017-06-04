import { TennisGame } from './TennisGame';


export class TennisGame2 implements TennisGame {
  P1point: number = 0;
  P2point: number = 0;

  P1res: string = '';
  P2res: string = '';

  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  getScore(): string {
    let score: string = '';
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

  wonPoint(player: string): void {
    if (player === 'player1')
      this.P1Score();
    else
      this.P2Score();
  }
}
