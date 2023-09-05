use crate::TennisGame;

#[derive(Default)]
pub struct TennisGame2 {
    p1points: u8,
    p2points: u8,
    _player1_name: String,
    _player2_name: String,
}

impl TennisGame2 {
    pub fn new() -> Self {
        Self {
            p1points: 0,
            p2points: 0,
            _player1_name: "player1".to_string(),
            _player2_name: "player2".to_string(),
        }
    }
    fn P1Score(&mut self) {
        self.p1points += 1;
    }
    fn P2Score(&mut self) {
        self.p2points += 1;
    }
}

impl TennisGame for TennisGame2 {
    fn clear(&mut self) {
        self.p1points = 0;
        self.p2points = 0;
    }
    fn won_point(&mut self, player_name: &str) {
        if player_name == self._player1_name {
            self.P1Score();
        } else {
            self.P2Score();
        }
    }
    fn get_score(&self) -> String {
        let mut result = "".to_string();
        if (self.p1points == self.p2points) && (self.p1points < 3) {
            let s = match self.p1points {
                0 => "Love",
                1 => "Fifteen",
                2 => "Thirty",
                _ => "",
            };
            result = s.to_string() + "-All";
        }
        if (self.p1points == self.p2points) && (self.p1points > 2) {
            result = "Deuce".to_string()
        }
        if (self.p1points > 0) && (self.p2points == 0) {
            let s = match self.p1points {
                1 => "Fifteen",
                2 => "Thirty",
                3 => "Forty",
                _ => "",
            };
            result = s.to_string() + "-Love"
        } else if (self.p2points > 0) && (self.p1points == 0) {
            let s = match self.p2points {
                1 => "Fifteen",
                2 => "Thirty",
                3 => "Forty",
                _ => "",
            };
            result = "Love-".to_string() + s
        } else if (self.p1points > self.p2points) && (self.p1points < 4) {
            let p1res = match self.p1points {
                2 => "Thirty",
                3 => "Forty",
                _ => "",
            };
            let p2res = match self.p2points {
                1 => "Fifteen",
                2 => "Thirty",
                _ => "",
            };
            result = p1res.to_string() + "-" + p2res
        } else if (self.p2points > self.p1points) && (self.p2points < 4) {
            let p1res = match self.p1points {
                1 => "Fifteen",
                2 => "Thirty",
                _ => "",
            };
            let p2res = match self.p2points {
                2 => "Thirty",
                3 => "Forty",
                _ => "",
            };
            result = p1res.to_string() + "-" + p2res
        }
        if (self.p1points > self.p2points) && (self.p2points >= 3) {
            result = "Advantage player1".to_string()
        }
        if (self.p2points > self.p1points) && (self.p1points >= 3) {
            result = "Advantage player2".to_string()
        }
        if (self.p1points >= 4 && self.p2points >= 0)
            && (self.p1points as i16 - self.p2points as i16) >= 2
        {
            result = "Win for player1".to_string()
        }
        if (self.p2points >= 4 && self.p1points >= 0)
            && (self.p2points as i16 - self.p1points as i16) >= 2
        {
            result = "Win for player2".to_string()
        }
        return result;
    }
}
