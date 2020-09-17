using System;
using System.Diagnostics;

namespace Tennis
{
    class TennisGame1 : ITennisGame
    {
        private Player _playerOne;
        private Player _playerTwo;
        private ScoreDisplayService _scoreDisplayService;

        public TennisGame1(string player1Name, string player2Name)
        {
            _playerOne = new Player(player1Name);
            _playerTwo = new Player(player2Name);
            _scoreDisplayService = new ScoreDisplayService();
        }

        public void WonPoint(string playerName)
        {
            if (playerName == _playerOne.Name)
            {
                _playerOne.AwardPoint();
            }

            if (playerName == _playerTwo.Name)
            {
                _playerTwo.AwardPoint(); 
            }

            Console.WriteLine("Invalid Player Name Provided");
        }

        public string GetScore()
        {
            return _scoreDisplayService.ConvertGamePointsToText(_playerOne, _playerTwo);
        }
        
        
    }
}

