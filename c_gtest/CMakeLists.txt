cmake_minimum_required(VERSION 3.16)
set(CMAKE_VERBOSE_MAKEFILE ON)
project(Tennis-Refactoring-Kata VERSION 1.0
        DESCRIPTION "C translation with tests in gtest")

set(CMAKE_C_STANDARD 99)

# uncomment these lines to enable coverage measurements using gcov
#set(CMAKE_CXX_FLAGS "--coverage")
#set(CMAKE_C_FLAGS "--coverage")

enable_testing()
add_subdirectory(src)
add_subdirectory(test-gtest)

