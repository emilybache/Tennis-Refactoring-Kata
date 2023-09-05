mod tests {
    use rust::{TennisGame, TennisGame1, TennisGame2, TennisGame3};

    fn all_scores() -> Vec<(u8, u8, &'static str)> {
        vec![
            (0, 0, "Love-All"),
            (1, 1, "Fifteen-All"),
            (2, 2, "Thirty-All"),
            (3, 3, "Deuce"),
            (4, 4, "Deuce"),
            (1, 0, "Fifteen-Love"),
            (0, 1, "Love-Fifteen"),
            (2, 0, "Thirty-Love"),
            (0, 2, "Love-Thirty"),
            (3, 0, "Forty-Love"),
            (0, 3, "Love-Forty"),
            (4, 0, "Win for player1"),
            (0, 4, "Win for player2"),
            (2, 1, "Thirty-Fifteen"),
            (1, 2, "Fifteen-Thirty"),
            (3, 1, "Forty-Fifteen"),
            (1, 3, "Fifteen-Forty"),
            (4, 1, "Win for player1"),
            (1, 4, "Win for player2"),
            (3, 2, "Forty-Thirty"),
            (2, 3, "Thirty-Forty"),
            (4, 2, "Win for player1"),
            (2, 4, "Win for player2"),
            (4, 3, "Advantage player1"),
            (3, 4, "Advantage player2"),
            (5, 4, "Advantage player1"),
            (4, 5, "Advantage player2"),
            (15, 14, "Advantage player1"),
            (14, 15, "Advantage player2"),
            (4, 6, "Win for player2"),
            (6, 4, "Win for player1"),
            (16, 14, "Win for player1"),
            (14, 16, "Win for player2"),
        ]
    }

    fn run(fixture: &mut impl TennisGame) {
        for (p1, p2, expected_result) in all_scores() {
            fixture.clear();
            let highest_score = u8::max(p1, p2);
            for i in 0..highest_score {
                if i < p1 {
                    fixture.won_point("player1")
                }
                if i < p2 {
                    fixture.won_point("player2")
                }
            }
            assert_eq!(fixture.get_score(), expected_result, "{},{}", p1, p2);
        }
    }

    #[test]
    fn test_game1() {
        let mut game = TennisGame1::new();
        run(&mut game);
    }

    #[test]
    fn test_game2() {
        let mut game = TennisGame2::new();
        run(&mut game);
    }

    #[test]
    fn test_game3() {
        let mut game = TennisGame3::new();
        run(&mut game);
    }
}
