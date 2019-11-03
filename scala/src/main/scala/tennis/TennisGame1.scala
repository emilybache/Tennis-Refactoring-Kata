package tennis

final class Player (val name : String) {
  var score: Int = 0

  def incrementScoreByOne () : Unit = {
    score += 1
  }
}

final class TennisGame1 (private val player1Name : String, private val player2Name : String) extends TennisGame {
  private val player1 = new Player (player1Name)
  private val player2 = new Player (player2Name) 
  
  def wonPoint(playerName : String) : Unit = {
      if (playerName == player1.name) {
          player1.incrementScoreByOne()
      } else if (playerName == player2.name) {
          player2.incrementScoreByOne()
      } else {
          throw new Exception ("Unknown player")
      }
  }

  def calculateScore () : String = {
    true match {
      case x if x == areScoresEqual(player1.score, player2.score) => equalScoresResult(player1.score)
      case x if x == isAdvantageResult(player1.score, player2.score) => advantageResult(player1, player2)
      case _ => s"${runningScoreResult(player1.score)}-${runningScoreResult(player2.score)}"
    }
  }

  private def areScoresEqual (player1Score : Int, player2Score : Int) : Boolean = {
      player1Score == player2Score
  }

  private def isAdvantageResult (player1Score : Int, player2Score : Int) : Boolean = {
      player1Score >= 4 || player2Score >= 4
  }

  private def advantageResult (player1 : Player, player2 : Player) : String = {
      player1.score - player2.score match {
          case 1 => s"Advantage ${player1.name}"
          case -1 => s"Advantage ${player2.name}"
          case x if x >= 2 => s"Win for ${player1.name}"
          case _ => s"Win for ${player2.name}"
      }
  }

  private def equalScoresResult (score : Int) : String = {
    score match {
        case 0 =>  "Love-All"
        case 1 => "Fifteen-All"
        case 2 => "Thirty-All"
        case _ => "Deuce"

    }
  }

  private def runningScoreResult (score : Int) : String = {
    score match {
        case 0 => "Love"
        case 1 => "Fifteen"
        case 2 => "Thirty"
        case 3 => "Forty"
    }
  }

}