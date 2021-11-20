include("../src/Tenniskata.jl")
include("../src/Tenniskata1.jl")
include("../src/Tenniskata2.jl")
include("../src/Tenniskata3.jl")

using Test

struct TestDataSample
	player1Score::Int
	player2Score::Int
	expectedScore::String
end

testData = [
    TestDataSample(0, 0, "Love-All"),
	TestDataSample(1, 1, "Fifteen-All"),
	TestDataSample(2, 2, "Thirty-All"),
	TestDataSample(3, 3, "Deuce"),
	TestDataSample(4, 4, "Deuce"),

	TestDataSample(1, 0, "Fifteen-Love"),
	TestDataSample(0, 1, "Love-Fifteen"),
	TestDataSample(2, 0, "Thirty-Love"),
	TestDataSample(0, 2, "Love-Thirty"),
	TestDataSample(3, 0, "Forty-Love"),
	TestDataSample(0, 3, "Love-Forty"),
	TestDataSample(4, 0, "Win for player1"),
	TestDataSample(0, 4, "Win for player2"),

	TestDataSample(2, 1, "Thirty-Fifteen"),
	TestDataSample(1, 2, "Fifteen-Thirty"),
	TestDataSample(3, 1, "Forty-Fifteen"),
	TestDataSample(1, 3, "Fifteen-Forty"),
	TestDataSample(4, 1, "Win for player1"),
	TestDataSample(1, 4, "Win for player2"),

	TestDataSample(3, 2, "Forty-Thirty"),
	TestDataSample(2, 3, "Thirty-Forty"),
	TestDataSample(4, 2, "Win for player1"),
	TestDataSample(2, 4, "Win for player2"),

	TestDataSample(4, 3, "Advantage player1"),
	TestDataSample(3, 4, "Advantage player2"),
	TestDataSample(5, 4, "Advantage player1"),
	TestDataSample(4, 5, "Advantage player2"),
	TestDataSample(15, 14, "Advantage player1"),
	TestDataSample(14, 15, "Advantage player2"),

	TestDataSample(6, 4, "Win for player1"),
	TestDataSample(4, 6, "Win for player2"),
	TestDataSample(16, 14, "Win for player1"),
	TestDataSample(14, 16, "Win for player2")
]

function setScore(game, sample::TestDataSample)
    highestScore = max(sample.player1Score, sample.player2Score)

    for i = 0:highestScore
        if i < sample.player1Score
            Tenniskata.won_point(game, "player1")
        end

        if i < sample.player2Score
            Tenniskata.won_point(game, "player2")
        end
    end

    @test Tenniskata.get_score(game) == sample.expectedScore
end

@testset "Tenniskata1" begin
    @testset "$sample" for sample in testData
        setScore(TennisGame1("player1", "player2"), sample)
    end
end

@testset "Tenniskata2" begin
    @testset "$sample" for sample in testData
        setScore(TennisGame2("player1", "player2"), sample)
    end
end

@testset "Tenniskata3" begin
    @testset "$sample" for sample in testData
        setScore(TennisGame3("player1", "player2"), sample)
    end
end