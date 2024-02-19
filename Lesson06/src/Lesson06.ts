// Union
function kgToLbs(weight: number | string): number {
    if (typeof weight === 'number') 
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
type Dog = Pet & Friendly;

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