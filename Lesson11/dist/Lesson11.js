"use strict";
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function keepProcessing() {
    while (true) {
        console.log('I always do something and never end...');
    }
}
keepProcessing();
console.log('Hi, I am unreachable :)');
//# sourceMappingURL=Lesson11.js.map