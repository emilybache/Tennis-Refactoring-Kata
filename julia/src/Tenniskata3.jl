mutable struct TennisGame3
    p2::Int
	p1::Int
	p1N::String
	p2N::String

    TennisGame3(p1N, p2N) = new(0, 0, p1N, p2N)
end

function Tenniskata.get_score(game::TennisGame3)
	if game.p1 < 4 && game.p2 < 4 && !(game.p1+game.p2 == 6)
		p = Dict(0 => "Love", 1 => "Fifteen", 2 => "Thirty", 3 => "Forty")
		s = p[game.p1]
		if game.p1 == game.p2
			return s * "-All"
        end
		return s * "-" * p[game.p2]
	else
		if game.p1 == game.p2
			return "Deuce"
        end
		if game.p1 > game.p2
			s = game.p1N
        else
			s = game.p2N
        end
		if (game.p1-game.p2)*(game.p1-game.p2) == 1
			return "Advantage " * s
        end
		return "Win for " * s
    end
end

function Tenniskata.won_point(game::TennisGame3, playerName::String)
	if playerName == "player1"
		game.p1 += 1
	else
		game.p2 += 1
    end
end