# Tennis Refactoring Kata - PHP Version

See the [top level readme](../README.md) for general information about this exercise. This is the PHP version of the
 Tennis Refactoring Kata.

## Installation

The kata uses:

- [PHP 7.2-7.4 or 8.0+](https://www.php.net/downloads.php)
- [Composer](https://getcomposer.org)

Recommended:
- [Git](https://git-scm.com/downloads)

Clone the repository

```sh
git clone git@github.com:emilybache/Tennis-Refactoring-Kata.git
```

or

```shell script
git clone https://github.com/emilybache/Tennis-Refactoring-Kata.git
```

Install all the dependencies using composer

```shell script
cd Tennis-Refactoring-Kata/php
composer install
```

Run all the tests

```shell script
composer test
```

## Dependencies

The kata uses composer to install:

- [PHPUnit](https://phpunit.de/)
- [PHPStan](https://github.com/phpstan/phpstan)
- [Easy Coding Standard (ECS)](https://github.com/symplify/easy-coding-standard) 
- [PHP CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer/wiki)

## Folders

- `src` - contains the TennisGame interface and three TennisGame classes, which need improving (see
  [top level readme](../README.md) for more information) 
- `tests` - contains the three corresponding TennisGameTests, one for each class. All the tests are passing, and
  shouldn't need to be changed.

## Testing

PHPUnit is pre-configured to run tests. PHPUnit can be run using a composer script. To run the unit tests, from the
 root of the PHP kata run:

```shell script
composer test
```

On Windows a batch file has been created, similar to an alias on Linux/Mac (e.g. `alias pu="composer test"`), the same
 PHPUnit `composer test` can be run:

```shell script
pu
```

### Tests with Coverage Report

To run all test and generate a html coverage report run:

```shell script
composer test-coverage
```

The test-coverage report will be created in /builds, it is best viewed by opening **index.html** in your browser.

## Code Standard

Easy Coding Standard (ECS) is used to check for style and code standards, **PSR-12** is used. The current code is not
 upto standard!

### Check Code

To check code, but not fix errors:

```shell script
composer check-cs
``` 

On Windows a batch file has been created, similar to an alias on Linux/Mac (e.g. `alias cc="composer check-cs"`), the
 same `composer check-cs` can be run:

```shell script
cc
```

### Fix Code

There are may code fixes automatically provided by ECS, if advised to run --fix, the following script can be run:

```shell script
composer fix-cs
```

On Windows a batch file has been created, similar to an alias on Linux/Mac (e.g. `alias fc="composer fix-cs"`), the same
 `composer fix-cs` can be run:

```shell script
fc
```

## Static Analysis

PHPStan is used to run static analysis checks.  The current code is not upto standard!

```shell script
composer phpstan
```

On Windows a batch file has been created, similar to an alias on Linux/Mac (e.g. `alias ps="composer phpstan"`), the
 same `composer phpstan` can be run:

```shell script
ps
```

**Happy coding**!
