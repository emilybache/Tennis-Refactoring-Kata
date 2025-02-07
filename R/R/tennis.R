#' Defaut tennis game
#'
#' @export
tennis_game <-
  list(
    m_score1 = 0,
    m_score2 = 0 ,
    player1Name = "player1",
    player2Name = "player2"
  )


#' playerName won a point
#'
#' @param tennis_game a tennis_game
#' @param playerName player name as string
#'
#' @return a tennis_game
#' @export
#'
#' @examples
#'
#' tennis_game |>
#'  won_point(playerName = "player1")

won_point <- function(tennis_game, playerName) {
  if (playerName ==  "player1") {
    tennis_game$m_score1 <- tennis_game$m_score1 + 1
  } else{
    tennis_game$m_score2 <- tennis_game$m_score2 + 1
  }
  tennis_game
}

#' get_score
#'
#' @param tennis_game a tennis_game
#'
#' @return a string
#' @export
#'
#' @examples
#' tennis_game |>
#' won_point(playerName = "player1") |>
#' won_point(playerName = "player2") |>
#' get_score()
get_score <- function(tennis_game){

  score <- ""
  tempScore <- 0

  if (tennis_game$m_score1 == tennis_game$m_score2) {
    score <- "Deuce"
    if (tennis_game$m_score1 == "0") {      score <-  "Love-All"    }
    if (tennis_game$m_score1 == "1") {      score <- "Fifteen-All"    }
    if (tennis_game$m_score1 == "2") {      score <- "Thirty-All"    }
  } else if (tennis_game$m_score1 >= 4 || tennis_game$m_score2 >= 4) {
    minusResult <- tennis_game$m_score1 - tennis_game$m_score2
    if (minusResult == 1) { score <- "Advantage player1" }
    else if (minusResult == -1) { score <- "Advantage player2" }
    else if (minusResult >= 2) { score <- "Win for player1" }
    else { score <- "Win for player2" }
  } else {
    # browser()
    for (i in 1:2) {
      if (i == 1) {
        tempScore <- tennis_game$m_score1
      } else {
        score <- paste0(score, "-")
        tempScore <- tennis_game$m_score2
      }
      score <-  switch(as.character(tempScore),
                       "0" = paste0(score, "Love"),
                       "1" = paste0(score, "Fifteen"),
                       "2" = paste0(score, "Thirty"),
                       "3" = paste0(score, "Forty")
      )
    }
  }
  return(score)
}

