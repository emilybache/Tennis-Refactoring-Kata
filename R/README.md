
<!-- README.md is generated from README.Rmd. Please edit that file -->

``` r
library(tennis)
```

# tennis

Imagine you work for a consulting company, and one of your colleagues
has done some work for the FFT (French Tennis Federation). The contract
is for 10 billable hours, and your colleague has spent 8.5 hours working
on it.

Unfortunately, he has now fallen ill. He says he has completed the work
and that all the tests have passed (but he couldn’t push them to the
server). Your boss has asked you to pick up where he left off. She wants
you to spend an hour or two on the code so that you can bill the client
for the full 10 hours.

She asks you to clean up the code a bit and possibly take notes so that
you can give your colleague feedback on the design he chose. You should
also be prepared to discuss with your boss the value of this refactoring
work, in addition to the extra billable hours.

# How to

``` r

tennis_game <-
  list(
    m_score1 = 0,
    m_score2 = 0 ,
    player1Name = "player1",
    player2Name = "player2"
  )
```

``` r
tennis_game |>
  get_score()
```

``` r
tennis_game |>
  # won_point(playerName = "player1") |>
  won_point(playerName = "player2") |>
  get_score()
```

``` r
tennis_game |>
  won_point(playerName = "player1") |>
  won_point(playerName = "player2") |>
  won_point(playerName = "player2") |>
  # won_point(playerName = "player2") |>
  won_point(playerName = "player2") |>
  get_score()
```
