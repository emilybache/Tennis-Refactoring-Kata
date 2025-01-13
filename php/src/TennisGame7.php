<?php

namespace TennisGame;

class TennisGame7 implements TennisGame {
    private $player1Name;
    private $player2Name;
    private $player1Score = 0;
    private $player2Score = 0;

    public function __construct($player1Name, $player2Name) {
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
        $result = "Current score: ";

        if ($this->player1Score === $this->player2Score) {
            // tie score
            switch ($this->player1Score) {
                case 0:
                    $result .= "Love-All";
                    break;
                case 1:
                    $result .= "Fifteen-All";
                    break;
                case 2:
                    $result .= "Thirty-All";
                    break;
                default:
                    $result .= "Deuce";
                    break;
            }
        } elseif ($this->player1Score >= 4 || $this->player2Score >= 4) {
            // end-game score
            if ($this->player1Score - $this->player2Score === 1) {
                $result .= "Advantage " . $this->player1Name;
            } elseif ($this->player1Score - $this->player2Score === -1) {
                $result .= "Advantage " . $this->player2Name;
            } elseif ($this->player1Score - $this->player2Score >= 2) {
                $result .= "Win for " . $this->player1Name;
            } else {
                $result .= "Win for " . $this->player2Name;
            }
        } else {
            // regular score
            $result .= match ($this->player1Score) {
                0 => "Love",
                1 => "Fifteen",
                2 => "Thirty",
                default => "Forty",
            };
            $result .= "-";
            $result .= match ($this->player2Score) {
                0 => "Love",
                1 => "Fifteen",
                2 => "Thirty",
                default => "Forty",
            };
        }

        return $result . ", enjoy your game!";
    }
}
