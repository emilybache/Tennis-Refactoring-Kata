use strict;
use warnings;

use Test::More;

use_ok "Tennis";

# from tennis import TennisGame1, TennisGame2, TennisGame3

my @test_cases = (
    [ 0, 0, "Love-All",    'player1', 'player2' ],
    [ 1, 1, "Fifteen-All", 'player1', 'player2' ],
    [ 2, 2, "Thirty-All",  'player1', 'player2' ],
    [ 3, 3, "Deuce",       'player1', 'player2' ],
    [ 4, 4, "Deuce",       'player1', 'player2' ],

    [ 1, 0, "Fifteen-Love",    'player1', 'player2' ],
    [ 0, 1, "Love-Fifteen",    'player1', 'player2' ],
    [ 2, 0, "Thirty-Love",     'player1', 'player2' ],
    [ 0, 2, "Love-Thirty",     'player1', 'player2' ],
    [ 3, 0, "Forty-Love",      'player1', 'player2' ],
    [ 0, 3, "Love-Forty",      'player1', 'player2' ],
    [ 4, 0, "Win for player1", 'player1', 'player2' ],
    [ 0, 4, "Win for player2", 'player1', 'player2' ],

    [ 2, 1, "Thirty-Fifteen",  'player1', 'player2' ],
    [ 1, 2, "Fifteen-Thirty",  'player1', 'player2' ],
    [ 3, 1, "Forty-Fifteen",   'player1', 'player2' ],
    [ 1, 3, "Fifteen-Forty",   'player1', 'player2' ],
    [ 4, 1, "Win for player1", 'player1', 'player2' ],
    [ 1, 4, "Win for player2", 'player1', 'player2' ],

    [ 3, 2, "Forty-Thirty",    'player1', 'player2' ],
    [ 2, 3, "Thirty-Forty",    'player1', 'player2' ],
    [ 4, 2, "Win for player1", 'player1', 'player2' ],
    [ 2, 4, "Win for player2", 'player1', 'player2' ],

    [ 4,  3,  "Advantage player1", 'player1', 'player2' ],
    [ 3,  4,  "Advantage player2", 'player1', 'player2' ],
    [ 5,  4,  "Advantage player1", 'player1', 'player2' ],
    [ 4,  5,  "Advantage player2", 'player1', 'player2' ],
    [ 15, 14, "Advantage player1", 'player1', 'player2' ],
    [ 14, 15, "Advantage player2", 'player1', 'player2' ],

    [ 6,  4,  'Win for player1', 'player1', 'player2' ],
    [ 4,  6,  'Win for player2', 'player1', 'player2' ],
    [ 16, 14, 'Win for player1', 'player1', 'player2' ],
    [ 14, 16, 'Win for player2', 'player1', 'player2' ],

    [ 6, 4, 'Win for One',   'One',     'player2' ],
    [ 4, 6, 'Win for Two',   'player1', 'Two' ],
    [ 6, 5, 'Advantage One', 'One',     'player2' ],
    [ 5, 6, 'Advantage Two', 'player1', 'Two' ],
);


sub play_game {
    my ( $module, $p1_score, $p2_score, $p1_name, $p2_name ) = @_;
    my $game = $module->new( $p1_name, $p2_name );
    my $max_score = $p1_score > $p2_score ? $p1_score : $p2_score;
    foreach my $current_score ( 0 .. $max_score ) {
        $game->won_point($p1_name) if $current_score < $p1_score;
        $game->won_point($p2_name) if $current_score < $p2_score;
    }
    return $game;
}

#
#
# class TestTennis(unittest.TestCase):
#
#     def test_Score_Game1(self):
#         for testcase in test_cases:
#             (p1Points, p2Points, score, p1Name, p2Name) = testcase
#             game = play_game(TennisGame1, p1Points, p2Points, p1Name, p2Name)
#             self.assertEqual(score, game.score())
#
#     def test_Score_Game2(self):
#         for testcase in test_cases:
#             (p1Points, p2Points, score, p1Name, p2Name) = testcase
#             game = play_game(TennisGame2, p1Points, p2Points, p1Name, p2Name)
#             self.assertEqual(score, game.score())
#
#     def test_Score_Game3(self):
#         for testcase in test_cases:
#             (p1Points, p2Points, score, p1Name, p2Name) = testcase
#             game = play_game(TennisGame3, p1Points, p2Points, p1Name, p2Name)
#             self.assertEqual(score, game.score())
#
# if __name__ == "__main__":
#     unittest.main()

done_testing();
