# fun_run:  

DEPRECATED DO TO INCORRECT NAMING OF THE NPM PACKAGE

LOOK FOR run-fun FOR A CORRECTED NAME

![not maintained](https://img.shields.io/badge/maintained%3F-no!-red.svg)





A package that provides a wrapper and timer around a function

The package includes a function, `runFunctionWithArg(func, ...args)` that runs the 
function named in the parameter `func`.  If there are arguments for the function,
they are passed as comma separated values after the name of the function.

The function returns an array with the result of the function first and the execution time in milliseconds last.

## Usage

Import the package

```
const run_fun = require("run_fun");
```

Define the function that you want to run.

```
function add(x, y)
    return x + 1
```

Call the function as a parameter to `runFunctionWithArg`

```
const [result, executionTime] = run_fun.runFunctionWithArg(add,3,2);
```

See `test/script.js` for a sample test


