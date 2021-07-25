using System;

namespace Tennis
{
    interface IScore
    {
        string GetScore();
    }

    static class ScoreName
    {
        public static string For(int score)
        {
            var result = "";
            switch (score)
            {
                case 0:
                    result = "Love";
                    break;
                case 1:
                    result = "Fifteen";
                    break;
                case 2:
                    result = "Thirty";
                    break;
                case 3:
                    result = "Forty";
                    break;
            }
            return result;
        }
    }

    class Deuce : IScore
    {
        private readonly int score1;
        private readonly int score2;
        private readonly IScore next;

        public Deuce(int score1, int score2, IScore next = null)
        {
            this.score1 = score1;
            this.score2 = score2;
            this.next = next;
        }

        public string GetScore()
        {
            if (score1 == score2 && score1 > 2 && score2 > 2)
            {
                return "Deuce";
            }
            return next?.GetScore();
        }
    }

    class All : IScore
    {
        private readonly int score1;
        private readonly int score2;
        private readonly IScore next;

        public All(int score1, int score2, IScore next = null)
        {
            this.score1 = score1;
            this.score2 = score2;
            this.next = next;
        }

        public string GetScore()
        {
            if (score1 == score2 && score1 < 3 && score2 < 3)
            {
                var score = ScoreName.For(score1);
                score += "-All";
                return score;
            }
            return next?.GetScore();
        }
    }

    class Default : IScore
    {
        private readonly int score1;
        private readonly int score2;
        private readonly IScore next;

        public Default(int score1, int score2, IScore next = null)
        {
            this.score1 = score1;
            this.score2 = score2;
            this.next = next;
        }

        public string GetScore()
        {
            if (score1 < 4 && score2 < 4)
            {
                var player1Score = ScoreName.For(score1);
                var player2Score = ScoreName.For(score2);
                return $"{player1Score}-{player2Score}";
            }
            return next?.GetScore();
        }
    }

    class Advantage : IScore
    {
        private readonly int score1;
        private readonly int score2;
        private readonly string player1Name;
        private readonly string player2Name;
        private readonly IScore next;

        public Advantage(int score1, int score2, string player1Name, string player2Name, IScore next = null)
        {
            this.score1 = score1;
            this.score2 = score2;
            this.player1Name = player1Name;
            this.player2Name = player2Name;
            this.next = next;
        }

        public string GetScore()
        {
            if ((score1 >= 4 || score2 >= 4) && Math.Abs(score1 - score2) == 1)
            {
                var player = "";
                switch (score1 - score2)
                {
                    case 1:
                        player = player1Name;
                        break;
                    case -1:
                        player = player2Name;
                        break;
                }
                return $"Advantage {player}";
            }
            return next?.GetScore();
        }
    }

    class Win : IScore
    {
        private readonly int score1;
        private readonly int score2;
        private readonly string player1Name;
        private readonly string player2Name;
        private readonly IScore next;

        public Win(int score1, int score2, string player1Name, string player2Name, IScore next = null)
        {
            this.score1 = score1;
            this.score2 = score2;
            this.player1Name = player1Name;
            this.player2Name = player2Name;
            this.next = next;
        }

        public string GetScore()
        {
            if ((score1 >= 4 || score2 >= 4) && Math.Abs(score1 - score2) >= 2)
            {
                var player = "";
                switch (score1 - score2)
                {
                    case >= 2:
                        player = player1Name;
                        break;
                    default:
                        player = player2Name;
                        break;
                }
                return $"Win for {player}";
            }
            return next?.GetScore();
        }
    }

    public class TennisGame2 : ITennisGame
    {
        private int p1point;
        private int p2point;

        private string player1Name;
        private string player2Name;

        public TennisGame2(string player1Name, string player2Name)
        {
            this.player1Name = player1Name;
            this.player2Name = player2Name;
        }

        public string GetScore()
        {
            var score =
                new All(p1point, p2point,
                    new Deuce(p1point, p2point,
                        new Default(p1point, p2point,
                            new Advantage(p1point, p2point, player1Name, player2Name,
                                new Win(p1point, p2point, player1Name, player2Name))))).GetScore();

            return score;
        }

        public void WonPoint(string player)
        {
            if (player == player1Name)
                p1point++;
            else
                p2point++;
        }

    }
}

