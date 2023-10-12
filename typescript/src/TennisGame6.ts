import { TennisGame } from './TennisGame';

export class TennisGame6 implements TennisGame {
  private player2Name : string;
  private player1Name : string;
  private player1Score: number;
  private player2Score: number;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
    this.player1Score = 0;
    this.player2Score = 0;
  }

  getScore(): string {
    let result: string;

    if (this.player1Score == this.player2Score)
    {
      // tie score
      let tieScore: string;
      switch (this.player1Score)
      {
        case 0:
          tieScore = "Love-All";
          break;
        case 1:
          tieScore = "Fifteen-All";
          break;
        case 2:
          tieScore = "Thirty-All";
          break;
        default:
          tieScore = "Deuce";
          break;
      }

      result = tieScore;
    }
    else if (this.player1Score >= 4 || this.player2Score >= 4)
    {
      // end-game score
      let endGameScore: string;

      if (this.player1Score - this.player2Score == 1) {
        endGameScore = "Advantage " + this.player1Name;
      } else if (this.player1Score - this.player2Score == -1) {
        endGameScore = "Advantage " + this.player2Name;
      } else if (this.player1Score - this.player2Score >= 2) {
        endGameScore = "Win for " + this.player1Name;
      } else {
        endGameScore = "Win for " + this.player2Name;
      }

      result = endGameScore;
    }
    else
    {
      // regular score
      let regularScore: string;

      let score1: string;

      switch (this.player1Score) {
        case 0:
          score1 = "Love";
          break;
        case 1:
          score1 = "Fifteen";
          break;
        case 2:
          score1 = "Thirty";
          break;
        default:
          score1 = "Forty";
          break;
      }

      let score2: string;
      switch (this.player2Score) {
        case 0:
          score2 = "Love";
          break;
        case 1:
          score2 = "Fifteen";
          break;
        case 2:
          score2 = "Thirty";
          break;
        default:
          score2 = "Forty";
          break;
      }

      regularScore = score1 + "-" + score2;

      result = regularScore;
    }

    return result;

  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }
}
