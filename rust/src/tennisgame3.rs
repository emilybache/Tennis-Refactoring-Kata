use crate::TennisGame;

#[derive(Default)]
pub struct TennisGame3 {
    p1: u8,
    p2: u8,
    p1n: String,
    p2n: String,
}

impl TennisGame3 {
    pub fn new() -> Self {
        Self {
            p1: 0,
            p2: 0,
            p1n: "player1".to_string(),
            p2n: "player2".to_string(),
        }
    }
}

impl TennisGame for TennisGame3 {
    fn clear(&mut self) {
        self.p1 = 0;
        self.p2 = 0;
    }
    fn won_point(&mut self, player_name: &str) {
        if player_name == "player1" {
            self.p1 += 1;
        } else {
            self.p2 += 1;
        }
    }
    fn get_score(&self) -> String {
        if (self.p1 < 4 && self.p2 < 4) && (self.p1 + self.p2 < 6) {
            let p = ["Love", "Fifteen", "Thirty", "Forty"];
            let s = p[self.p1 as usize];
            return s.to_string()
                + "-"
                + if self.p1 == self.p2 {
                    "All"
                } else {
                    p[self.p2 as usize]
                };
        } else {
            if self.p1 == self.p2 {
                return "Deuce".to_string();
            }
            let s = if self.p1 > self.p2 {
                self.p1n.clone()
            } else {
                self.p2n.clone()
            };
            if (self.p1 as i16 - self.p2 as i16) * (self.p1 as i16 - self.p2 as i16) == 1 {
                return "Advantage ".to_string() + s.as_str();
            }
            return "Win for ".to_string() + s.as_str();
        }
    }
}
