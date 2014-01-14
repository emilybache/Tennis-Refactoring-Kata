package tennis


class TennisGame3 (val p1N : String, val p2N : String) extends TennisGame {

  var p2 : Int = 0
  var p1 : Int = 0


  def calculateScore() : String = {
    var s : String = ""
    if (p1 < 4 && p2 < 4 && !(p1 + p2 == 6)) {
      val p  =  Array("Love", "Fifteen", "Thirty", "Forty")
      s = p(p1)
      if (p1 == p2) s + "-All"  else  s + "-" + p(p2)
    } else {
      if (p1 == p2) "Deuce"
      else  {
        s = if (p1 > p2)  p1N else p2N
        if ((p1-p2)*(p1-p2) == 1) "Advantage " + s  else "Win for " + s
      }
    }
  }

  def wonPoint(playerName : String) {
    if (playerName == "player1")
      this.p1 += 1
    else
      this.p2 += 1

  }

}