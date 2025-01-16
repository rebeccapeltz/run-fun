function runFunctionWithArg(func, ...args) {
    if (typeof func === 'function') {
      let startTime = performance.now();
  
      try {
        result = func(...args); 
      } catch (error) {
        console.error("Error executing function:", error);
        return [null, 0]; // Return null result and 0 execution time on error
      }
  
      let endTime = performance.now();
      let executionTime = endTime - startTime;
  
      return [result, executionTime]; 
    } else {
      console.error("Error: Input is not a function.");
    }
  }
  
  module.exports = {runFunctionWithArg}
    
  