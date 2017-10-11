import Foundation

protocol TennisGame {
    init(player1: String, player2: String)
    func wonPoint(_ playerName: String)
    var score: String? { get }
}
