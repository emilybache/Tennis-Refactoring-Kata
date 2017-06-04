import { TennisGame1, TennisGame2, TennisGame3 } from '../src';
import { checkAllScores } from './utils';


describe('TennisGame', function () {
  describe('TennisGame1', function () {
    it('should correctly check all the scores for game 1', function () {
      checkAllScores(() => new TennisGame1('player1', 'player2'));
    });
  });

  describe('TennisGame2', function () {
    it('should correctly check all the scores for game 2', function () {
      checkAllScores(() => new TennisGame2('player1', 'player2'));
    });
  });

  describe('TennisGame3', function () {
    it('should correctly check all the scores for game 3', function () {
      checkAllScores(() => new TennisGame3('player1', 'player2'));
    });
  });
});
