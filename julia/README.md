# Tennis in [Julia](https://julialang.org/)

## Installation

Start the Julia REPL with the current directory as project root.
```
julia --project=@.
```

Once you are in REPL, use the `Pkg` module to download the project's dependencies (the `Test` module).
```julia
using Pkg

Pkg.instantiate()
```

## Running Tests

Using the Julia REPL, use the `Pkg` module to run the tests.
```Julia
using Pkg

Pkg.test()
```
