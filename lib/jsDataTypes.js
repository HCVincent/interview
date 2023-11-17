// Primitive Types
// String: Represents textual data, e.g., "Hello, world!". Strings in JavaScript are immutable, which means that once a string is created, it cannot be changed.

// Number: Represents both integer and floating-point numbers, e.g., 42, 3.14. JavaScript uses double-precision floating-point format for all its numeric operations.

// BigInt: Introduced in newer versions of JavaScript to represent integers larger than 2^53 - 1, the largest number JavaScript can reliably represent with the Number type.

// Boolean: Represents a logical entity and can have two values: true and false.

// Undefined: A variable that has been declared but not assigned a value is of type undefined.

// Null: Denotes a null value. It's often used to represent the absence of a value.

// Symbol: Introduced in ES6, symbols are unique and immutable primitive values that can be used as keys for object properties.

// Reference Types (Objects)
// Object: The most basic reference type in JavaScript. An object can be seen as a collection of properties, with each property being either a primitive value or another object.

// Array: A type of object used for storing multiple values in a single variable. Arrays are zero-indexed: the first element is indexed with the number 0.

// Function: Functions are objects that have executable code associated with them. They can be passed around and used like any other object.

// Date, RegExp, etc.: JavaScript has other built-in reference types like Date for handling dates and RegExp for regular expressions.

// Differences and Key Points
// Mutability:

// Primitive types are immutable. When you change a primitive type, you create a new value.
// Reference types are mutable. Changing the contents of a reference type changes the data that the reference points to.
// Memory Allocation:

// Primitive types are stored directly in the location that the variable accesses.
// Reference types are stored in memory separately from the variable, with the variable holding a reference to the location in memory.
// Comparison:

// Primitive types are compared by their value.
// Reference types are compared by their reference (i.e., their memory address), not their actual content.
// Copy Behavior:

// Copying a variable with a primitive type creates a completely new copy of the primitive value.
// Copying a variable with a reference type only copies the reference, not the actual object. Both references point to the same object.

// NaN (Not-a-Number)
// NaN is a special value in JavaScript that represents a value that is not a number, often resulting from mathematical operations that fail to produce a valid number.
let num = 0 / 0; // Division by zero
console.log(num); // Outputs: NaN

let notANumber = parseInt("hello"); // Parsing a non-numeric string
console.log(notANumber); // Outputs: NaN

// Checking for NaN
if (isNaN(num)) {
  console.log("result is not a number"); // This will be executed
}

// null
// null is used to represent the intentional absence of any object value. It's typically used to signify that a variable should hold an object but currently does not.
// Example of null
let exampleObject = null;
console.log(exampleObject); // Outputs: null
console.log(typeof exampleObject); // Outputs: object
console.log(Object.prototype.toString.call(exampleObject)); // Outputs: null
// Why Use .call With toString
// The reason Object.prototype.toString.call is used instead of simply calling toString on an object directly is because many objects might have their own implementation of toString, which overrides the one from Object.prototype. For instance, if you call toString on an array, it will return the array elements as a string, not the type of the object:

// Use case: Initializing a variable for a later assignment
let futureObject;
futureObject = { name: "John" };
console.log(futureObject); // Outputs: { name: "John" }

// undefined
// undefined means a variable has been declared but not yet assigned a value. It's also the default return value for functions that don't explicitly return anything.
// Example of undefined
let uninitializedVariable;
console.log(uninitializedVariable); // Outputs: undefined

// Function that doesn't return a value
function noReturnValue() {}
let result = noReturnValue();
console.log(result); // Outputs: undefined
