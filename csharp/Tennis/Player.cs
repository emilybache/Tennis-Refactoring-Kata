using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Tennis
{
    public class Player
    {
        // Note: This could just as easily be a switch statement, but this way uses a
        // shared, immutable dictionary, which is what a switch statement would compile
        // down to anyway, yet it would be duplicated between instances of this class.
        private static readonly IReadOnlyDictionary<int, string> ScoreStrings =
            new Dictionary<int, string>()
            {
                { 0, "Love" },
                { 1, "Fifteen" },
                { 2, "Thirty" },
                { 3, "Forty" }
            }
            .AsReadOnly();

        public Player(string name)
        {
            Name = name;
        }

        // Note: The name is never actually used in TennisGame1, so this is a redundant
        // property and only kept in for reference to the original code.
        public string Name { get; }

        public int Score { get; private set; }

        // TODO: Handle values above 3, which will cause an ArgumentOutOfRangeException here.
        public string ScoreString => ScoreStrings[Score];

        public void IncreaseScore() => Score++;
        public void ResetScore() => Score = 0;

        /// <summary>
        /// Returns true if the current player has a 1-point lead over the other player.
        /// </summary>
        /// <param name="otherPlayer">The other player to compare against.</param>
        /// <returns>True if the current player has the advantage.</returns>
        public bool HasAdvantageOver(Player otherPlayer) => (Score - otherPlayer.Score) == 1;

        /// <summary>
        /// Returns true if the current player has at least a 2-point lead over the other player.
        /// </summary>
        /// <param name="otherPlayer">The other player to compare against.</param>
        /// <returns>True if the current player has a winning score.</returns>
        public bool HasWinningScoreAgainst(Player otherPlayer) => (Score - otherPlayer.Score) >= 2;
    }
}