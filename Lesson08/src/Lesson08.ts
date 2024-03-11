/* Nullish Coalescing Operator (often denoted as ??) NCO

    What It Does:
    The nullish coalescing operator returns its right-hand side operand when its left-hand side operand is null or undefined.
    Otherwise, it returns the left-hand side operand itself.
    Comparison with Logical OR (||):
    The nullish coalescing operator is similar to the logical OR (||) operator, but with a crucial difference.
    The logical OR operator returns the right-hand side operand if the left operand is any falsy value, not just null or undefined.
    In contrast, the nullish coalescing operator only considers null or undefined as triggers for using the right-hand side value.
    Operator Precedence:
    The nullish coalescing operator has the fifth-lowest operator precedence.
    It is directly lower than || and directly higher than the conditional (ternary) operator.
Examples: */ 

const NULL_VALUE = null;
const EMPTY_TEXT = "";
const SOME_NUMBER = 42;
const ZERO = 0;
const IS_FALSE = false;

// The JavaScript code: (const VAL_A = NULL_VALUE !== null && NULL_VALUE !== void 0 ? NULL_VALUE : "default for A";)
const VAL_A = NULL_VALUE ?? "default for A"; // Returns "default for A"
const VAL_B = EMPTY_TEXT ?? "default for B"; // Returns "" (empty string is not null or undefined)
const VAL_C = SOME_NUMBER ?? 0; // Returns 42
const VAL_D = ZERO ?? 2; // Returns 0 (0 is not null or undefined)
const VAL_E = IS_FALSE ?? true; // Returns false

console.log(VAL_A);
console.log(VAL_B);
console.log(VAL_C);
console.log(VAL_D);
console.log(VAL_E);

// Examples comparing OR to NCO

const HAS_DRIVER_LICENSE = false;

class Person {
    name: string;
    HAS_DRIVER_LICENSE: boolean;

    constructor(name: string, HAS_DRIVER_LICENSE?: boolean) {
        this.name = name;
        this.HAS_DRIVER_LICENSE = HAS_DRIVER_LICENSE || true;
    }
}

const person1 = new Person('Jonh', false);
console.log("12");

console.log(person1.HAS_DRIVER_LICENSE); // The output would be 'true', because false is a falsey value

class Person2 {
    name: string;
    HAS_DRIVER_LICENSE: boolean;

    constructor(name: string, HAS_DRIVER_LICENSE?: boolean) {
        this.name = name;
        this.HAS_DRIVER_LICENSE = HAS_DRIVER_LICENSE ?? true;
    }
}

const person2 = new Person2('Jonh', false)
console.log(person2.HAS_DRIVER_LICENSE); // The output would be 'false', because now it is only waiting for null or undefined
/* 
Avoiding Pitfalls:
Previously, the logical OR operator (||) was commonly used to assign default values to variables.
However, it could lead to unexpected behavior if you considered other falsy values (like 0, '', or NaN) as valid.
The nullish coalescing operator avoids this pitfall by focusing only on null or undefined.
In summary, use the nullish coalescing operator when you specifically want to handle null or undefined cases without unintentionally treating other falsy values as triggers for default values. */