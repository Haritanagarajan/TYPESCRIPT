"use strict";
class Character {
    constructor(name, damage, speed) {
        this.name = name;
        this.damage = damage;
        this.attackSpeed = speed;
    }
}
class Goblin extends Character {
    constructor(name, damage, speed) {
        super(name, damage, speed);
    }
    damagePerSecond() {
        console.log("Name: " + this.name + " " + "\n" + "damagePerSecond: " + this.damage * this.attackSpeed);
    }
}
class Goblin1 extends Character {
    constructor(name, damage, speed) {
        super(name, damage, speed);
    }
    damagePerSecond() {
        console.log("Name: " + this.name + " " + "\n" + "damagePerSecond: " + this.damage / this.attackSpeed);
    }
}
// let c = new Character('ABC', 123, 123);//Cannot create an instance of an abstract class
// Character.damagePerSecond();
let g = new Goblin('ABC', 123, 123);
g.damagePerSecond();
let g1 = new Goblin1('ABC', 123, 123);
g1.damagePerSecond();
