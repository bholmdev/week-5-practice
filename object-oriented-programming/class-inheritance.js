class Monster {
    constructor(type, color) {
        this.type = type;
        this.color = color;
        this.isScary = true;
    }
    roar() {
        console.log(`The ${this.color} ${this.type} lets out a tremendous roar!`);
    }
}

class Dragon extends Monster {
    constructor(type, color, element) {
        super(type, color);
        this.element = element;
    }
    fly() {
        console.log(`The ${this.color} ${this.element} ${this.type} flaps it's wings and begins to fly.`);
    }
}

class Werewolf extends Monster {
    constructor(type, color) {
        super(type, color);
    }
    howl() {
        console.log(`The ${this.type} howls loudly!`);
    }
}

const dragon1 = new Dragon("dragon", "blue", "water");
dragon1.roar();
dragon1.fly();
console.log(dragon1.isScary);
//dragon1.howl();  does not have the howl() method

const monster1 = new Monster("monster", "green");
monster1.roar();
console.log(monster1.isScary);
//monster1.fly();  does not have the fly() method
//monster1.howl();  does not have the howl() method

const werewolf1 = new Werewolf("werewolf", "gray");
werewolf1.roar();
console.log(werewolf1.isScary);
werewolf1.howl();
//werewolf1.fly();  does not have the fly() method
