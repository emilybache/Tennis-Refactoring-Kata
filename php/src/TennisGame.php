<?php

declare(strict_types=1);

namespace TennisGame;

interface TennisGame
{
    public function wonPoint(string $playerName): void;

    public function getScore(): string;
}
