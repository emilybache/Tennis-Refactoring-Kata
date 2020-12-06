cmake_minimum_required(VERSION 3.11)
project(Tennis-Refactoring)

option(USE_GOOGLE_TEST "If to use google test" ON)

if (USE_GOOGLE_TEST)
    include(FetchContent)

    FetchContent_Declare(
            googletest
            GIT_REPOSITORY https://github.com/google/googletest.git
            GIT_TAG        release-1.10.0
    )

    FetchContent_GetProperties(googletest)
    if(NOT googletest_POPULATED)
        FetchContent_Populate(googletest)
        add_subdirectory(${googletest_SOURCE_DIR} ${googletest_BINARY_DIR})
    endif()

    include(GoogleTest)

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


else()

    add_definitions(-DUSE_CMAKE)
    include_directories(${CMAKE_SOURCE_DIR})

    enable_testing()
    set(trivial_test_sources all_tests.cpp all_tests.hpp test_suite.tests.cpp)

    add_executable(tennis1_tests
        tennis1.cc
        ${trivial_test_sources})
    add_test(NAME tennis1_tests COMMAND tennis1_tests)

    add_executable(tennis2_tests
        tennis2.cc
        ${trivial_test_sources})
    add_test(NAME tennis2_tests COMMAND tennis2_tests)

    add_executable(tennis3_tests
        tennis3.cc
        ${trivial_test_sources})
    add_test(NAME tennis3_tests COMMAND tennis3_tests)

endif ()