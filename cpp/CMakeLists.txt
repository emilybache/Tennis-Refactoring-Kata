cmake_minimum_required(VERSION 3.11)
project(Tennis-Kata)

set(gtest_force_shared_crt ON CACHE BOOL "" FORCE)
include(FetchContent)

FetchContent_Declare(
        googletest
        GIT_REPOSITORY https://github.com/google/googletest.git
        GIT_TAG        release-1.10.0
        GIT_SHALLOW    1
)

FetchContent_GetProperties(googletest)
if(NOT googletest_POPULATED)
    FetchContent_Populate(googletest)
    add_subdirectory(${googletest_SOURCE_DIR} ${googletest_BINARY_DIR})
endif()

include(GoogleTest)
enable_testing()

add_executable(tennis1_google_test
        tennis1.cc
        gtest_all.cpp)
target_link_libraries(tennis1_google_test gtest gmock gtest_main)
target_compile_features(tennis1_google_test PUBLIC cxx_std_11)
gtest_discover_tests(tennis1_google_test)

add_executable(tennis2_google_test
        tennis2.cc
        gtest_all.cpp)
target_link_libraries(tennis2_google_test gtest gmock gtest_main)
target_compile_features(tennis2_google_test PUBLIC cxx_std_11)
gtest_discover_tests(tennis2_google_test)

add_executable(tennis3_google_test
        tennis3.cc
        gtest_all.cpp)
target_link_libraries(tennis3_google_test gtest gmock gtest_main)
target_compile_features(tennis3_google_test PUBLIC cxx_std_11)
gtest_discover_tests(tennis3_google_test)

add_executable(tennis4_google_test
        tennis4.cc
        gtest_all.cpp)
target_link_libraries(tennis4_google_test gtest gmock gtest_main)
target_compile_features(tennis4_google_test PUBLIC cxx_std_11)
gtest_discover_tests(tennis4_google_test)
