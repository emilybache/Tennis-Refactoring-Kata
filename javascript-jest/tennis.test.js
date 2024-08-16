'use strict';

var each = require("jest-each").default;
var getScore1 = require('./tennis1');
var getScore2 = require('./tennis2');
var getScore3 = require('./tennis3');
var getScore4 = require('./tennis4');
var getScore5 = require('./tennis5');
var getScore6 = require('./tennis6');
var getScore7 = require('./tennis7');

var allScores = [
  [0, 0, "Love-All"],
  [1, 1, "Fifteen-All"],
  [2, 2, "Thirty-All"],
  [3, 3, "Deuce"],
  [4, 4, "Deuce"],

  [1, 0, "Fifteen-Love"],
  [0, 1, "Love-Fifteen"],
  [2, 0, "Thirty-Love"],
  [0, 2, "Love-Thirty"],
  [3, 0, "Forty-Love"],
  [0, 3, "Love-Forty"],
  [4, 0, "Win for player1"],
  [0, 4, "Win for player2"],

  [2, 1, "Thirty-Fifteen"],
  [1, 2, "Fifteen-Thirty"],
  [3, 1, "Forty-Fifteen"],
  [1, 3, "Fifteen-Forty"],
  [4, 1, "Win for player1"],
  [1, 4, "Win for player2"],

  [3, 2, "Forty-Thirty"],
  [2, 3, "Thirty-Forty"],
  [4, 2, "Win for player1"],
  [2, 4, "Win for player2"],

  [4, 3, "Advantage player1"],
  [3, 4, "Advantage player2"],
  [5, 4, "Advantage player1"],
  [4, 5, "Advantage player2"],
  [15, 14, "Advantage player1"],
  [14, 15, "Advantage player2"],

  [6, 4, "Win for player1"],
  [4, 6, "Win for player2"],
  [16, 14, "Win for player1"],
  [14, 16, "Win for player2"]
];

describe('getScore1', function() {
  each(allScores).it("when the points are %s:%s is %s", function(p1, p2, expected) {
    expect(getScore1(p1, p2)).toEqual(expected);
  });
});

describe('getScore2', function() {
  each(allScores).it("when the points are %s:%s is %s", function(p1, p2, expected) {
    expect(getScore2(p1, p2)).toEqual(expected);
  });
});

describe('getScore3', function() {
  each(allScores).it("when the points are %s:%s is %s", function(p1, p2, expected) {
    expect(getScore3(p1, p2)).toEqual(expected);
  });
});

describe('getScore4', function() {
  each(allScores).it("when the points are %s:%s is %s", function(p1, p2, expected) {
    expect(getScore4(p1, p2)).toEqual(expected);
  });
});

describe('getScore5', function() {
  each(allScores).it("when the points are %s:%s is %s", function(p1, p2, expected) {
    expect(getScore5(p1, p2)).toEqual(expected);
  });
});

describe('getScore6', function() {
  each(allScores).it("when the points are %s:%s is %s", function(p1, p2, expected) {
    expect(getScore6(p1, p2)).toEqual(expected);
  });
});

describe('getScore7', function() {
  each(allScores).it("when the points are %s:%s is %s", function(p1, p2, expected) {
    expect(getScore7(p1, p2)).toEqual("Current score: " + expected + ", enjoy your game!");
  });
});
