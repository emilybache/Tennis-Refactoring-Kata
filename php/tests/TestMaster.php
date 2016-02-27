<?php

abstract class TestMaster extends PHPUnit_Framework_TestCase
{
    /** @var TennisGame */
    protected $_game = null;

    /**
     * @return mixed[][]
     */
    public function data()
    {
        return array(
            '0-0' => array(0, 0, "Love-All"),
            '1-1' => array(1, 1, "Fifteen-All"),
            '2-2' => array(2, 2, "Thirty-All"),
            '3-3' => array(3, 3, "Deuce"),
            '4-4' => array(4, 4, "Deuce"),
            '1-0' => array(1, 0, "Fifteen-Love"),
            '0-1' => array(0, 1, "Love-Fifteen"),
            '2-0' => array(2, 0, "Thirty-Love"),
            '0-2' => array(0, 2, "Love-Thirty"),
            '3-0' => array(3, 0, "Forty-Love"),
            '0-3' => array(0, 3, "Love-Forty"),
            '4-0' => array(4, 0, "Win for player1"),
            '0-4' => array(0, 4, "Win for player2"),
            '2-1' => array(2, 1, "Thirty-Fifteen"),
            '1-2' => array(1, 2, "Fifteen-Thirty"),
            '3-1' => array(3, 1, "Forty-Fifteen"),
            '1-3' => array(1, 3, "Fifteen-Forty"),
            '4-1' => array(4, 1, "Win for player1"),
            '1-4' => array(1, 4, "Win for player2"),
            '3-2' => array(3, 2, "Forty-Thirty"),
            '2-3' => array(2, 3, "Thirty-Forty"),
            '4-2' => array(4, 2, "Win for player1"),
            '2-4' => array(2, 4, "Win for player2"),
            '4-3' => array(4, 3, "Advantage player1"),
            '3-4' => array(3, 4, "Advantage player2"),
            '5-4' => array(5, 4, "Advantage player1"),
            '4-5' => array(4, 5, "Advantage player2"),
            '15-14' => array(15, 14, "Advantage player1"),
            '14-15' => array(14, 15, "Advantage player2"),
            '6-4' => array(6, 4, "Win for player1"),
            '4-6' => array(4, 6, "Win for player2"),
            '16-14' => array(16, 14, "Win for player1"),
            '14-16' => array(14, 16, "Win for player2"),
        );
    }
}
