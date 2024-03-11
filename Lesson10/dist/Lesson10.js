"use strict";
/*         *** The Unknown Type ***

    * Introduction:
    The unknown type was introduced in TypeScript 3.0.
    It serves as a safer alternative to the any type.
    Unlike any, which allows any operation without type checking, unknown requires type checks or assertions before performing specific operations.

    * Purpose of unknown:
    The primary motivation behind unknown is to provide a top type (like any) that is safer by default.
    It forces developers to be more cautious when working with values of unknown types.
    
    * Assignability:
    All types are assignable to unknown.
    This means that you can assign any value to a variable of type unknown.

    * Type Checking and Operations:
    Unlike any, which allows unrestricted operations, unknown requires type checks or narrowing before performing most operations.
    You cannot perform arbitrary operations on an unknown value without first asserting or narrowing it to a more specific type.

    * Comparison with any:
    Unlike any, which provides no type safety, unknown forces you to handle type checks explicitly.
    Use unknown when you need flexibility but want to maintain type safety.
    
    * Common Use Cases:
    Parsing dynamic data (e.g., from APIs or JSON).
    Interacting with third-party libraries lacking type information.
    Implementing type-safe functions that accept various input types.
    
    * Best Practices:
    Prefer unknown over any when dealing with unknown values.
    Use type assertions (as or angle brackets) to narrow the type when necessary.

*/
let value;
// Assignments are type-correct
value = true;
value = 42;
value = "Hello World";
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
value = new TypeError();
value = Symbol("type");
// Type checks are required
if (typeof value === "string") {
    console.log(value.length); // OK
}
// Type assertion (narrowing)
const lengthValues = value.length;
console.log(length); // OK
