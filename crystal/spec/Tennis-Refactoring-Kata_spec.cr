require "./spec_helper"

TEST_CASES = [
   [0, 0, "Love-All", "player1", "player2"],
   [1, 1, "Fifteen-All", "player1", "player2"],
   [2, 2, "Thirty-All", "player1", "player2"],
   [3, 3, "Deuce", "player1", "player2"],
   [4, 4, "Deuce", "player1", "player2"],
   
   [1, 0, "Fifteen-Love", "player1", "player2"],
   [0, 1, "Love-Fifteen", "player1", "player2"],
   [2, 0, "Thirty-Love", "player1", "player2"],
   [0, 2, "Love-Thirty", "player1", "player2"],
   [3, 0, "Forty-Love", "player1", "player2"],
   [0, 3, "Love-Forty", "player1", "player2"],
   [4, 0, "Win for player1", "player1", "player2"],
   [0, 4, "Win for player2", "player1", "player2"],
   
   [2, 1, "Thirty-Fifteen", "player1", "player2"],
   [1, 2, "Fifteen-Thirty", "player1", "player2"],
   [3, 1, "Forty-Fifteen", "player1", "player2"],
   [1, 3, "Fifteen-Forty", "player1", "player2"],
   [4, 1, "Win for player1", "player1", "player2"],
   [1, 4, "Win for player2", "player1", "player2"],
   
   [3, 2, "Forty-Thirty", "player1", "player2"],
   [2, 3, "Thirty-Forty", "player1", "player2"],
   [4, 2, "Win for player1", "player1", "player2"],
   [2, 4, "Win for player2", "player1", "player2"],
   
   [4, 3, "Advantage player1", "player1", "player2"],
   [3, 4, "Advantage player2", "player1", "player2"],
   [5, 4, "Advantage player1", "player1", "player2"],
   [4, 5, "Advantage player2", "player1", "player2"],
   [15, 14, "Advantage player1", "player1", "player2"],
   [14, 15, "Advantage player2", "player1", "player2"],
   
   [6, 4, "Win for player1", "player1", "player2"], 
   [4, 6, "Win for player2", "player1", "player2"], 
   [16, 14, "Win for player1", "player1", "player2"], 
   [14, 16, "Win for player2", "player1", "player2"], 

   [6, 4, "Win for player1", "player1", "player2"],
   [4, 6, "Win for player2", "player1", "player2"], 
   [6, 5, "Advantage player1", "player1", "player2"],
   [5, 6, "Advantage player2", "player1", "player2"] 
]

describe TennisGame1 do
  it "TennisGame1 works" do
    TEST_CASES.each do |testcase|
      p1Points, p2Points, score, p1Name, p2Name = testcase
      p1Name = p1Name.as(String)
      p2Name = p2Name.as(String)
      p1Points = p1Points.as(Int32)
      p2Points = p2Points.as(Int32)

      game = TennisGame1.new(p1Name, p2Name)
      (0..[p1Points, p2Points].max).each do |i|
        game.won_point(p1Name) if i < p1Points
        game.won_point(p2Name) if i < p2Points
      end
      score.should eq(game.score())
    end
  end

  it "TennisGame2 works" do
    TEST_CASES.each do |testcase|
      p1Points, p2Points, score, p1Name, p2Name = testcase
      p1Name = p1Name.as(String)
      p2Name = p2Name.as(String)
      p1Points = p1Points.as(Int32)
      p2Points = p2Points.as(Int32)

      game = TennisGame2.new(p1Name, p2Name)
      (0..[p1Points, p2Points].max).each do |i|
        game.won_point(p1Name) if i < p1Points
        game.won_point(p2Name) if i < p2Points
      end
      score.should eq(game.score())
    end
  end

  it "TennisGame3 works" do
    TEST_CASES.each do |testcase|
      p1Points, p2Points, score, p1Name, p2Name = testcase
      p1Name = p1Name.as(String)
      p2Name = p2Name.as(String)
      p1Points = p1Points.as(Int32)
      p2Points = p2Points.as(Int32)

      game = TennisGame3.new(p1Name, p2Name)
      (0..[p1Points, p2Points].max).each do |i|
        game.won_point(p1Name) if i < p1Points
        game.won_point(p2Name) if i < p2Points
      end
      score.should eq(game.score())
    end
  end
end
