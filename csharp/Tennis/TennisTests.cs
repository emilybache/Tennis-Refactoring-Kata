using System;
using NUnit.Framework;

namespace Tennis
{
    [TestFixture( 0,  0, "Love-All")]
    [TestFixture( 1,  1, "Fifteen-All")]
    [TestFixture( 2,  2, "Thirty-All")]
    [TestFixture( 3,  3, "Deuce")]
    [TestFixture( 4,  4, "Deuce")]
    [TestFixture( 1,  0, "Fifteen-Love")]
    [TestFixture( 0,  1, "Love-Fifteen")]
    [TestFixture( 2,  0, "Thirty-Love")]
    [TestFixture( 0,  2, "Love-Thirty")]
    [TestFixture( 3,  0, "Forty-Love")]
    [TestFixture( 0,  3, "Love-Forty")]
    [TestFixture( 4,  0, "Win for player1")]
    [TestFixture( 0,  4, "Win for player2")]
    [TestFixture( 2,  1, "Thirty-Fifteen")]
    [TestFixture( 1,  2, "Fifteen-Thirty")]
    [TestFixture( 3,  1, "Forty-Fifteen")]
    [TestFixture( 1,  3, "Fifteen-Forty")]
    [TestFixture( 4,  1, "Win for player1")]
    [TestFixture( 1,  4, "Win for player2")]
    [TestFixture( 3,  2, "Forty-Thirty")]
    [TestFixture( 2,  3, "Thirty-Forty")]
    [TestFixture( 4,  2, "Win for player1")]
    [TestFixture( 2,  4, "Win for player2")]
    [TestFixture( 4,  3, "Advantage player1")]
    [TestFixture( 3,  4, "Advantage player2")]
    [TestFixture( 5,  4, "Advantage player1")]
    [TestFixture( 4,  5, "Advantage player2")]
    [TestFixture(15, 14, "Advantage player1")]
    [TestFixture(14, 15, "Advantage player2")]
    [TestFixture( 6,  4, "Win for player1")]
    [TestFixture( 4,  6, "Win for player2")]
    [TestFixture(16, 14, "Win for player1")]
    [TestFixture(14, 16, "Win for player2")]
    public class TennisTests
    {
        private readonly int player1Score;
        private readonly int player2Score;
        private readonly string expectedScore;

        public TennisTests(int player1Score, int player2Score, string expectedScore)
        {
            this.player1Score = player1Score;
            this.player2Score = player2Score;
            this.expectedScore = expectedScore;
        }

        [Test]
        public void CheckTennisGame1()
        {
            var game = new TennisGame1("player1", "player2");
            CheckAllScores(game);
        }

        [Test]
        public void CheckTennisGame2()
        {
            var game = new TennisGame2("player1", "player2");
            CheckAllScores(game);
        }

        [Test]
        public void CheckTennisGame3()
        {
            var game = new TennisGame3("player1", "player2");
            CheckAllScores(game);
        }

        private void CheckAllScores(ITennisGame game)
        {
            var highestScore = Math.Max(this.player1Score, this.player2Score);
            for (var i = 0; i < highestScore; i++)
            {
                if (i < this.player1Score)
                    game.WonPoint("player1");
                if (i < this.player2Score)
                    game.WonPoint("player2");
            }
            Assert.AreEqual(this.expectedScore, game.GetScore());
        }

    }

    [TestFixture]
    public class ExampleGameTennisTest
    {
        [Test]
        public void CheckGame1()
        {
            var game = new TennisGame1("player1", "player2");
            RealisticTennisGame(game);
        }

        [Test]
        public void CheckGame2()
        {
            var game = new TennisGame2("player1", "player2");
            RealisticTennisGame(game);
        }

        [Test]
        public void CheckGame3()
        {
            var game = new TennisGame3("player1", "player2");
            RealisticTennisGame(game);
        }

        private void RealisticTennisGame(ITennisGame game)
        {
            string[] points = { "player1", "player1", "player2", "player2", "player1", "player1" };
            string[] expectedScores = { "Fifteen-Love", "Thirty-Love", "Thirty-Fifteen", "Thirty-All", "Forty-Thirty", "Win for player1" };
            for (var i = 0; i < 6; i++)
            {
                game.WonPoint(points[i]);
                Assert.AreEqual(expectedScores[i], game.GetScore());
            }
        }
    }

}

