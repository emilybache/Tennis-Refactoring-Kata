<?php

/**
 * TennisGame1 test case.
 */
class TennisGame3Test extends TestMaster
{
    /**
     * Prepares the environment before running a test.
     */
    protected function setUp(): void
    {
        parent::setUp();
        $this->game = new TennisGame3('player1', 'player2');
    }

    /**
     * Cleans up the environment after running a test.
     */
    protected function tearDown(): void
    {
        $this->game = null;
        parent::tearDown();
    }

    /**
     * @param int $score1
     * @param int $score2
     * @param string $expectedResult
     * @dataProvider data
     */
    public function testScores($score1, $score2, $expectedResult)
    {
        $highestScore = max($score1, $score2);
        for ($i = 0; $i < $highestScore; $i++) {
            if ($i < $score1) {
                $this->game->wonPoint("player1");
            }
            if ($i < $score2) {
                $this->game->wonPoint("player2");
            }
        }
        $this->assertEquals($expectedResult, $this->game->getScore());
    }
}

