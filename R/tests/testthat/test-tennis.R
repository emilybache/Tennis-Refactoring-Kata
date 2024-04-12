test_that("tennis_game scores are numeric", {
  expect_true(inherits(tennis_game$m_score1,"numeric"))
  expect_true(inherits(tennis_game$m_score2,"numeric"))
})
