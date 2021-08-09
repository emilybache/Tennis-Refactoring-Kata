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
    }
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


class TennisResult {
public:
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

private:
    std::string serverScore;
    std::string receiverScore;
};

class ResultProvider {
public:
    virtual TennisResult getResult() const = 0;
    virtual ~ResultProvider() = default;
};

class TennisGame4 : ResultProvider {
public:
    int serverScore = 0, receiverScore = 0;
    std::string server;
    std::string receiver;

    TennisGame4(std::string player1, std::string player2) {
        this->server = player1;
        this->receiver = player2;
    }

    TennisResult getResult() const override;
    void wonPoint(std::string playerName);
    bool receiverHasAdvantage() const;
    bool serverHasAdvantage() const;
    bool receiverHasWon() const;
    bool serverHasWon() const;
    bool isDeuce() const;
};

class Deuce : ResultProvider {
public:
    Deuce(TennisGame4 const & game, ResultProvider const & nextResult) : game(game), nextResult(nextResult) { }

    TennisResult getResult() const override {
        if (game.isDeuce())
            return TennisResult("Deuce", "");
        return this->nextResult.getResult();
    }

private:
    TennisGame4 const & game;
    ResultProvider const & nextResult;
};


class GameServer : public ResultProvider {
public:
    GameServer(TennisGame4 const & game, ResultProvider const & nextResult) : game(game), nextResult(nextResult) { }

    TennisResult getResult() const override {
        if (game.serverHasWon())
            return TennisResult("Win for " + game.server, "");
        return nextResult.getResult();
    }

private:
    TennisGame4 const & game;
    ResultProvider const & nextResult;
};

class GameReceiver : public ResultProvider {
private:
    TennisGame4 const & game;
    ResultProvider const & nextResult;

public:
    GameReceiver(TennisGame4 const & game, ResultProvider const & nextResult) : game(game), nextResult(nextResult) { }

public:
    TennisResult getResult() const override {
        if (game.receiverHasWon())
            return TennisResult("Win for " + game.receiver, "");
        return this->nextResult.getResult();
    }
};

class AdvantageServer : public ResultProvider {
public:
    AdvantageServer(TennisGame4 const & game, ResultProvider const & nextResult) : game(game), nextResult(nextResult) { }

    TennisResult getResult() const override {
        if (game.serverHasAdvantage())
            return TennisResult("Advantage " + game.server, "");
        return this->nextResult.getResult();
    }

private:
    TennisGame4 const & game;
    ResultProvider const & nextResult;
};

class AdvantageReceiver : public ResultProvider {
public:
    AdvantageReceiver(TennisGame4 game, ResultProvider const & nextResult) : game(game), nextResult(nextResult) { }

    TennisResult getResult() const override {
        if (game.receiverHasAdvantage())
            return TennisResult("Advantage " + game.receiver, "");
        return this->nextResult.getResult();
    }

private:
    const TennisGame4 game;
    ResultProvider const & nextResult;
};


class DefaultResult : public ResultProvider {
public:
    explicit DefaultResult(TennisGame4 const & game) : game(game) { }

    TennisResult getResult() const override {
        return TennisResult(scores[game.serverScore], scores[game.receiverScore]);
    }

private:
    static const std::string scores[];
    TennisGame4 const & game;
};

const std::string DefaultResult::scores[] = {"Love", "Fifteen", "Thirty", "Forty"};

TennisResult TennisGame4::getResult() const {
    TennisGame4 const & thisGame = *this;
    TennisResult result = Deuce(
        thisGame, GameServer(
        thisGame, GameReceiver(
        thisGame, AdvantageServer(
        thisGame, AdvantageReceiver(
        thisGame, DefaultResult(thisGame)))))
    ).getResult();
    return result;
}

void TennisGame4::wonPoint(std::string playerName) {
    if (server == playerName)
        serverScore += 1;
    else
        receiverScore += 1;
}

bool TennisGame4::receiverHasAdvantage() const {
    return receiverScore >= 4 && (receiverScore - serverScore) == 1;
}

bool TennisGame4::serverHasAdvantage() const {
    return serverScore >= 4 && (serverScore - receiverScore) == 1;
}

bool TennisGame4::receiverHasWon() const {
    return receiverScore >= 4 && (receiverScore - serverScore) >= 2;
}

bool TennisGame4::serverHasWon() const {
    return serverScore >= 4 && (serverScore - receiverScore) >= 2;
}

bool TennisGame4::isDeuce() const {
    return serverScore >= 3 && receiverScore >= 3 && (serverScore == receiverScore);
}

std::string tennis_score(int player1Score, int player2Score) {
    int highestScore = player1Score >  player2Score ? player1Score : player2Score;
    TennisGame4 game("player1", "player2");
    for (int i = 0; i < highestScore; i++) {
        if (i < player1Score)
            game.wonPoint("player1");
        if (i < player2Score)
            game.wonPoint("player2");
    }
    TennisResult result = game.getResult();
    return result.format();
}
