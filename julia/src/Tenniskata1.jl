mutable struct TennisGame1
    m_score1::Int
	m_score2::Int
	player1Name::String
	player2Name::String

    TennisGame1(player1Name, player2Name) = new(0, 0, player1Name, player2Name)
end

function Tenniskata.won_point(game::TennisGame1, playerName::String)
    if playerName == "player1"
        game.m_score1 += 1
    else
        game.m_score2 += 1
    end
end

function Tenniskata.get_score(game::TennisGame1)
    score = ""
    tempScore = 0
    if game.m_score1 == game.m_score2
        if game.m_score1 == 0
			score = "Love-All"
        elseif game.m_score1 == 1
            score = "Fifteen-All"
        elseif game.m_score1 == 2
            score = "Thirty-All"
        else
            score = "Deuce"
        end
    elseif game.m_score1 >= 4 || game.m_score2 >= 4
        minusResult = game.m_score1 - game.m_score2
        if minusResult == 1
			score = "Advantage player1"
		elseif minusResult == -1
			score = "Advantage player2"
		elseif minusResult >= 2
			score = "Win for player1"
		else
			score = "Win for player2"
        end
    else
        for i = 1:2
            if i == 1 
				tempScore = game.m_score1
			else
				score *= "-"
				tempScore = game.m_score2
            end			
            if tempScore == 0
                score *= "Love"
            elseif tempScore == 1
                score *= "Fifteen"
            elseif tempScore == 2
                score *= "Thirty"
            elseif tempScore == 3
                score *= "Forty"
            end
        end
    end
    return score
end
