<?php

declare(strict_types=1);

namespace Tests;

use TennisGame\TennisGame1;

/**
 * TennisGame1 test case.
 */
class TennisGame1Test extends TestMaster
{
    /**
     * Prepares the environment before running a test.
     */
    protected function setUp(): void
    {
        parent::setUp();
        $this->game = new TennisGame1('player1', 'player2');
    }

    /**
     * @dataProvider data
     */
    public function testScores(int $score1, int $score2, string $expectedResult): void
    {
//        var_dump($score1 . ':' . $score2 . ':' . $expectedResult);
        $this->seedScores($score1, $score2);
        $this->assertSame($expectedResult, $this->game->getScore());
    }

    public function testお互い0点のときLove_Allが返ること()
    {
        $this->seedScores(0,0);
        $result = $this->game->getScore();
        // assert
        $this->assertSame( 'Love-All', $result);
    }

    public function testお互い1点のときFifteen_Allが返ること()
    {
        $this->seedScores(1,1);
        $result = $this->game->getScore();
        // assert
        $this->assertSame( 'Fifteen-All', $result);
    }

    public function testお互い2点のときThirty_Allが返ること()
    {
        $this->seedScores(2,2);
        $result = $this->game->getScore();
        // assert
        $this->assertSame( 'Thirty-All', $result);
    }

    public function testお互い3点のときDeuceが返ること()
    {
        $this->seedScores(3,3);
        $result = $this->game->getScore();
        // assert
        $this->assertSame( 'Deuce', $result);
    }

    public function testお互い4点のときDeuceが返ること()
    {
        $this->seedScores(4,4);
        $result = $this->game->getScore();
        // assert
        $this->assertSame( 'Deuce', $result);
    }

    public function testお互い5点のときDeuceが返ること()
    {
        $this->seedScores(5,5);
        $result = $this->game->getScore();
        // assert
        $this->assertSame( 'Deuce', $result);
    }
}
