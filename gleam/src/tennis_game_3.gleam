pub type TennisGame {
  TennisGame(p1: Int, p2: Int, p1_n: String, p2_n: String)
}

pub fn won_point(game: TennisGame, player_name: String) -> TennisGame {
  case player_name {
    "player1" -> TennisGame(..game, p1: game.p1 + 1)
    _ -> TennisGame(..game, p2: game.p2 + 1)
  }
}

pub fn get_score(game: TennisGame) -> String {
  let TennisGame(p1:, p2:, p1_n:, p2_n:) = game

  case p1 < 4 && p2 < 4 && !{ p1 + p2 == 6 } {
    True -> {
      let s = case p1 {
        0 -> "Love"
        1 -> "Fifteen"
        2 -> "Thirty"
        3 -> "Forty"
        _ -> panic
      }
      case p1 == p2 {
        True -> s <> "-All"
        False ->
          s
          <> "-"
          <> case p2 {
            0 -> "Love"
            1 -> "Fifteen"
            2 -> "Thirty"
            3 -> "Forty"
            _ -> panic
          }
      }
    }
    False ->
      case p1 == p2 {
        True -> "Deuce"
        False -> {
          let s = case p1 > p2 {
            True -> p1_n
            False -> p2_n
          }
          case { p1 - p2 } * { p1 - p2 } {
            1 -> "Advantage " <> s
            _ -> "Win for " <> s
          }
        }
      }
  }
}
