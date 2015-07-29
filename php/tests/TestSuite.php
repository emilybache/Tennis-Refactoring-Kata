<?php

/**
 * Test suite - Loads and runs all tests
 */
class TestSuite extends PHPUnit_Framework_TestSuite
{
    /**
     * Constructor
     */
    public function __construct()
    {
        parent::__construct();
        // Load all tests in the directory
        $path = realpath(dirname(__FILE__));
        $directory = new RecursiveDirectoryIterator($path);
        $dirIter = new RecursiveIteratorIterator($directory);
        /** @var SplFileInfo $file */
        foreach ($dirIter as $file) {
            if (!$file->isFile()) {
                continue;
            }

            $name = $file->getPathname();
            if (!preg_match('#Test\.php$#', $name)) {
                continue;
            }

            $this->addTestFile($file->getPathname());
        }
    }

    /**
     * Creates the suite.
     */
    public static function suite()
    {
        self::init();
        return new self();
    }

    static public function init()
    {
    }

}
