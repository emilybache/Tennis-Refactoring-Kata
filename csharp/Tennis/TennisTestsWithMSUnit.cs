using System.Diagnostics.CodeAnalysis;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tennis
{
    [ExcludeFromCodeCoverage]
    [TestClass]
    public class TennisTestsWithMSUnit
    {
        private const string player1Name = "player1";
        private const string player2Name = "player2";
        private const string winForPlayer1 = "Win for player1";
        private const string winForPlayer2 = "Win for player2";

        TennisGame1 tennisGame;

        [TestInitialize]
        public void TestInitialize()
        {
            tennisGame = new TennisGame1(player1Name, player2Name);
        }

        [TestMethod]
        public void BothPlayersHaveZero()
        {
            var actualResult = tennisGame.GetScore();
            Assert.AreEqual("Love-All", actualResult);
        }

        [TestMethod]
        public void BothPlayerHaveFifteen()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Fifteen-All", actualResult);
        }

        [TestMethod]
        public void BothPlayerHaveThirty()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Thirty-All", actualResult);
        }

        [TestMethod]
        public void Deuce()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Deuce", actualResult);
        }

        [TestMethod]
        public void AdvantagePlayerOne()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player1Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Advantage player1", actualResult);
        }

        [TestMethod]
        public void AdvantagePlayerTwo()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Advantage player2", actualResult);
        }

        [TestMethod]
        public void WinPlayerOneAfterDeuce()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual(winForPlayer1, actualResult);
        }

        [TestMethod]
        public void WinPlayerTwoAfterDeuce()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual(winForPlayer2, actualResult);
        }

        [TestMethod]
        public void LoveFifteen()
        {
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Love-Fifteen", actualResult);
        }

        [TestMethod]
        public void LoveThirty()
        {
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Love-Thirty", actualResult);
        }

        [TestMethod]
        public void LoveForty()
        {
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Love-Forty", actualResult);
        }

        [TestMethod]
        public void PlayerTwoWinAfterLoveForty()
        {
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual(winForPlayer2, actualResult);
        }

        [TestMethod]
        public void FifteenLove()
        {
            tennisGame.WonPoint(player1Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Fifteen-Love", actualResult);
        }

        [TestMethod]
        public void ThirtyLove()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Thirty-Love", actualResult);
        }

        [TestMethod]
        public void FortyLove()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Forty-Love", actualResult);
        }

        [TestMethod]
        public void FifteenThirty()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Fifteen-Thirty", actualResult);
        }

        [TestMethod]
        public void FifteenForty()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Fifteen-Forty", actualResult);
        }

        [TestMethod]
        public void ThirtyForty()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Thirty-Forty", actualResult);
        }

        [TestMethod]
        public void ThirtyFifteen()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Thirty-Fifteen", actualResult);
        }

        [TestMethod]
        public void FortyFifteen()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Forty-Fifteen", actualResult);
        }

        [TestMethod]
        public void FortyThirty()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player2Name);
            tennisGame.WonPoint(player2Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual("Forty-Thirty", actualResult);
        }

        [TestMethod]
        public void PlayerOneWinAfterLoveForty()
        {
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);
            tennisGame.WonPoint(player1Name);

            var actualResult = tennisGame.GetScore();

            Assert.AreEqual(winForPlayer1, actualResult);
        }
    }
}