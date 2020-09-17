namespace Tennis
{
    public class Player
    {
        public int GameWins { get; set; }
        public int GamePoints { get; set; }
        public string Name { get; }

        public Player(string name)
        {
            Name = name;
        }

        public void AwardPoint()
        {
            GamePoints++;
        }

        public void ResetGamePoints()
        {
            GamePoints = 0;
        }

        public void ResetGameWins()
        {
            GameWins = 0;
        }

        public void AwardGameWin()
        {
            GameWins++;
        }

        public bool HasAdvantage(Player opponent)
        {
            if (GamePoints <= GamePointsThreshold.Advantage) return false;
            var gamePointsDifference = GamePoints - opponent.GamePoints;
            return gamePointsDifference == GamePointsDifference.Advantage;
        }

        public bool IsWinner(Player opponent)
        {
            if (GamePoints < GamePointsThreshold.Win) return false;
            var winPointsDifference = GamePoints - opponent.GamePoints;
            return winPointsDifference >= GamePointsDifference.Win;
        }

        public bool IsTied(Player opponent)
        {
            return GamePoints == opponent.GamePoints;
        }
    }
}