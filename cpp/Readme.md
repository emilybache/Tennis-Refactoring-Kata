# Tennis-Refactoring-Kata C++ with Google test

If working with an IDE with google test
support, such as CLion, the google-test gives a better overview
of issues. Downside is that google-test have to be obtained (by
git clone) during the cmake-setup process.

## Using CMake and Visual Studio, under Windows

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
