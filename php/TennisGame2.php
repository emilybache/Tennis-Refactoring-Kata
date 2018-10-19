<?php

class Player
{
    public $name;
    public $points;
    public $result = '';

    public function __construct($name, $points = 0)
    {
        $this->name = $name;
        $this->points = $points;
    }

    /**
     * @param mixed $result
     */
    public function setResult($result)
    {
        $this->result = $result;
    }

    /**
     * @return string
     */
    public function getResult()
    {
        return $this->result;
    }

    public function incrementPoints()
    {
        $this->points++;
    }
}

class TennisGame2 implements TennisGame
{
    private $player1;
    private $player2;

    private $score;

    public function __construct($player1Name, $player2Name)
    {
        $this->player1 = new Player($player1Name);
        $this->player2 = new Player($player2Name);
    }

    public function toScoreName($score)
    {
        $scoreMap = [
            0 => 'Love',
            1 => 'Fifteen',
            2 => 'Thirty',
            3 => 'Forty'
        ];

        return $scoreMap[$score];
    }

    /**
     * @return string
     * @throws Exception
     */
    public function getScore()
    {
        $this->score = "";

        $this->player1->setResult(
            $this->toScoreName($this->player1->points)
        );

        $this->player2->setResult(
            $this->toScoreName($this->player2->points)
        );

        $this->score = "{$this->player1->getResult()}-{$this->player2->getResult()}";

        if ($this->pointsAreEqual() && $this->player1->points < 4) {
            $this->score = $this->toScoreName($this->player1->points);
            $this->score .= "-All";
        }

        if ($this->pointsAreEqual() && $this->player1->points >= 3) {
            $this->score = "Deuce";
        }

        if ($this->isAdvantage()) {
            $this->score = "Advantage " . $this->getLeadingPlayer()->name;
        }

        if ($this->isGameWon()) {
            $this->score = "Win for " . $this->getLeadingPlayer()->name;
        }

        return $this->score;
    }

    public function wonPoint($player)
    {
        if ($player == "player1") {
            $this->player1->incrementPoints();
        } else {
            $this->player2->incrementPoints();
        }
    }

    /**
     * @return bool
     */
    private function pointsAreEqual()
    {
        return $this->player1->points == $this->player2->points;
    }

    /**
     * @return bool
     */
    private function isAdvantage()
    {
        $thresholdMet = ($this->player1->points >= 3 && $this->player2->points >= 3);

        return !$this->pointsAreEqual() && $thresholdMet;
    }

    /**
     * @return Player
     * @throws Exception
     */
    private function getLeadingPlayer()
    {
        if ($this->pointsAreEqual()) {
            throw new Exception('There are no leading players.');
        }

        if ($this->player1->points > $this->player2->points) {
            return $this->player1;
        }

        return $this->player2;
    }

    /**
     * @return bool
     * @throws Exception
     */
    private function isGameWon()
    {
        return $this->getPointsSpread() >= 2 && $this->getLeadingPlayer()->points >= 4;
    }

    /**
     * @return bool
     */
    private function getPointsSpread()
    {
        return abs($this->player1->points - $this->player2->points);
    }
}
