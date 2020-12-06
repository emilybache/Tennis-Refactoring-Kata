# Tennis-Refactoring-Kata C++

There are two different test runners, google-test and a simple
c-assert test runner, if working with an IDE with google test
support, such as CLion. The google-test gives a better overview
of issues. Downside is that google-test have to be obtained (by
git clone) during the cmake-setup process. The cmake option
USE_GOOGLE_TEST changes the test framework.


## Using CMake and visual studio, under Windows

Sample setup (in a Windows console, using Git), and considering
you are already located in this folder:
```
mkdir build
cd build
cmake .. -G "Visual Studio 14 2015 Win64"
Tennis-Refactoring.sln
```

Visual Studio should start with the projects in it.
You will have three different project, each one for a
specific version of initial source code (1, 2 and 3).
Tests are already complete, code is ready to refactor!
