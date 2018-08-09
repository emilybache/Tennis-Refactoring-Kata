class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.m_score1 = 0;
        this.m_score2 = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }

    wonPoint(playerName) {
        playerName === 'player1' ? this.m_score1++ : this.m_score2++;
    }

    getScore() {
        if (this.m_score1 === this.m_score2) {           
            const equality = ['Love-All', 'Fifteen-All', 'Thirty-All', 'Deuce'];

            return this.m_score1 > 3 ? equality[3] : equality[this.m_score1];
        } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            const minusResult = this.m_score1 - this.m_score2;
            const isWin = minusResult >= 2 || minusResult <= -2;
            const playerResult = minusResult > 0 ? 'player1' : 'player2';

            return isWin ? `Win for ${playerResult}` : `Advantage ${playerResult}`;
        } else {
            const result = ['Love', 'Fifteen', 'Thirty', 'Forty'];
            
            return `${result[this.m_score1]}-${result[this.m_score2]}`;
        }
    }
};

module.exports = TennisGame1;
