// Union types
function kgToLbs(weight: number | string): number {
    // It means that the variable weight is either a string or a number
    if (typeof weight === 'number') 
    // We use the typeof to say to TypeScript which type it is, doing that, it helps us with an intellisense
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

// Intersection
type Pet = {
    name: string,
    age: number,
    eat: () => void,
    drink: () => void
};
type Friendly = {
    pet: () => void
}
// My Object Dog is a Pet and Friendly
type Dog = Pet & Friendly; // Intersection

let myDog: Dog = {
    name: "Rex",
    age: 1,
    eat() {
        console.log("Eating...");
        
    },
    drink() {
        console.log("Drinking...");
        
    },
    pet() {
        console.log("Playing...");
        
    },
}
// Compile the code to see the output