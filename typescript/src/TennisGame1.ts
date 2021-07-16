import { TennisGame } from './TennisGame'

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0
  private m_score2: number = 0
  private player1Name: string
  private player2Name: string

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name
    this.player2Name = player2Name
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1') this.m_score1 += 1
    else this.m_score2 += 1
  }

  getScore(): string {
    if (this.isDraw()) {
      return this.scoreWhenDraw();
    }
    if (this.oneOfTheTwoScoredForty()) {
      return this.calculateWinnerOrAdvantage()
    }

    return  this.nonWinningScore();
  }

  private scoreWhenDraw() {
    if (this.m_score1 < 3) {
      return this.getScoreName(this.m_score1) + '-All'
    } else {
      return 'Deuce'
    }
  }

  private oneOfTheTwoScoredForty() {
    return this.m_score1 >= 4 || this.m_score2 >= 4;
  }

  private isDraw() {
    return this.m_score1 === this.m_score2;
  }

  private nonWinningScore() {
    return this.getScoreName(this.m_score1) + '-' + this.getScoreName(this.m_score2);
  }

  private getScoreName(score: number) {
    switch (score) {
      case 0: return  'Love'
      case 1: return  'Fifteen'
      case 2: return  'Thirty'
      case 3: return  'Forty'
      default: return ''
    }
  }

  private calculateWinnerOrAdvantage(): string {
    const scoreDifference = Math.abs(this.m_score1 - this.m_score2)
    const winningPlayer =
      this.m_score1 > this.m_score2 ? this.player1Name : this.player2Name

    if (scoreDifference === 1) return 'Advantage ' + winningPlayer
    if (scoreDifference >= 2) return 'Win for ' + winningPlayer
  }
}
