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
    let score: string = ''
    // Drow

    if (this.m_score1 === this.m_score2) {
      switch (this.m_score1) {
        case 0:
          score = 'Love-All'
          break
        case 1:
          score = 'Fifteen-All'
          break
        case 2:
          score = 'Thirty-All'
          break
        default:
          score = 'Deuce'
          break
      }
    }

    // Wins one
    else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
      score = this.calculateWinnerOrAdvantage()
    }

    // Not won yet
    else {
      score = this.nonWinningScore();
    }
    return score
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
