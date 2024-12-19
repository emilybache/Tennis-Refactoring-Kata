test_that("tennis_game scores are numeric", {
  expect_true(inherits(tennis_game$m_score1,"numeric"))
  expect_true(inherits(tennis_game$m_score2,"numeric"))
})

test_that("tennis_game scores are OK", {

  test_cases <- list(
    list(m_score1 = 0, m_score2 = 0, score = "Love-All", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 1, m_score2 = 1, score = "Fifteen-All", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 2, m_score2 = 2, score = "Thirty-All", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 3, m_score2 = 3, score = "Deuce", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 4, m_score2 = 4, score = "Deuce", player1Name = 'player1', player2Name = 'player2'),
    
    list(m_score1 = 1, m_score2 = 0, score = "Fifteen-Love", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 0, m_score2 = 1, score = "Love-Fifteen", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 2, m_score2 = 0, score = "Thirty-Love", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 0, m_score2 = 2, score = "Love-Thirty", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 3, m_score2 = 0, score = "Forty-Love", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 0, m_score2 = 3, score = "Love-Forty", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 4, m_score2 = 0, score = "Win for player1", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 0, m_score2 = 4, score = "Win for player2", player1Name = 'player1', player2Name = 'player2'),
    
    list(m_score1 = 2, m_score2 = 1, score = "Thirty-Fifteen", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 1, m_score2 = 2, score = "Fifteen-Thirty", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 3, m_score2 = 1, score = "Forty-Fifteen", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 1, m_score2 = 3, score = "Fifteen-Forty", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 4, m_score2 = 1, score = "Win for player1", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 1, m_score2 = 4, score = "Win for player2", player1Name = 'player1', player2Name = 'player2'),
    
    list(m_score1 = 3, m_score2 = 2, score = "Forty-Thirty", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 2, m_score2 = 3, score = "Thirty-Forty", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 4, m_score2 = 2, score = "Win for player1", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 2, m_score2 = 4, score = "Win for player2", player1Name = 'player1', player2Name = 'player2'),
    
    list(m_score1 = 4, m_score2 = 3, score = "Advantage player1", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 3, m_score2 = 4, score = "Advantage player2", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 5, m_score2 = 4, score = "Advantage player1", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 4, m_score2 = 5, score = "Advantage player2", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 15, m_score2 = 14, score = "Advantage player1", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 14, m_score2 = 15, score = "Advantage player2", player1Name = 'player1', player2Name = 'player2'),
    
    list(m_score1 = 6, m_score2 = 4, score = "Win for player1", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 4, m_score2 = 6, score = "Win for player2", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 16, m_score2 = 14, score = "Win for player1", player1Name = 'player1', player2Name = 'player2'),
    list(m_score1 = 14, m_score2 = 16, score = "Win for player2", player1Name = 'player1', player2Name = 'player2')
  )
  
for (game in test_cases){
    expect_equal(get_score(game),game$score )
}
  
})


