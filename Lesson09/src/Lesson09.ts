/*         *** Type Assertions ***

    Type assertion allows you to explicitly specify the type of a value, overriding TypeScript’s default type inference. It’s a way to tell the compiler, “I know better about this value’s type than you do.”

    * What Is Type Assertion?
    Type assertion is a mechanism in TypeScript where you explicitly declare the type of a variable or expression.
    It doesn’t change the runtime behavior; it only affects how TypeScript checks and validates types during compilation.
    
    * Why Use Type Assertion?
    TypeScript usually infers types based on context and assignments.
    However, there are situations where you, as a developer, have more knowledge about a value’s type than TypeScript can deduce.

    * Examples include:
    Porting JavaScript code to TypeScript.
    Interacting with external libraries or APIs that don’t provide type information.
    Working with dynamically typed data (e.g., parsing JSON).
    
    * Syntax:
    TypeScript provides two ways to perform type assertion:
    Using the angle bracket syntax (<type>).
    Using the as keyword.

*/  
// Using angle bracket syntax
let codeNumber: any = 1;
let idEmployee = <number>codeNumber; // Asserting that 'codeNumber' is of type number
console.log(typeof idEmployee); // Output: "number"

// Using 'as' keyword
let nameEmployee: any = "John";
let lengthName = (nameEmployee as string).length; // Asserting that 'nameLength' is a string
console.log(lengthName); // Output: 4

// Very useful, but remember that it does not change the value, it only changes what the run time compiler checks

let stringAsNumber: any = "Powerful";
let product: number = <number>stringAsNumber * 15; // The JS will try to convert the String to a Number, but it is not possible
console.log(product); // NaN
// In the end, it is still a string
