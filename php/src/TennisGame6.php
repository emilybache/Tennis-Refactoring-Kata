<?php

namespace TennisGame;

class TennisGame6 implements TennisGame {
    private $player1Name;
    private $player2Name;
    private $player1Score = 0;
    private $player2Score = 0;

    public function __construct($player1Name, $player2Name)
    {
        $this->player1Name = $player1Name;
        $this->player2Name = $player2Name;
    }

    public function wonPoint($playerName): void
    {
        if ($playerName === "player1") {
            $this->player1Score++;
        } else {
            $this->player2Score++;
        }
    }

    public function getScore(): string
    {
        $result = "";

        if ($this->player1Score == $this->player2Score) {
            // tie score
            switch ($this->player1Score) {
                case 0:
                    $result = "Love-All";
                    break;
                case 1:
                    $result = "Fifteen-All";
                    break;
                case 2:
                    $result = "Thirty-All";
                    break;
                default:
                    $result = "Deuce";
                    break;
            }
        } else if ($this->player1Score >= 4 || $this->player2Score >= 4) {
            // end-game score
            if ($this->player1Score - $this->player2Score == 1) {
                $result = "Advantage " . $this->player1Name;
            } else if ($this->player1Score - $this->player2Score == -1) {
                $result = "Advantage " . $this->player2Name;
            } else if ($this->player1Score - $this->player2Score >= 2) {
                $result = "Win for " . $this->player1Name;
            } else {
                $result = "Win for " . $this->player2Name;
            }
        } else {
            // regular score
            switch ($this->player1Score) {
                case 0:
                    $score1 = "Love";
                    break;
                case 1:
                    $score1 = "Fifteen";
                    break;
                case 2:
                    $score1 = "Thirty";
                    break;
                default:
                    $score1 = "Forty";
                    break;
            }
            switch ($this->player2Score) {
                case 0:
                    $score2 = "Love";
                    break;
                case 1:
                    $score2 = "Fifteen";
                    break;
                case 2:
                    $score2 = "Thirty";
                    break;
                default:
                    $score2 = "Forty";
                    break;
            }
            $result = $score1 . "-" . $score2;
        }

        return $result;
    }
}
