import { TennisGame } from './TennisGame'

class Player {
  constructor(public name: string, public score: number = 0) {}
}

export class TennisGame1 implements TennisGame {
  private player1: Player
  private player2: Player

  constructor(player1Name: string, player2Name: string) {
    this.player1 = new Player(player1Name)
    this.player2 = new Player(player2Name)
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1') this.player1.score += 1
    else this.player2.score += 1
  }

  getScore(): string {
    if (this.isDraw()) {
      return this.scoreWhenDraw()
    }
    if (this.oneOfTheTwoScoredForty()) {
      return this.calculateWinnerOrAdvantage()
    }

    return this.nonWinningScore()
  }

  private scoreWhenDraw() {
    if (this.player1.score < 3) {
      return this.getScoreName(this.player1.score) + '-All'
    } else {
      return 'Deuce'
    }
  }

  private oneOfTheTwoScoredForty() {
    return this.player1.score >= 4 || this.player2.score >= 4
  }

  private isDraw() {
    return this.player1.score === this.player2.score
  }

  private nonWinningScore() {
    return (
      this.getScoreName(this.player1.score) +
      '-' +
      this.getScoreName(this.player2.score)
    )
  }

  private getScoreName(score: number) {
    switch (score) {
      case 0:
        return 'Love'
      case 1:
        return 'Fifteen'
      case 2:
        return 'Thirty'
      case 3:
        return 'Forty'
      default:
        return ''
    }
  }

  private calculateWinnerOrAdvantage(): string {
    const scoreDifference = Math.abs(this.player1.score - this.player2.score)
    const winningPlayer =
      this.player1.score > this.player2.score ? this.player1 : this.player2

    if (scoreDifference === 1) return 'Advantage ' + winningPlayer.name
    if (scoreDifference >= 2) return 'Win for ' + winningPlayer.name
  }
}
