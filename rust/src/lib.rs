pub trait TennisGame {
    fn clear(&mut self);
    fn won_point(&mut self, player_name: &str);
    fn get_score(&self) -> String;
}

#[derive(Default)]
pub struct TennisGame1 {
    score1: u8,
    score2: u8,
    _player1_name: String,
    _player2_name: String,
}
impl TennisGame1 {
    pub fn new() -> Self {
        TennisGame1::default()
    }
}
impl TennisGame for TennisGame1 {
    fn clear(&mut self) {
        self.score1 = 0;
        self.score2 = 0;
    }
    fn won_point(&mut self, player_name: &str) {
        if player_name == "player1" {
            self.score1 += 1;
        } else {
            self.score2 += 1;
        }
    }
    fn get_score(&self) -> String {
        match (self.score1, self.score2) {
            (a, b) if a == b => match a {
                0 => return "Love-All".to_owned(),
                1 => return "Fifteen-All".to_owned(),
                2 => return "Thirty-All".to_owned(),
                _ => return "Deuce".to_owned(),
            },
            (a, b) if a >= 4 || b >= 4 => {
                let minus_result = self.score1 as i8 - self.score2 as i8;
                if minus_result == 1 {
                    return "Advantage player1".to_owned();
                } else if minus_result == -1i8 {
                    return "Advantage player2".to_owned();
                } else if minus_result >= 2 {
                    return "Win for player1".to_owned();
                }
                "Win for player2".to_owned()
            }
            _ => {
                let mut temp_score: u8;
                let mut score = String::new();
                for i in 1..3 {
                    if i == 1 {
                        temp_score = self.score1;
                    } else {
                        score.push_str("-");
                        temp_score = self.score2;
                    }
                    match temp_score {
                        0 => score.push_str("Love"),
                        1 => score.push_str("Fifteen"),
                        2 => score.push_str("Thirty"),
                        3 => score.push_str("Forty"),
                        _ => {}
                    }
                }
                return score;
            }
        }
    }
}
