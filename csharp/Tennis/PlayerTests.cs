using NUnit.Framework;

namespace Tennis
{
    [TestFixture]
    public class PlayerTests
    {
        private Player _playerOne;
        private Player _playerTwo;

        [SetUp]
        public void SetUp()
        {
            _playerOne = new Player("player1");
            _playerTwo = new Player("player2");
        }

        [Test]
        public void HasAdvantageShouldReturnFalseGivenGamePointsLessThanThree()
        {
            _playerOne.GamePoints = 2;
            _playerTwo.GamePoints = 1;

            Assert.IsFalse(_playerOne.HasAdvantage(_playerTwo));
        }

        [Test]
        public void HasAdvantageShouldReturnFalseGivenAnOpponentWithAPointLeadOfOne()
        {
            _playerOne.GamePoints = 5;
            _playerTwo.GamePoints = 6;

            Assert.IsFalse(_playerOne.HasAdvantage(_playerTwo));
        }

        [Test]
        public void HasAdvantageShouldReturnTrueGivenAPlayerWithAPointLeadOfOne()
        {
            _playerOne.GamePoints = 6;
            _playerTwo.GamePoints = 5;

            Assert.IsTrue(_playerOne.HasAdvantage(_playerTwo));
        }

        [Test]
        public void IsWinnerShouldReturnFalseGivenGamePointsLessThanFour()
        {
            _playerOne.GamePoints = 3;
            _playerTwo.GamePoints = 0;

            Assert.IsFalse(_playerOne.IsWinner(_playerTwo));
        }

        [Test]
        public void IsWinnerShouldReturnFalseGivenAnOpponentWithAPointLeadOfTwo()
        {
            _playerOne.GamePoints = 4;
            _playerTwo.GamePoints = 6;

            Assert.IsFalse(_playerOne.IsWinner(_playerTwo));
        }

        [Test]
        public void IsWinnerShouldReturnTrueGivenAPlayerWithAPointLeadOfTwo()
        {
            _playerOne.GamePoints = 6;
            _playerTwo.GamePoints = 4;

            Assert.IsTrue(_playerOne.IsWinner(_playerTwo));
        }

        [Test]
        public void IsTiedShouldReturnFalseGivenAnOpponentWithADifferentScoreThanThePlayer()
        {
            _playerOne.GamePoints = 4;
            _playerTwo.GamePoints = 6;

            Assert.IsFalse(_playerOne.IsTied(_playerTwo));
        }

        [Test]
        public void IsTiedShouldReturnTrueGivenAnOpponentWithTheSameScoreAsThePlayer()
        {
            _playerOne.GamePoints = 1;
            _playerTwo.GamePoints = 1;

            Assert.IsTrue(_playerOne.IsTied(_playerTwo));
        }


        [Test]
        public void AwardPointShouldIncrementThePlayersGamePointsByOne()
        {
            _playerOne.GamePoints = 0;
            _playerOne.AwardPoint();

            Assert.AreEqual(1, _playerOne.GamePoints);
        }


        [Test]
        public void ResetGamePointsShouldIncrementThePlayersGamePointsByOne()
        {
            _playerOne.GamePoints = 6;
            _playerOne.ResetGamePoints();

            Assert.AreEqual(0, _playerOne.GamePoints);
        }
        
        [Test]
        public void AwardGameWinShouldIncrementThePlayersGameWinsByOne()
        {
            _playerOne.GameWins = 0;
            _playerOne.AwardGameWin();

            Assert.AreEqual(1, _playerOne.GameWins);
        }
        
        [Test]
        public void ResetGameWinsShouldResetThePlayersGameWinsToZero()
        {
            _playerOne.GameWins = 6;
            _playerOne.ResetGameWins();

            Assert.AreEqual(0, _playerOne.GameWins);
        }
    }
}