import { TennisGame } from './TennisGame';

export class TennisGame4  implements TennisGame {

    public server : string;
    public receiver : string;
    public serverScore: number;
    public receiverScore: number;

    constructor(player1: string, player2: string) {
        this.server = player1;
        this.receiver = player2;
        this.serverScore = 0;
        this.receiverScore = 0;
    }

    getScore() {
        let result = new Deuce(
            this, new GameServer(
                this, new GameReceiver(
                    this, new AdvantageServer(
                        this, new AdvantageReceiver(
                            this, new DefaultResult(this)))))).getResult();
        return result.format();
    }

    receiverHasAdvantage() {
        return this.receiverScore >= 4 && (this.receiverScore - this.serverScore) === 1;
    }

    serverHasAdvantage() {
        return this.serverScore >= 4 && (this.serverScore - this.receiverScore) === 1;
    }

    receiverHasWon() {
        return this.receiverScore >= 4 && (this.receiverScore - this.serverScore) >= 2;
    }

    serverHasWon() {
        return this.serverScore >= 4 && (this.serverScore - this.receiverScore) >= 2;
    }

    isDeuce() {
        return this.serverScore >= 3 && this.receiverScore >= 3 && (this.serverScore === this.receiverScore);
    }

    wonPoint(playerName: string): void {
        if (playerName === 'player1')
            this.serverScore += 1;
        else
            this.receiverScore += 1;
    }
}

class TennisResult {
    private serverScore: string;
    private receiverScore: string;
    constructor(serverScore: string, receiverScore: string) {
        this.serverScore = serverScore;
        this.receiverScore = receiverScore;
    }

    format() {
        if ("" === this.receiverScore) {
            return this.serverScore;
        }
        if (this.serverScore === this.receiverScore) {
            return this.serverScore + "-All";
        }
        return this.serverScore + "-" + this.receiverScore;
    }
}

class Deuce {
    private game: TennisGame4;
    private nextResult: GameServer;
    constructor(game: TennisGame4, nextResult: GameServer) {
        this.game = game;
        this.nextResult = nextResult;
    }

    getResult() {
        if (this.game.isDeuce()) {
            return new TennisResult("Deuce", "");
        }
        return this.nextResult.getResult();
    }
}

class GameServer {
    private game: TennisGame4;
    private nextResult: GameReceiver;
    constructor(game: TennisGame4, nextResult: GameReceiver) {
        this.game = game;
        this.nextResult = nextResult;
    }

    getResult() {
        if (this.game.serverHasWon()) {
            return new TennisResult("Win for " + this.game.server, "");
        }
        return this.nextResult.getResult();
    }
}

class GameReceiver {
    private game: TennisGame4;
    private nextResult: AdvantageServer;
    constructor(game: TennisGame4, nextResult: AdvantageServer) {
        this.game = game;
        this.nextResult = nextResult;
    }

    getResult() {
        if (this.game.receiverHasWon()) {
            return new TennisResult("Win for " + this.game.receiver, "");
        }
        return this.nextResult.getResult();
    }
}

class AdvantageServer {
    private game: TennisGame4;
    private nextResult: AdvantageReceiver;
    constructor(game: TennisGame4, nextResult: AdvantageReceiver) {
        this.game = game;
        this.nextResult = nextResult;
    }

    getResult() {
        if (this.game.serverHasAdvantage()) {
            return new TennisResult("Advantage " + this.game.server, "");
        }
        return this.nextResult.getResult();
    }
}

class AdvantageReceiver {
    private game: TennisGame4;
    private nextResult: DefaultResult;
    constructor(game: TennisGame4, nextResult: DefaultResult) {
        this.game = game;
        this.nextResult = nextResult;
    }


    getResult() {
        if (this.game.receiverHasAdvantage()) {
            return new TennisResult("Advantage " + this.game.receiver, "");
        }
        return this.nextResult.getResult();
    }
}

class DefaultResult {
    private scores: string[];
    private game: TennisGame4;
    constructor(game: TennisGame4) {
        this.scores = ["Love", "Fifteen", "Thirty", "Forty"];
        this.game = game;
    }

    getResult() {
        return new TennisResult(this.scores[this.game.serverScore], this.scores[this.game.receiverScore]);
    }
}
