<?php
declare(strict_types=1);

namespace Tests;

use TennisGame\TennisGame7;

class TennisGame7Test extends TestMaster {

    protected function setUp(): void
    {
        parent::setUp();
        $this->game = new TennisGame7('player1', 'player2');
    }

    /**
     * @dataProvider data
     */
    public function testScores(int $score1, int $score2, string $expectedResult): void
    {
        $this->seedScores($score1, $score2);
        $this->assertSame("Current score: " . $expectedResult . ", enjoy your game!", $this->game->getScore());
    }
}