// Do you know what is a Object-Oriented Programming?

// If you do, continue the tutorial :)

// Let's see how to create a class in TS
class Character {
    // Attributes
    name: string;
    pointsOfLife: number;
    attackPower: number;
    defendPower: number;

    // Constructor
    constructor(name:string, pointsOfLife: number, attack: number, defense: number) {
        this.name = name;
        this.pointsOfLife = pointsOfLife;
        this.attackPower = attack;
        this.defendPower = defense;
    }

    // Methods
    attack (enemy: Character) {

        // Simple example]
        enemy.pointsOfLife -= this.attackPower - enemy.defendPower;
        console.log('Attacking');
    }

} // End of the Class

// Creating objects
let hero = new Character('SuperMan', 100, 15, 40);
let enemy = new Character('BadGuy', 120, 20, 10);

hero.attack(enemy);
console.log(enemy.pointsOfLife + " hp");

// If you want to see what is the type of our objects use this command
console.log(typeof enemy); // object

// To check if the object is part of an instance of a class
console.log(enemy instanceof Character); // true
