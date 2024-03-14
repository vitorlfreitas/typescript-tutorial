"use strict";
class Character {
    name;
    pointsOfLife;
    attackPower;
    defendPower;
    constructor(name, pointsOfLife, attack, defense) {
        this.name = name;
        this.pointsOfLife = pointsOfLife;
        this.attackPower = attack;
        this.defendPower = defense;
    }
    attack(enemy) {
        enemy.pointsOfLife -= this.attackPower - enemy.defendPower;
        console.log('Attacking');
    }
}
let hero = new Character('SuperMan', 100, 15, 40);
let enemy = new Character('BadGuy', 120, 20, 10);
hero.attack(enemy);
console.log(enemy.pointsOfLife + " hp");
console.log(typeof enemy);
console.log(enemy instanceof Character);
//# sourceMappingURL=Lesson12.js.map