mutable struct TennisGame2
    P1point::Int
	P2point::Int

	P1res::String
	P2res::String
	player1Name::String
	player2Name::String

    TennisGame2(player1Name, player2Name) = new(0, 0, "", "", player1Name, player2Name)
end

function Tenniskata.get_score(game::TennisGame2)
    score = ""
	if game.P1point == game.P2point && game.P1point < 4
		if game.P1point == 0
			score = "Love"
        end
		if game.P1point == 1
			score = "Fifteen"
        end
		if game.P1point == 2
			score = "Thirty"
        end
		score *= "-All"
    end
	if game.P1point == game.P2point && game.P1point >= 3
		score = "Deuce"
    end

	if game.P1point > 0 && game.P2point == 0
		if game.P1point == 1 
			game.P1res = "Fifteen"
        end
		if game.P1point == 2 
			game.P1res = "Thirty"
        end
		if game.P1point == 3 
			game.P1res = "Forty"
        end

		game.P2res = "Love"
		score = game.P1res * "-" * game.P2res
    end
	if game.P2point > 0 && game.P1point == 0
		if game.P2point == 1
			game.P2res = "Fifteen"
        end
		if game.P2point == 2
			game.P2res = "Thirty"
        end
		if game.P2point == 3
			game.P2res = "Forty"
        end

		game.P1res = "Love"
		score = game.P1res * "-" * game.P2res
    end

	if game.P1point > game.P2point && game.P1point < 4
		if game.P1point == 2
			game.P1res = "Thirty"
        end
		if game.P1point == 3
			game.P1res = "Forty"
        end
		if game.P2point == 1
			game.P2res = "Fifteen"
        end
		if game.P2point == 2
			game.P2res = "Thirty"
        end
		score = game.P1res * "-" * game.P2res
    end
	if game.P2point > game.P1point && game.P2point < 4
		if game.P2point == 2
			game.P2res = "Thirty"
        end
		if game.P2point == 3
			game.P2res = "Forty"
        end
		if game.P1point == 1
			game.P1res = "Fifteen"
        end
		if game.P1point == 2
			game.P1res = "Thirty"
        end
		score = game.P1res * "-" * game.P2res
    end

	if game.P1point > game.P2point && game.P2point >= 3
		score = "Advantage player1"
    end

	if game.P2point > game.P1point && game.P1point >= 3
		score = "Advantage player2"
    end

	if game.P1point >= 4 && game.P2point >= 0 && (game.P1point-game.P2point) >= 2
		score = "Win for player1"
    end
	if game.P2point >= 4 && game.P1point >= 0 && (game.P2point-game.P1point) >= 2
		score = "Win for player2"
    end
	return score
end

set_p1_score(game::TennisGame2, number::Int) = for _ = 1:number p1_score(game) end
set_p2_score(game::TennisGame2, number::Int) = for _ = 1:number p2_score(game) end

function p1_score(game::TennisGame2)
    game.P1point += 1
end

function p2_score(game::TennisGame2)
    game.P2point += 1
end

function Tenniskata.won_point(game::TennisGame2, player::String) 
	if player == "player1"
		p1_score(game)
	else
		p2_score(game)
    end
end