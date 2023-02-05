package tennis

import org.junit.Assert._
import org.junit.Test
import org.junit.runner.RunWith
import org.junit.runners.Parameterized
import org.junit.runners.Parameterized.Parameters
import tennis.TennisTest.{player1Name, player2Name}

import java.util
import scala.util.Random

@RunWith(classOf[Parameterized])
class TennisTest(params: TennisTestCase) {

  def checkScores(game: TennisGame) {
    val highestScore = Math.max(params.player1Score, params.player2Score)
      for (i <- 0 until highestScore by 1) {
          if (i < params.player1Score)
              game.wonPoint(player1Name)
          if (i < params.player2Score)
              game.wonPoint(player2Name)
      }
      assertEquals(params.expectedScore, game.calculateScore())
  }

  @Test
  def checkGame1() {
      val game = new TennisGame1(player1Name, player2Name)
      checkScores(game)
  }

  @Test
  def checkGame2() {
      val game = new TennisGame2(player1Name, player2Name)
      checkScores(game)
  }


  @Test
  def checkGame3() {
      val game = new TennisGame3(player1Name, player2Name)
      checkScores(game)
  }

}

object TennisTest {
  val player1Name = "player1-" + aRandomString
  val player2Name = "player2-" + aRandomString
  
  @Parameters(name = "{0}")
  def getAllScores() : java.util.Collection[Array[TennisTestCase]] = {
      var list = new util.ArrayList[Array[TennisTestCase]]();

      val args = Array(
        new TennisTestCase( 0, 0, "Love-All"),
        new TennisTestCase( 1, 1, "Fifteen-All" ),
        new TennisTestCase( 2, 2, "Thirty-All"),
        new TennisTestCase( 3, 3, "Deuce"),
        new TennisTestCase( 4, 4, "Deuce"),

        new TennisTestCase( 1, 0, "Fifteen-Love"),
        new TennisTestCase( 0, 1, "Love-Fifteen"),
        new TennisTestCase( 2, 0, "Thirty-Love"),
        new TennisTestCase( 0, 2, "Love-Thirty"),
        new TennisTestCase( 3, 0, "Forty-Love"),
        new TennisTestCase( 0, 3, "Love-Forty"),
        new TennisTestCase( 4, 0, s"Win for $player1Name"),
        new TennisTestCase( 0, 4, s"Win for $player2Name"),

        new TennisTestCase( 2, 1, "Thirty-Fifteen"),
        new TennisTestCase( 1, 2, "Fifteen-Thirty"),
        new TennisTestCase( 3, 1, "Forty-Fifteen"),
        new TennisTestCase( 1, 3, "Fifteen-Forty"),
        new TennisTestCase( 4, 1, s"Win for $player1Name"),
        new TennisTestCase( 1, 4, s"Win for $player2Name"),

        new TennisTestCase( 3, 2, "Forty-Thirty"),
        new TennisTestCase( 2, 3, "Thirty-Forty"),
        new TennisTestCase( 4, 2, s"Win for $player1Name"),
        new TennisTestCase( 2, 4, s"Win for $player2Name"),

        new TennisTestCase( 4, 3, s"Advantage $player1Name"),
        new TennisTestCase( 3, 4, s"Advantage $player2Name"),
        new TennisTestCase( 5, 4, s"Advantage $player1Name"),
        new TennisTestCase( 4, 5, s"Advantage $player2Name"),
        new TennisTestCase( 15, 14, s"Advantage $player1Name"),
        new TennisTestCase( 14, 15, s"Advantage $player2Name"),

        new TennisTestCase( 6, 4, s"Win for $player1Name"),
        new TennisTestCase( 4, 6, s"Win for $player2Name"),
        new TennisTestCase( 16, 14, s"Win for $player1Name"),
        new TennisTestCase( 14, 16, s"Win for $player2Name")
     )
     args.foreach(n => list.add(Array(n)))
     return list
  }

  private def aRandomString = {
    Random.nextInt(1000).toString
  }
}
