import Foundation

class TennisGame1: TennisGame {
    private let player1: String
    private let player2: String
    private var score1: Int
    private var score2: Int
    
    required init(player1: String, player2: String) {
        self.player1 = player1
        self.player2 = player2
        self.score1 = 0
        self.score2 = 0
    }

    func wonPoint(_ playerName: String) {
        if playerName == "player1" {
            score1 += 1
        } else {
            score2 += 1
        }
    }
    
    var score: String? {
        var score = ""
        var tempScore = 0
        if score1 == score2
        {
            switch score1
            {
            case 0:
                score = "Love-All"

            case 1:
                score = "Fifteen-All"

            case 2:
                score = "Thirty-All"

            default:
                score = "Deuce"
                
            }
        }
        else if score1>=4 || score2>=4
        {
            let minusResult = score1-score2
            if minusResult==1 { score = "Advantage player1" }
            else if minusResult  == -1 { score = "Advantage player2" }
            else if minusResult>=2 { score = "Win for player1" }
            else { score = "Win for player2" }
        }
        else
        {
            for i in 1..<3
            {
                if i==1 { tempScore = score1 }
                else { score = "\(score)-"; tempScore = score2 }
                switch tempScore
                {
                case 0:
                    score = "\(score)Love"

                case 1:
                    score = "\(score)Fifteen"

                case 2:
                    score = "\(score)Thirty"

                case 3:
                    score = "\(score)Forty"

                default:
                    break

                }
            }
        }
        return score
    }
    
    
}
