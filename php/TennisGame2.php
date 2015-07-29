<?php

class TennisGame2 implements TennisGame
{
    private $P1point = 0;
    private $P2point = 0;

    private $P1res = "";
    private $P2res = "";
    private $player1Name = "";
    private $player2Name = "";

    public function __construct($player1Name, $player2Name)
    {
        $this->player1Name = $player1Name;
        $this->player2Name = $player2Name;
    }

    public function getScore()
    {
        $score = "";
        if ($this->P1point == $this->P2point && $this->P1point < 4) {
            if ($this->P1point == 0) {
                $score = "Love";
            }
            if ($this->P1point == 1) {
                $score = "Fifteen";
            }
            if ($this->P1point == 2) {
                $score = "Thirty";
            }
            $score .= "-All";
        }

        if ($this->P1point == $this->P2point && $this->P1point >= 3) {
            $score = "Deuce";
        }

        if ($this->P1point > 0 && $this->P2point == 0) {
            if ($this->P1point == 1) {
                $this->P1res = "Fifteen";
            }
            if ($this->P1point == 2) {
                $this->P1res = "Thirty";
            }
            if ($this->P1point == 3) {
                $this->P1res = "Forty";
            }

            $this->P2res = "Love";
            $score = "{$this->P1res}-{$this->P2res}";
        }

        if ($this->P2point > 0 && $this->P1point == 0) {
            if ($this->P2point == 1) {
                $this->P2res = "Fifteen";
            }
            if ($this->P2point == 2) {
                $this->P2res = "Thirty";
            }
            if ($this->P2point == 3) {
                $this->P2res = "Forty";
            }
            $this->P1res = "Love";
            $score = "{$this->P1res}-{$this->P2res}";
        }

        if ($this->P1point > $this->P2point && $this->P1point < 4) {
            if ($this->P1point == 2) {
                $this->P1res = "Thirty";
            }
            if ($this->P1point == 3) {
                $this->P1res = "Forty";
            }
            if ($this->P2point == 1) {
                $this->P2res = "Fifteen";
            }
            if ($this->P2point == 2) {
                $this->P2res = "Thirty";
            }
            $score = "{$this->P1res}-{$this->P2res}";
        }

        if ($this->P2point > $this->P1point && $this->P2point < 4) {
            if ($this->P2point == 2) {
                $this->P2res = "Thirty";
            }
            if ($this->P2point == 3) {
                $this->P2res = "Forty";
            }
            if ($this->P1point == 1) {
                $this->P1res = "Fifteen";
            }
            if ($this->P1point == 2) {
                $this->P1res = "Thirty";
            }
            $score = "{$this->P1res}-{$this->P2res}";
        }

        if ($this->P1point > $this->P2point && $this->P2point >= 3) {
            $score = "Advantage player1";
        }

        if ($this->P2point > $this->P1point && $this->P1point >= 3) {
            $score = "Advantage player2";
        }

        if ($this->P1point >= 4 && $this->P2point >= 0 && ($this->P1point - $this->P2point) >= 2) {
            $score = "Win for player1";
        }

        if ($this->P2point >= 4 && $this->P1point >= 0 && ($this->P2point - $this->P1point) >= 2) {
            $score = "Win for player2";
        }

        return $score;
    }

    private function SetP1Score($number)
    {
        for ($i = 0; $i < $number; $i++) {
            $this->P1Score();
        }
    }

    private function SetP2Score($number)
    {
        for ($i = 0; $i < $number; $i++) {
            $this->P2Score();
        }
    }

    private function P1Score()
    {
        $this->P1point++;
    }

    private function P2Score()
    {
        $this->P2point++;
    }

    public function wonPoint($player)
    {
        if ($player == "player1") {
            $this->P1Score();
        } else {
            $this->P2Score();
        }
    }
}
