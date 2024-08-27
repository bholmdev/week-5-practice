const dragon1 = {
    color: "red",
    maxHP: 1000
};
console.log(dragon1);
console.log(dragon1.color);
console.log(dragon1.maxHP);
//or
console.log(dragon1["color"]);
console.log(dragon1["maxHP"]);

const dragon2 = {
    color: "blue",
    maxHP: 1000,
    roar() {
        console.log("The blue dragon roars ferociously.");
    }
};
dragon2.roar();

//before es6
const dragon3 = {
    color: "black",
    maxHP: 1000,
    roar: function() {
        console.log("The black dragon roars ferociously.");
    }
};
dragon3.roar();

//add elements
dragon1.element = "fire";
dragon1.color = "crimson"
console.log(dragon1);

//add update methods
dragon1.attack = function() {
    console.log("The crimson dragon breathes a stream of white-hot flame at you!");
};
dragon1.attack();

dragon2.roar = function() {
    console.log("The black dragon lets out a tremendous roar!");
};
dragon2.roar();

//const example
//dragon1 = { color: "blue" };  You can not do this

const colors = ["red", "blue", "black"];
console.log(colors);
//colors = ["crimson", "turquoise", "onyx"];  You can not do this
colors[0] = "crimson";  //You can do this!
colors[1] = "turquoise";
colors[2] = "onyx";
colors[3] = "purple";
console.log(colors);


dragon2.element = "water";
dragon2.swim = function(dir) {
    console.log(`The dragon swims away to the ${dir}`);
};
dragon2.swim("north");