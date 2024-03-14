/*          *** Never Type ***

    * Usage: 
    The never type is used in situations where you are certain that something is never going to happen. For instance, a function that will not return to its endpoint because it throws an exception or enters an infinite loop can be annotated with never 1.



*/
function throwError(errorMsg: string): never {
    // Throws an Error
    throw new Error(errorMsg);
}

function keepProcessing(): never {
    // Infinite loop
    while (true) {
        console.log('I always do something and never end...');
    }
}

keepProcessing();
console.log('Hi, I am unreachable :)');

/* 
To see the compiler saying that it is not reachable, you have to modify the tsconfig.json file from true to false:
    "allowUnreachableCode": false,

    * Where to use: 
    
    Non-Executable Code Branches: It can be used to indicate code branches that should not be executed. For example, in a switch case where all possible cases are handled, a default case that should never be reached can be annotated with never.

    Type Narrowing: Variables can acquire the type never when narrowed by type guards that can never be true. This helps TypeScript understand that certain areas of code are unreachable.
*/