<?php

/**
 * TennisGame1 test case.
 */
class TennisGame2Test extends TestMaster
{
    /**
     * Prepares the environment before running a test.
     */
    protected function setUp(): void
    {
        parent::setUp();
        $this->game = new TennisGame2('player1', 'player2');
    }

    /**
     * @param int $score1
     * @param int $score2
     * @param string $expectedResult
     * @dataProvider data
     */
    public function testScores($score1, $score2, $expectedResult)
    {
        $this->seedScores($score1, $score2);
        $this->assertEquals($expectedResult, $this->game->getScore());
    }
}

