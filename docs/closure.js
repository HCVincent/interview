// JavaScript Closures
// In JavaScript, a closure is a function that remembers and accesses variables from an outer scope (lexical environment) even after that outer scope has completed execution. Closures occur naturally in JavaScript whenever a function is created.
// How Closures Work
// Every time a JavaScript function is invoked, a new execution context is created for that function. This includes the creation of a new lexical environment, which holds the local variables defined in the function. If a function defined inside another function is returned or otherwise remains accessible after its outer function has finished execution, it retains access to the outer function's lexical environment. This is a closure.

//Scenario 1
//Data Encapsulation and Privacy: Closures can create private variables and functions. Only the functions defined within the same closure can access these private variables.
// Here, count is private. Only increment and getCurrentCount have access to it.
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    getCurrentCount: () => count,
  };
}

const counter = createCounter();
console.log(counter.count); //undefined
counter.increment();
counter.increment();
console.log(counter.getCurrentCount()); // Outputs: 2

// Scenario 2
// Event Handlers and Callbacks: Closures are often used in event handlers and callbacks to maintain state across asynchronous operations.

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i); // Correctly logs 5,5,5,5,5
//   }, i * 100);
// }

for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i); // Correctly logs 0, 1, 2, 3, 4
  }, i * 100);
}
// Closure: The anonymous function passed to setTimeout is a closure. It "captures" or "closes over" the current value of i for each loop iteration. This is why each delayed log statement can access the correct value of i.
// State Preservation Across Asynchronous Calls: The closure in each iteration of the loop preserves the state of the variable i as it was at the moment the setTimeout was called. Without closures, the delayed functions would all reference the same i, which would be its final value after the loop finishes executing.
// Creating a New Scope per Iteration: The use of let in the loop creates a new lexical environment for each iteration. The closure created by the function inside setTimeout retains a reference to i from its specific iteration.

// Scenario 3
// Currying and Function Factories: Closures allow for the creation of function factories and currying, where a function returns another function.
function multipleCounter() {
  let count = 0; // This variable is "closed over" by the inner function

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => {
      count = 0;
      return count;
    },
    getCount: () => count,
  };
}

const myCounter = multipleCounter();
console.log(myCounter.increment()); // Outputs: 1
console.log(myCounter.increment()); // Outputs: 2
console.log(myCounter.decrement()); // Outputs: 1
console.log(myCounter.reset());

// Scenario 4
// Module Pattern: Before the introduction of ES6 modules, closures were used to create modules that could expose public methods and properties while hiding private functionality.

const myModule = (function () {
  let privateVar = "I am private";

  function getPrivateVar() {
    return `The private variable says: ${privateVar}`;
  }

  function setPrivateVar(newValue) {
    privateVar = newValue;
    return privateVar;
  }

  return {
    getPrivateVar: getPrivateVar,
    setPrivateVar: setPrivateVar,
  };
})();

console.log(myModule.getPrivateVar()); // Access to privateVar through closure
