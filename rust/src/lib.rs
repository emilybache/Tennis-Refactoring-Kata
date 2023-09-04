mod tennisgame1;
mod tennisgame2;
mod tennisgame3;

pub use crate::tennisgame1::TennisGame1;
pub use crate::tennisgame2::TennisGame2;
pub use crate::tennisgame3::TennisGame3;

pub trait TennisGame {
    fn clear(&mut self);
    fn won_point(&mut self, player_name: &str);
    fn get_score(&self) -> String;
}
