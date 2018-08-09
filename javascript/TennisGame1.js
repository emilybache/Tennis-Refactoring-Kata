class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.m_score1 = 0;
        this.m_score2 = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint(playerName) {
        playerName === 'player1' ? this.m_score1++ : this.m_score2++
    }

    getScore() {
        let score = '';
        let tempScore = 0;
        if (this.m_score1 === this.m_score2) {           
            const equality = ['Love-All', 'Fifteen-All', 'Thirty-All', 'Deuce'];
            this.m_score1 > 3 ? score = equality[3] : score = equality[this.m_score1];
        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            const minusResult = this.m_score1 - this.m_score2;

            minusResult === 1 && (score = `Advantage player1`);
            minusResult === -1 && (score = `Advantage player2`);
            minusResult >= 2 && (score = `Win for player1`);
            minusResult <= -2 && (score = `Win for player2`);
        } else {
            for (let i = 1; i < 3; i++) {
                if (i === 1) tempScore = this.m_score1;
                else {
                    score += "-";
                    tempScore = this.m_score2;
                }

                const result = ['Love', 'Fifteen', 'Thirty', 'Forty'];
                score += result[tempScore]; 
            }
        }
        return score;
    }
};

module.exports = TennisGame1;
