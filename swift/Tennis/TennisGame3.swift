import Foundation

class TennisGame3: TennisGame {
    private var p1: Int
    private var p2: Int
    private var p1N: String
    private var p2N: String
    
    required init(player1: String, player2: String) {
        p1N = player1
        p2N = player2
        p1 = 0
        p2 = 0
    }
    
    var score: String? {
        var s: String
        if (p1 < 4 && p2 < 4) && (p1 + p2 < 6) {
            let p = ["Love", "Fifteen", "Thirty", "Forty"]
            s = p[p1];
            return (p1 == p2) ? "\(s)-All" : "\(s)-\(p[p2])"
        } else {
            if (p1 == p2)
            { return "Deuce" }
            s = p1 > p2 ? p1N : p2N;
            return ((p1-p2)*(p1-p2) == 1) ? "Advantage \(s)" : "Win for \(s)"
        }
    }
    
    func wonPoint(_ playerName: String) {
        if playerName == "player1" {
            p1 += 1
        } else {
            p2 += 1
        }
    }

    
}
