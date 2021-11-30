# Tennis-Refactoring-Kata C++ with Google test

If working with an IDE with google test
support, such as CLion, the google-test gives a better overview
of issues. Downside is that google-test has to be obtained (by
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
You will have three different projects, each one for a
specific version of initial source code (1, 2 and 3).
Tests are already complete, code is ready to refactor!

## Using CMake and Mingw, under Windows

```
mkdir build
cd build
cmake .. -G "MSYS Makefiles"
cmake --build .
ctest
```
## Using cmake under Ubuntu GNU/Linux
Make sure cmake is installed (available as a snap or in the
repositories)
```
mkdir build
cd build
cmake .. 
cmake --build .
ctest
```
If you want to use a specific makefile generator, you can 
specify it with the -G flag, just as in windows.
(cmake --help will give you a list of available generators.)