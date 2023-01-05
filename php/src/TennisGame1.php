<?php

declare(strict_types=1);

namespace TennisGame;

class TennisGame1 implements TennisGame
{
    private int $m_score1 = 0;

    private int $m_score2 = 0;

    public function __construct(
        private string $player1Name,
        private string $player2Name
    ) {
    }

    public function wonPoint(string $playerName): void
    {
        if ($playerName === 'player1') {
            $this->m_score1++;
        } else {
            $this->m_score2++;
        }
    }

    public function getScore(): string
    {
        $score = '';
        if ($this->m_score1 === $this->m_score2) {
            $score = match ($this->m_score1) {
                0 => 'Love-All',
                1 => 'Fifteen-All',
                2 => 'Thirty-All',
                default => 'Deuce',
            };
        } elseif ($this->m_score1 >= 4 || $this->m_score2 >= 4) {
            $minusResult = $this->m_score1 - $this->m_score2;
            if ($minusResult === 1) {
                $score = 'Advantage player1';
            } elseif ($minusResult === -1) {
                $score = 'Advantage player2';
            } elseif ($minusResult >= 2) {
                $score = 'Win for player1';
            } else {
                $score = 'Win for player2';
            }
        } else {
            for ($i = 1; $i < 3; $i++) {
                if ($i === 1) {
                    $tempScore = $this->m_score1;
                } else {
                    $score .= '-';
                    $tempScore = $this->m_score2;
                }
                switch ($tempScore) {
                    case 0:
                        $score .= 'Love';
                        break;
                    case 1:
                        $score .= 'Fifteen';
                        break;
                    case 2:
                        $score .= 'Thirty';
                        break;
                    case 3:
                        $score .= 'Forty';
                        break;
                }
            }
        }
        return $score;
    }
}
