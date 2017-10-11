import Foundation

class TennisGame2: TennisGame {
    private let player1Name: String
    private let player2Name: String
    private var P1point: Int = 0
    private var P1res: String = ""
    private var P2point: Int = 0
    private var P2res: String = ""

    required init(player1: String, player2: String) {
        player1Name = player1
        player2Name = player2
    }

    var score: String? {
        var score = ""
        if P1point == P2point && P1point < 3
        {
            if P1point==0
            { score = "Love" }
            if P1point==1
            { score = "Fifteen" }
            if P1point==2
            { score = "Thirty" }
            score = "\(score)-All"
        }
        if P1point==P2point && P1point>2
        { score = "Deuce" }

        if P1point > 0 && P2point==0
        {
            if (P1point==1)
            { P1res = "Fifteen" }
            if (P1point==2)
            { P1res = "Thirty" }
            if (P1point==3)
            { P1res = "Forty" }
            
            P2res = "Love"
            score = "\(P1res)-\(P2res)"
        }
        if P2point > 0 && P1point==0
        {
            if (P2point==1)
            { P2res = "Fifteen" }
            if (P2point==2)
            { P2res = "Thirty" }
            if (P2point==3)
            { P2res = "Forty" }
            
            P1res = "Love"
            score = "\(P1res)-\(P2res)"
        }
        
        if (P1point>P2point && P1point < 4)
        {
            if (P1point==2)
            { P1res="Thirty" }
            if (P1point==3)
            { P1res="Forty" }
            if (P2point==1)
            { P2res="Fifteen" }
            if (P2point==2)
            { P2res="Thirty" }
            score = "\(P1res)-\(P2res)"
        }
        if P2point>P1point && P2point < 4
        {
            if (P2point==2)
            { P2res="Thirty" }
            if (P2point==3)
            { P2res="Forty" }
            if (P1point==1)
            { P1res="Fifteen" }
            if (P1point==2)
            { P1res="Thirty" }
            score = "\(P1res)-\(P2res)"
        }
        
        if P1point > P2point && P2point >= 3
        {
            score = "Advantage player1"
        }
        
        if P2point > P1point && P1point >= 3
        {
            score = "Advantage player2"
        }
        
        if P1point>=4 && P2point>=0 && (P1point-P2point)>=2
        {
            score = "Win for player1"
        }
        if P2point>=4 && P1point>=0 && (P2point-P1point)>=2
        {
            score = "Win for player2"
        }
        return score
    }
    
   private func setP1Score(number: Int) {
        
        for _ in 0..<number {
            P1Score()
        }
        
    }

    private func setP2Score(number: Int) {
        
        for _ in 0..<number {
            P2Score()
        }
        
    }
    
    private func P1Score() {
        P1point+=1
    }
    
    private func P2Score() {
        P2point+=1
    }
    
    func wonPoint(_ playerName: String) {
        if playerName == "player1" {
            P1Score()
        } else {
            P2Score()
        }
    }
}
