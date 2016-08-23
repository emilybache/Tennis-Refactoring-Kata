using System;
using System.Diagnostics.CodeAnalysis;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tennis
{
    [ExcludeFromCodeCoverage]
    [TestClass]
    public class TennisTestsWithMSUnitDataDriven
    {
        public TestContext TestContext { get; set; }

        [DeploymentItem(@"..\..\..\Tennis\TestData.xls")]
        [DataSource("System.Data.Odbc", @"Dsn=Excel Files;dbq=TestData.xls;defaultdir=.; driverid=790;maxbuffersize=2048;pagetimeout=5;", "Games$", DataAccessMethod.Sequential)]
        [TestMethod]
        public void TestTennisGames()
        {
            int playerOneScore = Convert.ToInt32(TestContext.DataRow["PlayerOneScore"]);
            int playerTwoScore = Convert.ToInt32(TestContext.DataRow["PlayerTwoScore"]);
            string expectedScore = TestContext.DataRow["ExpectedScore"].ToString();
            TennisGame1 game = new TennisGame1("player1", "player2");

            PlayTennisGame1(playerOneScore, playerTwoScore, game);
            Assert.AreEqual(expectedScore, game.GetScore());
        }

        private void PlayTennisGame1(int playerOneScore, int playerTwoScore, TennisGame1 game)
        {
            int highestScore = Math.Max(playerOneScore, playerTwoScore);
            for (var i = 0; i < highestScore; i++)
            {
                if (i < playerOneScore)
                    game.WonPoint("player1");
                if (i < playerTwoScore)
                    game.WonPoint("player2");
            }
        }
    }
}