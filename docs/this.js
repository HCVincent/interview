// // In JavaScript, this is a keyword that refers to the object it belongs to. It acts as a reference to the context in which the current code is executing. Understanding how this behaves in different scenarios is crucial for writing effective JavaScript code, especially in object-oriented programming.

// // Context-Based Behavior
// // 1.Global Context:

// // In the global execution context (outside of any function), this refers to the global object.
// // In a browser, the global object is window, so this in a global context typically refers to window.
// // console.log(this === window); // true in a browser environment

// // 2.Function Context:

// // In a regular function call, this refers to the global object (in non-strict mode) or undefined (in strict mode).
// // This behavior changes when using methods like call, apply, or bind, which explicitly set the value of this.
// function myFunction() {
//   return this;
// }

// console.log(myFunction()); // window in non-strict mode, undefined in strict mode

// // 3.Object Methods:

// // When a function is called as a method of an object, this refers to the object the method is called on.
// const myObject = {
//   method: function () {
//     return this;
//   },
// };

// console.log(myObject.method() === myObject); // true

// // 4.Constructor Functions:

// // In a constructor function, this refers to the newly created object instance.
// function MyConstructor() {
//   this.myProperty = "value";
// }

// const myInstance = new MyConstructor();
// console.log(myInstance.myProperty); // 'value'

// // 5.Arrow Functions:

// // Arrow functions do not have their own this context; instead, they inherit this from the parent scope at the time they are defined. This is a key feature that differentiates arrow functions from regular functions.
// const arrowObject = {
//   myMethod: function () {
//     return () => this;
//   },
// };

// const myMethod = arrowObject.myMethod();
// console.log(myMethod() === arrowObject); // true

// // Key Points
// // Dynamic Context: The value of this can change depending on how the function is called. It's not bound to the function itself.
// // Explicit Binding: Using .call(), .apply(), or .bind() methods can explicitly set the value of this.
// // Arrow Functions: They don't have their own this context, making them useful for scenarios where you want to retain the this value from the surrounding context (like in callbacks).
// // Use in Classes: In ES6 classes, this refers to the instance of the class.

var a = 1;
function fun1() {
  a = 2;
  console.log(this)
  console.log(this.a + a);
}

function func2() {
  var a = 10;
  fun1();
}

func2();
