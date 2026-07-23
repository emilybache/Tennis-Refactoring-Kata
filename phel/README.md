# Tennis Refactoring Kata - Phel Version

See the [top level readme](../README.md) for general information about this exercise.
This is the [Phel](https://phel-lang.org) version — a functional Lisp that compiles to PHP.

## Installation

The kata uses:

- [PHP 8.2+](https://www.php.net/downloads.php)
- [Composer](https://getcomposer.org)

Clone the repository and install dependencies:

```sh
git clone git@github.com:emilybache/Tennis-Refactoring-Kata.git
cd Tennis-Refactoring-Kata/phel
composer install
```

## Running the tests

```sh
composer test          # alias for: vendor/bin/phel test
```

There are 33 test cases covering every interesting score combination. They all
pass, and you should not need to change them — run them often as you refactor.

## Running the demo

```sh
composer start         # alias for: vendor/bin/phel run src/main.phel
```

## Folders

- `src/game1.phel` — the `TennisGame1` port. This is the code that needs
  improving. It is a faithful, deliberately messy port of the classic version
  (three-way branch, magic numbers, a manual separator loop). Refactor it while
  keeping the tests green.
- `src/main.phel` — a tiny runnable demo.
- `tests/game1_test.phel` — the score table and test runner. Passing; don't change.

## The exercise

The Phel port keeps the same behaviour and the same smells as the other language
versions, so the refactoring is the same challenge in a Lisp: pull the score
naming out of the branch, name the magic `4`, and replace the index loop with a
straight lookup. Let the tests catch every misstep.

**Happy coding**!
