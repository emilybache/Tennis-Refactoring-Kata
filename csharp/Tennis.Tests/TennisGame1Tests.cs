using Xunit;

namespace Tennis.Tests
{
    // Note: I've separated out the tests for the new functionality into an
    // explicit test class for the TennisGame1 class. These tests could potentially
    // be made to be data-driven, but I've kept them separate for the sake
    // of simplicity with understanding the additional logic changes. This also
    // removes the need to refactor the other game implementations.
    public class TennisGame1Tests
    {
        private const string Player1 = "player1";
        private const string Player2 = "player2";

        [Fact]
        public void ZeroGamesWon()
        {
            var game = new TennisGame1(Player1, Player2);

            Assert.Equal(0, game.Player1.NumberOfGamesWon);
            Assert.Equal(0, game.Player2.NumberOfGamesWon);
        }

        [Fact]
        public void Player1Wins2Games()
        {
            var game = new TennisGame1(Player1, Player2);

            // First match: player1 wins 4 points, player2 wins none
            game.WonPoint(Player1);
            game.WonPoint(Player1);
            game.WonPoint(Player1);
            game.WonPoint(Player1);

            game.CheckForWinner();

            // Second match: player1 wins 4 points, player2 wins none
            game.WonPoint(Player1);
            game.WonPoint(Player1);
            game.WonPoint(Player1);
            game.WonPoint(Player1);

            game.CheckForWinner();

            Assert.Equal(2, game.Player1.NumberOfGamesWon);
            Assert.Equal(0, game.Player2.NumberOfGamesWon);
        }

        [Fact]
        public void Player2Wins1Game()
        {
            var game = new TennisGame1(Player1, Player2);

            // player2 wins 4 points, player1 wins none
            game.WonPoint(Player2);
            game.WonPoint(Player2);
            game.WonPoint(Player2);
            game.WonPoint(Player2);

            game.CheckForWinner();

            Assert.Equal(0, game.Player1.NumberOfGamesWon);
            Assert.Equal(1, game.Player2.NumberOfGamesWon);
        }

        [Fact]
        public void Player1Wins2GamesAndPlayer2Wins1Game()
        {
            var game = new TennisGame1(Player1, Player2);

            // First match: player1 wins 4 points, player2 wins none
            game.WonPoint(Player1);
            game.WonPoint(Player1);
            game.WonPoint(Player1);
            game.WonPoint(Player1);

            game.CheckForWinner();

            // Second match: player1 wins 4 points, player2 wins none
            game.WonPoint(Player1);
            game.WonPoint(Player1);
            game.WonPoint(Player1);
            game.WonPoint(Player1);

            game.CheckForWinner();

            // Third match: player2 wins 4 points, player1 wins none
            game.WonPoint(Player2);
            game.WonPoint(Player2);
            game.WonPoint(Player2);
            game.WonPoint(Player2);

            game.CheckForWinner();

            Assert.Equal(2, game.Player1.NumberOfGamesWon);
            Assert.Equal(1, game.Player2.NumberOfGamesWon);
        }
    }
}