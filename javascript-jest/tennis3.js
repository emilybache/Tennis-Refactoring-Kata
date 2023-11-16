function getScore(p1, p2) {
    const p1N = "player1";
    const p2N = "player2";

    if (p1 < 4 && p2 < 4 && p1 + p2 < 6) {
        const points = ["Love", "Fifteen", "Thirty", "Forty"];
        const score = points[p1];

        return (p1 === p2) ? `${score}-All` : `${score}-${points[p2]}`;
    } else {
        if (p1 === p2) {
            return "Deuce";
        }

        const winningPlayer = p1 > p2 ? p1N : p2N;

        return (Math.pow(p1 - p2, 2) === 1) ? `Advantage ${winningPlayer}` : `Win for ${winningPlayer}`;
    }
}

module.exports = getScore;
