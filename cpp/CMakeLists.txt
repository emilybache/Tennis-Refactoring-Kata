cmake_minimum_required(VERSION 3.14)
project(Tennis-Kata)

include(FetchContent)
include(GoogleTest)

set(CMAKE_CXX_STANDARD 14)
set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)

FetchContent_Declare(
        googletest
        URL https://github.com/google/googletest/archive/6b63c98ac43efc992122f1da12aaf0a0e0658206.zip
        GIT_SHALLOW    1
)
FetchContent_MakeAvailable(googletest)

enable_testing()

add_executable(tennis1_google_test
        tennis1.cc
        gtest_all.cpp)
target_link_libraries(tennis1_google_test GTest::gtest_main)
gtest_discover_tests(tennis1_google_test)

add_executable(tennis2_google_test
        tennis2.cc
        gtest_all.cpp)
target_link_libraries(tennis2_google_test GTest::gtest_main)
gtest_discover_tests(tennis2_google_test)

add_executable(tennis3_google_test
        tennis3.cc
        gtest_all.cpp)
target_link_libraries(tennis3_google_test GTest::gtest_main)
gtest_discover_tests(tennis3_google_test)

add_executable(tennis4_google_test
        tennis4.cc
        gtest_all.cpp)
target_link_libraries(tennis4_google_test GTest::gtest_main)
gtest_discover_tests(tennis4_google_test)