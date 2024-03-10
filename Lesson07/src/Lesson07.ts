// Defining an interface called Individual to represent a person with properties: name, age, gender, and a function introduce.
interface Individual {
    name: string, 
    age: number,
    gender: 'Male' | 'Female', // Gender of the object, accepts only 'Male' or 'Female' as a value
    introduce: () => void; // A function that introduces the individual
} 

// Creating an object 'john' of type Individual
let john: Individual = {
    name: "John",
    age: 25,
    gender: 'Male', // Assigning 'Male' as gender

    introduce: function() {
        console.log(`My name is ${this.name}, I'm ${this.age} years old and I'm a ${this.gender}`);
    }
}

// Defining a type Client with an optional property 'birthDate'.
type Client = {
    birthDate?: Date // It means that our object may have a birthDate attribute, it is optional
};

// A function that returns a Client object or null based on the id provided.
function getClient(id: number): Client | null {
    // If the id is 0, return null, otherwise return an object with the current date as birthDate.
    return id === 0 ? null : { birthDate: new Date() };
}

// Calling getClient function with id 1 and assigning the returned value to 'client'.
let client = getClient(1);

// Instead of a traditional check for null and undefined, using the optional chaining operator.
// Optional chaining operator is used to safely access nested properties without throwing errors if any property is null or undefined.
console.log(client?.birthDate?.getFullYear()); // Optional chaining operator to access birthDate and getFullYear





