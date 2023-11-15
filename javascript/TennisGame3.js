var TennisGame3 = function(playerName1, playerName2) {
        this.p2 = 0;
        this.p1 = 0;
    
        this.playerName1 = playerName1;
        this.playerName2 = playerName2;
};


TennisGame3.prototype.getScore = function() {
    let score;
    if ((this.p1 < 4 && this.p2 < 4) && (this.p1 + this.p2 < 6)) {
        var point = ["Love", "Fifteen", "Thirty", "Forty"];
        score = point[this.p1];
        return (this.p1 == this.p2) ? score + "-All" : score + "-" + point[this.p2];
    } else {
        if (this.p1 == this.p2)
            return "Deuce";
        score = this.p1 > this.p2 ? this.playerName1 : this.playerName2;
        return ((this.p1 - this.p2) * (this.p1 - this.p2) == 1) ? "Advantage " + score : "Win for " + score;
    }
};
    
TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName == "player1")
        this.p1 += 1;
    else
        this.p2 += 1;

};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}