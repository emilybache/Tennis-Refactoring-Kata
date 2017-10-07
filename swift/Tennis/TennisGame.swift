//
//  TennisGame.swift
//  TennisTests
//
//  Created by Test on 07/10/2017.
//

import Foundation

protocol TennisGame {
    init(player1: String, player2: String)
    func wonPoint(_ playerName: String)
    var score: String? { get }
}
