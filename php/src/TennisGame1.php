<?php

namespace TennisGame;


class TennisGame1 implements TennisGame
{
    /**
     * @var Player
     */
    private $player1;

    /**
     * @var Player
     */
    private $player2;

    public function __construct($player1Name, $player2Name)
    {
        $this->player1 = new Player($player1Name);
        $this->player2 = new Player($player2Name);
    }

    public function wonPoint($playerName)
    {
        if ('player1' == $playerName) {
            $this->player1->incrementScore();
        } else {
            $this->player2->incrementScore();
        }
    }

    public function getScore(): string
    {
        $EnglishScore = [
            0 => 'Love',
            1 => 'Fifteen',// +15
            2 => 'Thirty', // +15
            3 => 'Forty',  // +10
        ];
        $maxScore = max($this->player1->getScore(), $this->player2->getScore());

        if ($this->player1->getScore() == $this->player2->getScore()) {
            $allString = '-All';
            if ($this->player1->getScore() >= 3) {
                return "Deuce";
            }
            return $EnglishScore[$this->player1->getScore()] . $allString;
        } elseif ($maxScore >= 4) {
            if ($this->player1->getScore() > $this->player2->getScore()) {
                $HasMaxScoreName = $this->player1->getName();
            } else {
                $HasMaxScoreName = $this->player2->getName();
            }
            if (abs($this->player1->getScore() - $this->player2->getScore()) == 1) {
                $score = "Advantage";
            } else {
                $score = "Win for";
            }
            $score .= ' ' . $HasMaxScoreName;
        } else {
            $score = $EnglishScore[$this->player1->getScore()] . "-" . $EnglishScore[$this->player2->getScore()];
        }
        return $score;
    }
}
