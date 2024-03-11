"use strict";
const NULL_VALUE = null;
const EMPTY_TEXT = "";
const SOME_NUMBER = 42;
const ZERO = 0;
const IS_FALSE = false;
const VAL_A = NULL_VALUE !== null && NULL_VALUE !== void 0 ? NULL_VALUE : "default for A";
const VAL_B = EMPTY_TEXT !== null && EMPTY_TEXT !== void 0 ? EMPTY_TEXT : "default for B";
const VAL_C = SOME_NUMBER !== null && SOME_NUMBER !== void 0 ? SOME_NUMBER : 0;
const VAL_D = ZERO !== null && ZERO !== void 0 ? ZERO : 2;
const VAL_E = IS_FALSE !== null && IS_FALSE !== void 0 ? IS_FALSE : true;
console.log(VAL_A);
console.log(VAL_B);
console.log(VAL_C);
console.log(VAL_D);
console.log(VAL_E);
const HAS_DRIVER_LICENSE = false;
class Person {
    constructor(name, HAS_DRIVER_LICENSE) {
        this.name = name;
        this.HAS_DRIVER_LICENSE = HAS_DRIVER_LICENSE || true;
    }
}
const person1 = new Person('Jonh', false);
console.log("12");
console.log(person1.HAS_DRIVER_LICENSE);
class Person2 {
    constructor(name, HAS_DRIVER_LICENSE) {
        this.name = name;
        this.HAS_DRIVER_LICENSE = HAS_DRIVER_LICENSE !== null && HAS_DRIVER_LICENSE !== void 0 ? HAS_DRIVER_LICENSE : true;
    }
}
const person2 = new Person2('Jonh', false);
console.log(person2.HAS_DRIVER_LICENSE);
//# sourceMappingURL=Lesson08.js.map