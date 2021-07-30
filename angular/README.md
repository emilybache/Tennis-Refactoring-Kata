#Tennis Kata in Angular

## How to Run Tests

1. Install [Angular](https://angular.io/guide/setup-local)
2. From this `angular` directory, on the command line run `npm i`
3. To run tests via [Karma](https://karma-runner.github.io) and Jasmine, on the command line run `ng t`
4. For even faster test feedback, add the [Wallaby](https://wallabyjs.com/) extension to your IDE

## Current Implementation Status

- Components for tennis games 1, 2, and 3 and the corresponding tests are in `src/app`
- No real html/gui functionality yet in app component or tennis game components

## Future Plans

- Implement html/gui functionality to get a score from either tennis game 1, 2, or 3
- Update unit tests to interact with DOM instead of calling class methods
