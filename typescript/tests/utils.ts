import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';
import { TennisGame } from '../src';


let scores: Array<[number, number, string]> = [];


export function checkAllScores(tennisGameGetter: () => TennisGame) {
  getAllScores().forEach(([player1Score, player2Score, expectedScore]) => {
    checkScore(tennisGameGetter(), player1Score, player2Score, expectedScore);
  });
}


export function checkScore(game: TennisGame, player1Score: number, player2Score: number, expectedScore: string): void {
  const highestScore: number = Math.max(player1Score, player2Score);
  for (let i = 0; i < highestScore; i++) {
    if (i < player1Score) {
      game.wonPoint('player1');
    }
    if (i < player2Score) {
      game.wonPoint('player2');
    }
  }

  expect(game.getScore()).to.be.equals(expectedScore);
}


export function getAllScores(): Array<[number, number, string]> {
  if (!scores.length) {
    const scoreData = fs.readFileSync(path.resolve(__dirname, 'scores.json')).toString();

    try {
      scores = JSON.parse(scoreData);
    } catch (err) {
      throw new Error(`There was an error parsing the scores: "${err.message}"`);
    }
  }

  return JSON.parse(JSON.stringify(scores));
}
