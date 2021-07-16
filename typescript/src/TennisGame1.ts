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
    let tempScore: number = 0

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
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.m_score1
        else {
          score += '-'
          tempScore = this.m_score2
        }
        switch (tempScore) {
          case 0:
            score += 'Love'
            break
          case 1:
            score += 'Fifteen'
            break
          case 2:
            score += 'Thirty'
            break
          case 3:
            score += 'Forty'
            break
        }
      }
    }
    return score
  }

  private calculateWinnerOrAdvantage(): string {
    const scoreDifference = Math.abs(this.m_score1 - this.m_score2)
    const winningPlayer =
      this.m_score1 > this.m_score2 ? this.player1Name : this.player2Name

    if (scoreDifference === 1) return 'Advantage ' + winningPlayer
    if (scoreDifference >= 2) return 'Win for ' + winningPlayer
  }
}
