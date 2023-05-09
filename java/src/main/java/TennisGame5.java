import java.util.HashMap;
import java.util.Map;

public class TennisGame5 implements TennisGame {

    private final String player1Name;
    private final String player2Name;
    private int player1Score;
    private int player2Score;

    public TennisGame5(String player1Name, String player2Name) {
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    @Override
    public void wonPoint(String playerName) {
        if (playerName.equals("player1"))
            player1Score++;
        else if (playerName.equals("player2"))
            player2Score++;
        else
            throw new IllegalArgumentException("Invalid player name.");
    }

    @Override
    public String getScore() {
        int p1 = player1Score;
        int p2 = player2Score;

        while (p1 > 4 || p2 > 4) {
            p1--;
            p2--;
        }

        var lookup = new HashMap<Map.Entry, String>();
        lookup.put(Map.entry(0, 0), "Love-All");
        lookup.put(Map.entry(0, 1), "Love-Fifteen");
        lookup.put(Map.entry(0, 2), "Love-Thirty");
        lookup.put(Map.entry(0, 3), "Love-Forty");
        lookup.put(Map.entry(0, 4), "Win for player2");
        lookup.put(Map.entry(1, 0), "Fifteen-Love");
        lookup.put(Map.entry(1, 1), "Fifteen-All");
        lookup.put(Map.entry(1, 2), "Fifteen-Thirty");
        lookup.put(Map.entry(1, 3), "Fifteen-Forty");
        lookup.put(Map.entry(1, 4), "Win for player2");
        lookup.put(Map.entry(2, 0), "Thirty-Love");
        lookup.put(Map.entry(2, 1), "Thirty-Fifteen");
        lookup.put(Map.entry(2, 2), "Thirty-All");
        lookup.put(Map.entry(2, 3), "Thirty-Forty");
        lookup.put(Map.entry(2, 4), "Win for player2");
        lookup.put(Map.entry(3, 0), "Forty-Love");
        lookup.put(Map.entry(3, 1), "Forty-Fifteen");
        lookup.put(Map.entry(3, 2), "Forty-Thirty");
        lookup.put(Map.entry(3, 3), "Deuce");
        lookup.put(Map.entry(3, 4), "Advantage player2");
        lookup.put(Map.entry(4, 0), "Win for player1");
        lookup.put(Map.entry(4, 1), "Win for player1");
        lookup.put(Map.entry(4, 2), "Win for player1");
        lookup.put(Map.entry(4, 3), "Advantage player1");
        lookup.put(Map.entry(4, 4), "Deuce");

        var entry = Map.entry(p1, p2);
        if (lookup.containsKey(entry)) {
            return lookup.get(entry);
        } else {
            throw new IllegalArgumentException("Invalid score.");
        }
    }
}
