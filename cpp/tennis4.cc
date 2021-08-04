#include <string>

/*
public class TennisGame4 implements TennisGame {

    int serverScore;
    int receiverScore;
    String server;
    String receiver;

    public TennisGame4(String player1, String player2) {
        this.server = player1;
        this.receiver = player2;
    }

    @java.lang.Override
    public void wonPoint(String playerName) {
        if (server.equals(playerName))
            this.serverScore += 1;
        else
            this.receiverScore += 1;
    }

    @java.lang.Override
    public String getScore() {
        TennisResult result = new Deuce(
                this, new GameServer(
                        this, new GameReceiver(
                                this, new AdvantageServer(
                                        this, new AdvantageReceiver(
                                                this, new DefaultResult(this)))))).getResult();
        return result.format();
    }

    boolean receiverHasAdvantage() {
        return receiverScore >= 4 && (receiverScore - serverScore) == 1;
    }

    boolean serverHasAdvantage() {
        return serverScore >= 4 && (serverScore - receiverScore) == 1;
    }

    boolean receiverHasWon() {
        return receiverScore >= 4 && (receiverScore - serverScore) >= 2;
    }

    boolean serverHasWon() {
        return serverScore >= 4 && (serverScore - receiverScore) >= 2;
    }

    boolean isDeuce() {
        return serverScore >= 3 && receiverScore >= 3 && (serverScore == receiverScore);
    }
}

class TennisResult {
    String serverScore;
    String receiverScore;

    TennisResult(String serverScore, String receiverScore) {
        this.serverScore = serverScore;
        this.receiverScore = receiverScore;
    }

    String format() {
        if ("".equals(this.receiverScore))
            return this.serverScore;
        if (serverScore.equals(receiverScore))
            return serverScore + "-All";
        return this.serverScore + "-" + this.receiverScore;
    }
}

interface ResultProvider {
    TennisResult getResult();
}

class Deuce implements ResultProvider {
    private final TennisGame4 game;
    private final ResultProvider nextResult;

    public Deuce(TennisGame4 game, ResultProvider nextResult) {
        this.game = game;
        this.nextResult = nextResult;
    }

    @Override
    public TennisResult getResult() {
        if (game.isDeuce())
            return new TennisResult("Deuce", "");
        return this.nextResult.getResult();
    }
}

class GameServer implements ResultProvider {
    private final TennisGame4 game;
    private final ResultProvider nextResult;

    public GameServer(TennisGame4 game, ResultProvider nextResult) {
        this.game = game;
        this.nextResult = nextResult;
    }

    @Override
    public TennisResult getResult() {
        if (game.serverHasWon())
            return new TennisResult("Win for " + game.server, "");
        return this.nextResult.getResult();
    }
}

class GameReceiver implements ResultProvider {
    private final TennisGame4 game;
    private final ResultProvider nextResult;

    public GameReceiver(TennisGame4 game, ResultProvider nextResult) {
        this.game = game;
        this.nextResult = nextResult;
    }

    @Override
    public TennisResult getResult() {
        if (game.receiverHasWon())
            return new TennisResult("Win for " + game.receiver, "");
        return this.nextResult.getResult();
    }t
}

class AdvantageServer implements ResultProvider {
    private final TennisGame4 game;
    private final ResultProvider nextResult;

    public AdvantageServer(TennisGame4 game, ResultProvider nextResult) {
        this.game = game;
        this.nextResult = nextResult;
    }

    @Override
    public TennisResult getResult() {
        if (game.serverHasAdvantage())
            return new TennisResult("Advantage " + game.server, "");
        return this.nextResult.getResult();
    }
}

class AdvantageReceiver implements ResultProvider {

    private final TennisGame4 game;
    private final ResultProvider nextResult;

    public AdvantageReceiver(TennisGame4 game, ResultProvider nextResult) {
        this.game = game;
        this.nextResult = nextResult;
    }

    @Override
    public TennisResult getResult() {
        if (game.receiverHasAdvantage())
            return new TennisResult("Advantage " + game.receiver, "");
        return this.nextResult.getResult();
    }
}

class DefaultResult implements ResultProvider {

    private static final String[] scores = {"Love", "Fifteen", "Thirty", "Forty"};

    private final TennisGame4 game;

    public DefaultResult(TennisGame4 game) {
        this.game = game;
    }

    @Override
    public TennisResult getResult() {
        return new TennisResult(scores[game.serverScore], scores[game.receiverScore]);
    }
}
 */

//public class TennisGame4 implements TennisGame {

class TennisResult {
    std::string serverScore;
    std::string receiverScore;

    TennisResult(std::string serverScore, std::string receiverScore) {
        this->serverScore = serverScore;
        this->receiverScore = receiverScore;
    }

    std::string format() {
        if ("" == this->receiverScore)
            return this->serverScore;
        if (serverScore == this->receiverScore)
            return serverScore + "-All";
        return this->serverScore + "-" + this->receiverScore;
    }
};

class ResultProvider {
    virtual ~ResultProvider() {}
    virtual TennisResult getResult() = 0;
};

//class Deuce implements ResultProvider {
//class GameServer implements ResultProvider {
//class GameReceiver implements ResultProvider {
//class AdvantageServer implements ResultProvider {
//class AdvantageReceiver implements ResultProvider {

class DefaultResult : ResultProvider {
public:
    DefaultResult(TennisGame4& game) : game(game) { }

    TennisResult getResult() override {
        return TennisResult(scores[game->serverScore], scores[game->receiverScore]);
    }

private:
    static const std::string[] scores;
    const TennisGame4& game;
};

const std::string DefaultResult::scores[] = {"Love", "Fifteen", "Thirty", "Forty"};


// tennis3 function below (TODO: re-implement using class mess above!)
/* relevant inspiration from Java Unit Test
    public void checkAllScores(TennisGame game) {
        int highestScore = Math.max(this.player1Score, this.player2Score);
        for (int i = 0; i < highestScore; i++) {
            if (i < this.player1Score)
                game.wonPoint("player1");
            if (i < this.player2Score)
                game.wonPoint("player2");
        }
        assertEquals(this.expectedScore, game.getScore());
    }
*/
const std::string tennis_score(int p1, int p2) {
    std::string s;
    std::string p1N = "player1";
    std::string p2N = "player2";
    if ((p1 < 4 && p2 < 4) && (p1 + p2 < 6)) {
        std::string p[4] = {"Love", "Fifteen", "Thirty", "Forty"}; 
        s = p[p1];
        return (p1 == p2) ? s + "-All" : s + "-" + p[p2];
    } else {
        if (p1 == p2)
            return "Deuce";
        s = p1 > p2 ? p1N : p2N;
        return ((p1-p2)*(p1-p2) == 1) ? "Advantage " + s : "Win for " + s;
    }
}