package tennis



class TennisGame2 (val player1Name : String, val player2Name : String) extends TennisGame {

    var P1point = 0
    var P2point  = 0

    var P1res = ""
    var P2res = ""

    def calculateScore() : String = {
        var score = ""
        if (P1point == P2point && P1point < 4)
        {
            if (P1point==0)
                score = "Love"
            if (P1point==1)
                score = "Fifteen"
            if (P1point==2)
                score = "Thirty"
            score += "-All"
        }
        if (P1point==P2point && P1point>=3)
            score = "Deuce"

        if (P1point > 0 && P2point==0)
        {
            if (P1point==1)
                P1res = "Fifteen"
            if (P1point==2)
                P1res = "Thirty"
            if (P1point==3)
                P1res = "Forty"

            P2res = "Love"
            score = P1res + "-" + P2res
        }
        if (P2point > 0 && P1point==0)
        {
            if (P2point==1)
                P2res = "Fifteen"
            if (P2point==2)
                P2res = "Thirty"
            if (P2point==3)
                P2res = "Forty"

            P1res = "Love"
            score = P1res + "-" + P2res
        }

        if (P1point>P2point && P1point < 4)
        {
            if (P1point==2)
                P1res="Thirty"
            if (P1point==3)
                P1res="Forty"
            if (P2point==1)
                P2res="Fifteen"
            if (P2point==2)
                P2res="Thirty"
            score = P1res + "-" + P2res
        }
        if (P2point>P1point && P2point < 4)
        {
            if (P2point==2)
                P2res="Thirty"
            if (P2point==3)
                P2res="Forty"
            if (P1point==1)
                P1res="Fifteen"
            if (P1point==2)
                P1res="Thirty"
            score = P1res + "-" + P2res
        }

        if (P1point > P2point && P2point >= 3)
        {
            score = "Advantage player1"
        }

        if (P2point > P1point && P1point >= 3)
        {
            score = "Advantage player2"
        }

        if (P1point>=4 && P2point>=0 && (P1point-P2point)>=2)
        {
            score = "Win for player1"
        }
        if (P2point>=4 && P1point>=0 && (P2point-P1point)>=2)
        {
            score = "Win for player2"
        }
        return score
    }

    def SetP1Score(number : Int) {

        for (i <- 0 until number by 1)
        {
            P1Score()
        }

    }

    def SetP2Score(number : Int){

      for (i <- 0 until number by 1)
        {
            P2Score()
        }

    }

    def P1Score(){
        P1point += 1
    }

    def P2Score(){
        P2point +=1
    }

    def wonPoint(player : String) {
        if (player == "player1")
            P1Score()
        else
            P2Score()
    }
}