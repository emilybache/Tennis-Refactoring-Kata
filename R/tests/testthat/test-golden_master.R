test_that("golden_master ok", {
  expect_snapshot(x = {
    
    create_game <-
      function(number_of_points,
               player = c("player1", "player2")) {
        combn(rep(player, 1 + round(number_of_points / 2)),
              m = number_of_points, simplify = FALSE) |>
          unique()
      }
    
    explicit_final_score <- function(x){
      Reduce("won_point", append(list(tennis_game),x)) |>
        get_score()
    }
    
    all_combinaison <- lapply(0:10,create_game) |> 
      unlist(recursive = FALSE)
    
    lapply(all_combinaison,explicit_final_score )
    
  })
})

