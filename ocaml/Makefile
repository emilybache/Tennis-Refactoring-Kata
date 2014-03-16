
.SUFFIXES:
.PHONY: build clean test

test: build
	./test.native

build:
	ocamlbuild -tag annot,debug test.native

clean:
	ocamlbuild -clean
