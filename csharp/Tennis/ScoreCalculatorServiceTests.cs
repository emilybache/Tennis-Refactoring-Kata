using NUnit.Framework;

namespace Tennis
{
    public class ScoreDisplayServiceTests
    {
        private ScoreDisplayService _scoreDisplayService = new ScoreDisplayService();
        private Player _playerOne;
        private Player _playerTwo;

        [SetUp]
        public void SetUp()
        {
            _playerOne = new Player("player1");
            _playerTwo = new Player("player2");
        }

        [Test]
        public void ConvertGamePointsToTextShouldReturnLoveAllForANewGameWithNoGamePoints()
        {
            var result = _scoreDisplayService.ConvertGamePointsToText(_playerOne, _playerTwo);
            Assert.AreEqual($"{Score.Love}-{Score.TieSuffix}", result);
        }

        [Test]
        public void ConvertGamePointsToTextShouldReturnDeuceGivenAtLeastThreePointsPerPlayerAndATie()
        {
            _playerOne.GamePoints = 5;
            _playerTwo.GamePoints = 5;
            var result = _scoreDisplayService.ConvertGamePointsToText(_playerOne, _playerTwo);
            Assert.AreEqual($"{Score.Deuce}", result);
        }

        [Test]
        public void
            ConvertGamePointsToTextShouldReturnScoreTextSuffixedWithAllGivenAtLessThanThreePointsPerPlayerAndATie()
        {
            _playerOne.GamePoints = 2;
            _playerTwo.GamePoints = 2;
            var result = _scoreDisplayService.ConvertGamePointsToText(_playerOne, _playerTwo);
            Assert.AreEqual($"{Score.Thirty}-{Score.TieSuffix}", result);
        }

        [Test]
        public void ConvertGamePointsToTextShouldReturnAdvantageSuffixedWithPlayerNameGivenAdvantageToAPlayer()
        {
            _playerOne.GamePoints = 4;
            _playerTwo.GamePoints = 3;
            var result = _scoreDisplayService.ConvertGamePointsToText(_playerOne, _playerTwo);
            Assert.AreEqual($"{Score.Advantage} {_playerOne.Name}", result);
        }

        [Test]
        public void ConvertGamePointsToTextShouldReturnWinForSuffixedWithPlayerNameGivenPlayerIsWinner()
        {
            _playerOne.GamePoints = 6;
            _playerTwo.GamePoints = 4;
            var result = _scoreDisplayService.ConvertGamePointsToText(_playerOne, _playerTwo);
            Assert.AreEqual($"{Score.Win} {_playerOne.Name}", result);
        }

        [Test]
        public void ConvertGamePointsToTextShouldReturnNormalScoreGivenPlayersHaveNoAdvantageTieOrWin()
        {
            _playerOne.GamePoints = 1;
            _playerTwo.GamePoints = 3;
            var result = _scoreDisplayService.ConvertGamePointsToText(_playerOne, _playerTwo);
            Assert.AreEqual($"{Score.Fifteen}-{Score.Forty}", result);
        }
    }
}