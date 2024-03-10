// Variables
let studentName: string = "This is a phrase";
let studentCard: number = 467_931;
let studentFee: number = 9_000.00;
let is_AllowedToUseLibrary: boolean = true;

// If we do not initialize, it will be defined as "any"
let studentLevel;

// Arrays
let numbers: number[] = [1, 2, 3, 14, 15, 20];
// let numbers: number = [1, 2, 3, 4, 5, 6, 7, '8']; Error

/* 
How to declare functions?
function name(parameterName: parameterType): returnType or void 
*/
function sum(number: number, number2: number):number {
    return number + number2;
}
function displayLine(): void {
    console.log("____________________________________");
}
function raiseNumber(n:number, m:number):number {
    let res :number = 1;
    for (let i = 0; i < m; i++) {
        res *= n;
    }

    return res;
}

/*  *** Using defaults value ***
If it is a quadratic area, we do not use the third parameter, so we can assign a default value, so the user can input only two parameter
*/
function calculateArea(height:number, width:number, depth:number = 1):number {
    return height * width * depth;

}
// Calling function
let numberRaised = raiseNumber(10, 3);
console.log(numberRaised);

let square = calculateArea(15, 20);
console.log(square);

// Tuple
let user: [string, string] = ['Vitor', 'password'];

// Enum
const enum Months {JAN = 1, FEB, MAR};
// TypeScript automatically sets the values for the next enums


