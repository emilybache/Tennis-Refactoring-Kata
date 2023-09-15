namespace Tennis;

public class TennisGame4  : ITennisGame
{
    internal int ServerScore;
    internal int ReceiverScore;
    internal readonly string Server;
    internal readonly string Receiver;

    public TennisGame4(string player1Name, string player2Name)
    {
        Server = player1Name;
        Receiver = player2Name;
    }

    public void WonPoint(string playerName)
    {
        if (Server.Equals(playerName))
            ServerScore += 1;
        else
            ReceiverScore += 1;
    }

    public string GetScore()
    {
        TennisResult result = new Deuce(
            this, new GameServer(
                this, new GameReceiver(
                    this, new AdvantageServer(
                        this, new AdvantageReceiver(
                            this, new DefaultResult(this)))))).GetResult();
        return result.Format();
    }

    internal bool ReceiverHasAdvantage() {
        return ReceiverScore >= 4 && (ReceiverScore - ServerScore) == 1;
    }

    internal bool ServerHasAdvantage() {
        return ServerScore >= 4 && (ServerScore - ReceiverScore) == 1;
    }

    internal bool ReceiverHasWon() {
        return ReceiverScore >= 4 && (ReceiverScore - ServerScore) >= 2;
    }

    internal bool ServerHasWon() {
        return ServerScore >= 4 && (ServerScore - ReceiverScore) >= 2;
    }

    internal bool IsDeuce() {
        return ServerScore >= 3 && ReceiverScore >= 3 && (ServerScore == ReceiverScore);
    }
}

internal class TennisResult {
    readonly string _serverScore;
    readonly string _receiverScore;

    public TennisResult(string serverScore, string receiverScore) {
        _serverScore = serverScore;
        _receiverScore = receiverScore;
    }

    internal string Format() {
        if ("".Equals(_receiverScore))
            return _serverScore;
        if (_serverScore.Equals(_receiverScore))
            return _serverScore + "-All";
        return _serverScore + "-" + _receiverScore;
    }
}

internal interface IResultProvider {
    TennisResult GetResult();
}

internal class Deuce : IResultProvider {
    private readonly TennisGame4 _game;
    private readonly IResultProvider _nextResult;

    public Deuce(TennisGame4 game, IResultProvider nextResult) {
        _game = game;
        _nextResult = nextResult;
    }

    public TennisResult GetResult() {
        if (_game.IsDeuce())
            return new TennisResult("Deuce", "");
        return _nextResult.GetResult();
    }
}

internal class GameServer : IResultProvider {
    private readonly TennisGame4 _game;
    private readonly IResultProvider _nextResult;

    public GameServer(TennisGame4 game, IResultProvider nextResult) {
        _game = game;
        _nextResult = nextResult;
    }

    public TennisResult GetResult() {
        if (_game.ServerHasWon())
            return new TennisResult("Win for " + _game.Server, "");
        return _nextResult.GetResult();
    }
}

internal class GameReceiver : IResultProvider {
    private readonly TennisGame4 _game;
    private readonly IResultProvider _nextResult;

    public GameReceiver(TennisGame4 game, IResultProvider nextResult) {
        _game = game;
        _nextResult = nextResult;
    }

    public TennisResult GetResult() {
        if (_game.ReceiverHasWon())
            return new TennisResult("Win for " + _game.Receiver, "");
        return _nextResult.GetResult();
    }
}

internal class AdvantageServer : IResultProvider {
    private readonly TennisGame4 _game;
    private readonly IResultProvider _nextResult;

    public AdvantageServer(TennisGame4 game, IResultProvider nextResult) {
        _game = game;
        _nextResult = nextResult;
    }

    public TennisResult GetResult() {
        if (_game.ServerHasAdvantage())
            return new TennisResult("Advantage " + _game.Server, "");
        return _nextResult.GetResult();
    }
}

internal class AdvantageReceiver : IResultProvider {

    private readonly TennisGame4 _game;
    private readonly IResultProvider _nextResult;

    public AdvantageReceiver(TennisGame4 game, IResultProvider nextResult) {
        _game = game;
        _nextResult = nextResult;
    }

    public TennisResult GetResult() {
        if (_game.ReceiverHasAdvantage())
            return new TennisResult("Advantage " + _game.Receiver, "");
        return _nextResult.GetResult();
    }
}

internal class DefaultResult : IResultProvider {

    private static readonly string[] Scores = {"Love", "Fifteen", "Thirty", "Forty"};

    private readonly TennisGame4 _game;

    public DefaultResult(TennisGame4 game) {
        _game = game;
    }

    public TennisResult GetResult() {
        return new TennisResult(Scores[_game.ServerScore], Scores[_game.ReceiverScore]);
    }
}
