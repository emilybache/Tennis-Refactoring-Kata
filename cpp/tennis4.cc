#include <string>

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

const std::string tennis_score(int player1Score, int player2Score) {
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
