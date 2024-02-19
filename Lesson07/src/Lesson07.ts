
// Literal 
interface Person {
    name: string,
    age: number,
    gender: 'Male' | 'Female', // Literal Value, it only accepts those two values
    introduce: () => void;
} 

let Vitor: Person = {
    name: "Vitor",
    age: 19,
    // gender: 'M' Throws an error since 'M' is not a valid value
    gender: 'Male', // That's OK
    introduce: function() {
        console.log(`My name is ${this.name}, I'm ${this.age} and I'm a ${this.gender}`);
        
    }
}

// Optionals
type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
/* Instead of
if (customer !== null 
    && customer !== undefined 
    && customer.birthday !== undefined) {
    console.log(customer.birthday.getFullYear());
}
*/
// Use the Optionals
// Optionals will only execute the code with the element is not null or undefined

// ? Optional Property Access Operator ?
console.log(customer?.birthday?.getFullYear());




