src_files := $(wildcard *.cc)
ifeq ($(OS),Windows_NT)
exec_extension := .exe
else
exec_extension := .
endif
test_files := $(src_files:.cc=$(exec_extension))

.PHONY: test
test: ${test_files}
#	for exe in ${test_files}; do $$exe || exit; done
	./tennis1
	./tennis2
	./tennis3
	./tennis4

%$(exec_extension): %.cc
	g++ -std=c++11 -Wall -Werror -O *.cpp $< -o $@
