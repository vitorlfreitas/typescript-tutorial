// Objects

// Blueprint or Type alias
type Employee = {
    // Attribute
    readonly id:number, // Forbid to be changed
    name: string
    // Methods
    doTask: (task: string) => void
}

let employee1: Employee = {
    id:1, 
    name: "Vitor",
    doTask: (task: string ) => {
        console.log(task + " in progress");
        
    }
};
let employee2: Employee = {
    id:1, 
    name: "Marcela",
    doTask: (task: string ) => {
        console.log(task + " in progress");
        
    }
};

employee1.doTask("Remove bugs");
console.log(employee2.name);


