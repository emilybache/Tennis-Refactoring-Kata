cmake_minimum_required(VERSION 3.11)
project(Tennis-Kata)

add_definitions(-DUSE_CMAKE)
include_directories(${CMAKE_SOURCE_DIR})
set (CMAKE_C_STANDARD 99)

enable_testing()
set(trivial_test_sources all_tests.cpp all_tests.hpp test_suite.tests.cpp)

add_executable(tennis1_tests
    tennis1.cc
    ${trivial_test_sources})
add_test(NAME tennis1_tests COMMAND tennis1_tests)
target_compile_features(tennis1_tests PUBLIC cxx_std_11)

add_executable(tennis2_tests
    tennis2.cc
    ${trivial_test_sources})
add_test(NAME tennis2_tests COMMAND tennis2_tests)
target_compile_features(tennis2_tests PUBLIC cxx_std_11)

add_executable(tennis3_tests
    tennis3.cc
    ${trivial_test_sources})
add_test(NAME tennis3_tests COMMAND tennis3_tests)
target_compile_features(tennis3_tests PUBLIC cxx_std_11)

add_executable(tennis4_tests
    tennis4.cc
    ${trivial_test_sources})
add_test(NAME tennis4_tests COMMAND tennis4_tests)
target_compile_features(tennis4_tests PUBLIC cxx_std_11)
