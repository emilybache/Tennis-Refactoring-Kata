<?php
declare(strict_types=1);
namespace TennisGame;

class Player
{
    private $name;
    private $score;

    public function __construct(string $name)
    {
        $this->name = $name;
        $this->score = 0;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setScore(int $score)
    {
        $this->score = $score;
    }

    public function getScore(): int
    {
        return $this->score;
    }

    public function incrementScore()
    {
        $this->score++;
    }
}