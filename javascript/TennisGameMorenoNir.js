var TennisGameMorenoNir = function(player1Name, player2Name) {
  this.player1_score = 0;
  this.player2_score = 0;

  this.player1_name = player1Name;
  this.player2_name = player2Name;

};

TennisGameMorenoNir.prototype.wonPoint = function(playerName) {
  if (playerName === this.player1_name) {
    ++this.player1_score;
  }
  else if(playerName === this.player2_name) {
    ++this.player2_score;
  }
};

TennisGameMorenoNir.prototype.getScore = function() {
  var scoreToTitleArray = ["Love", "Fifteen", "Thirty", "Forty"];

  if ( (this.player1_score < 4 && this.player2_score < 4) && (this.player1_score + this.player2_score < 6) ){
    if(this.player1_score === this.player2_score){
      return scoreToTitleArray[this.player1_score] + '-All'
    }
    else{
      return scoreToTitleArray[this.player1_score] + '-' + scoreToTitleArray[this.player2_score];
    }
  }
  else{
    if(this.player1_score === this.player2_score){
      return 'Deuce';
    }
    else if (Math.abs(this.player1_score - this.player2_score) === 1){
      return 'Advantage ' + ( (this.player1_score > this.player2_score) ? this.player1_name : this.player2_name );
    }
    else{
      return "Win for " + ( (this.player1_score > this.player2_score) ? this.player1_name : this.player2_name);
    }
  }
};

if (typeof window === "undefined") {
  module.exports = TennisGameMorenoNir;
}