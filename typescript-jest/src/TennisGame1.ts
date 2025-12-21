import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;

  constructor(private player1Name: string, private player2Name: string) { }

  wonPoint(playerName: string): void {
    if (playerName === this.player1Name)
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  getScore(): string {
    if (this.m_score1 === this.m_score2) {
      return this.getEqualScore();
    }

    return this.getNonEqualScore();
  }

  private getNonEqualScore() {
    if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      return this.determineMatchOutcome();
    }

    return this.calculateScoreText();
  }

  private calculateScoreText() {
    let score: string = '';
    let tempScore: number = 0;
    for (let i = 1; i < 3; i++) {
      ({ tempScore, score } = this.appendScoreForPlayer(i, tempScore, score));
      score = this.convertScoreToText(tempScore, score);
    }
    return score;
  }

  private appendScoreForPlayer(i: number, tempScore: number, score: string) {
    if (i === 1) tempScore = this.m_score1;
    else { score += '-'; tempScore = this.m_score2; }
    return { tempScore, score };
  }

  private convertScoreToText(tempScore: number, score: string) {
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
    return score;
  }

  private determineMatchOutcome() {
    let score: string = '';
    const minusResult: number = this.m_score1 - this.m_score2;
    if (minusResult === 1) score = `Advantage ${this.player1Name}`;
    else if (minusResult === -1) score = `Advantage ${this.player2Name}`;
    else if (minusResult >= 2) score = `Win for ${this.player1Name}`;
    else score = `Win for ${this.player2Name}`;
    return score;
  }

  private getEqualScore() {
    let score: string = '';
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
    return score;
  }
}
