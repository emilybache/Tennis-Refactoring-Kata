# Tennis in [Go](http://golang.org/)

## Installation for newer versions of Go

Newer versions support go modules. In that case the subdirectory 'tenniskata' is a go module and you can just use it as is.

## Installation for older versions of Go

Assuming you have a proper [workspace](http://golang.org/doc/code.html#Workspaces) set up, run
```
go get github.com/[user]/Tennis-Refactoring-Kata/go/tenniskata
```
on the command line, with ```[user]``` replaced with a valid username.

## Running Tests

On the command line, enter the ```.../Tennis-Refactoring-Kata/go``` directory and run
```
go test ./...
```
