import XCTest

let parameters = [
    (0, 0, "Love-All"),
    (1, 1, "Fifteen-All"),
    (2, 2, "Thirty-All"),
    (3, 3, "Deuce"),
    (4, 4, "Deuce"),
    
    (1, 0, "Fifteen-Love"),
    (0, 1, "Love-Fifteen"),
    (2, 0, "Thirty-Love"),
    (0, 2, "Love-Thirty"),
    (3, 0, "Forty-Love"),
    (0, 3, "Love-Forty"),
    (4, 0, "Win for player1"),
    (0, 4, "Win for player2"),
    
    (2, 1, "Thirty-Fifteen"),
    (1, 2, "Fifteen-Thirty"),
    (3, 1, "Forty-Fifteen"),
    (1, 3, "Fifteen-Forty"),
    (4, 1, "Win for player1"),
    (1, 4, "Win for player2"),
    
    (3, 2, "Forty-Thirty"),
    (2, 3, "Thirty-Forty"),
    (4, 2, "Win for player1"),
    (2, 4, "Win for player2"),
    
    (4, 3, "Advantage player1"),
    (3, 4, "Advantage player2"),
    (5, 4, "Advantage player1"),
    (4, 5, "Advantage player2"),
    (15, 14, "Advantage player1"),
    (14, 15, "Advantage player2"),
    
    (6, 4, "Win for player1"),
    (4, 6, "Win for player2"),
    (16, 14, "Win for player1"),
    (14, 16, "Win for player2")
]

class TennisTests: XCTestCase {
    var player1Score: Int!
    var player2Score: Int!
    var expectedScore: String!
}

// MARK: Suite
extension TennisTests {
    override open class var defaultTestSuite: XCTestSuite {
        let testSuite = XCTestSuite(name: NSStringFromClass(self))
        
        for scores in parameters {
            addTest(forEachInvocationWith: scores, to: testSuite)
        }
        
        return testSuite
    }
    
    private class func addTest(forEachInvocationWith scores: (Int, Int, String), to testSuite: XCTestSuite) {
        for testInvocation in testInvocations {
            let test = TennisTests(invocation: testInvocation)
            test.player1Score = scores.0
            test.player2Score = scores.1
            test.expectedScore = scores.2
            testSuite.addTest(test)
        }
    }
}

// MARK: Invocations
extension TennisTests {
    func testAllScoresTennisGame1() {
        instantiateAndCheckGame(class: TennisGame1.self)
    }
    
    func testAllScoresTennisGame2() {
        instantiateAndCheckGame(class: TennisGame2.self)
    }

    func testAllScoresTennisGame3() {
        instantiateAndCheckGame(class: TennisGame3.self)
    }

    private func instantiateAndCheckGame(class aClass: TennisGame.Type) {
        let game = instantiateGame(class: aClass)
        checkAllScores(for: game)
    }
    
    private func instantiateGame(class aClass: TennisGame.Type) -> TennisGame {
        let instance = aClass.init(player1: "player1", player2: "player2")
        return instance
    }
    
    private func checkAllScores(for game: TennisGame) {
        print("\(player1Score!), \(player2Score!), \(expectedScore!)")
        let highestScore = max(player1Score, player2Score);
        for i in 0..<highestScore {
            if i < player1Score {
                game.wonPoint("player1")
            }
            if i < player2Score {
                game.wonPoint("player2")
            }
        }
        XCTAssertEqual(game.score, expectedScore)
    }
}
