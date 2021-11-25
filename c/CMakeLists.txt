cmake_minimum_required(VERSION 3.14)
project(Tennis-Kata LANGUAGES C)
set (CMAKE_C_STANDARD 99)

enable_testing()

include(FetchContent)
FetchContent_Declare(
        cmocka
        GIT_REPOSITORY https://git.cryptomilk.org/projects/cmocka.git
        GIT_TAG        cmocka-1.1.5
        GIT_SHALLOW    1
        TLS_VERIFY     false
)
set(WITH_STATIC_LIB ON CACHE BOOL "CMocka: Build with a static library" FORCE)
set(WITH_EXAMPLES OFF CACHE BOOL "CMocka: Build examples" FORCE)
set(UNIT_TESTING OFF CACHE BOOL "CMocka: Build with unit testing" FORCE)
set(PICKY_DEVELOPER OFF CACHE BOOL "CMocka: Build with picky developer flags" FORCE)
FetchContent_MakeAvailable(cmocka)

add_executable(TennisGame1Test TennisTest.c TennisGame.h TennisGame1.c)
target_link_libraries(TennisGame1Test cmocka-static)
add_test(TennisGame1Test TennisGame1Test)

add_executable(TennisGame2Test TennisTest.c TennisGame.h TennisGame2.c TennisGame2.h)
target_link_libraries(TennisGame2Test cmocka-static)
add_test(TennisGame2Test TennisGame2Test)

add_executable(TennisGame3Test TennisTest.c TennisGame.h TennisGame3.c)
target_link_libraries(TennisGame3Test cmocka-static)
add_test(TennisGame3Test TennisGame3Test)
