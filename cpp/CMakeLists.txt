project(Tennis-Refactoring)

add_definitions(-DUSE_CMAKE)
include_directories(${CMAKE_SOURCE_DIR})

add_executable(tennis1_tests tennis1.cc all_tests.cpp all_tests.hpp test_suite.tests.cpp)
add_executable(tennis2_tests tennis2.cc all_tests.cpp all_tests.hpp test_suite.tests.cpp)
add_executable(tennis3_tests tennis3.cc all_tests.cpp all_tests.hpp test_suite.tests.cpp)

