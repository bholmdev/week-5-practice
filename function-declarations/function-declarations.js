function sayHello() {
    console.log("Hello World");
}
sayHello();


function sayHello2(userName) {
    console.log("Hello " + userName);
}
sayHello2("Jane");


function sayGoodbye(userName) {
    console.log("Goodbye " + userName);
}
sayGoodbye("Simon");


function getPizzaCost(size, nToppings) {
    let cost = 10;
    if (size === "medium") { cost += 4 }
    else if (size === "large") { cost += 8 }
    cost += nToppings;
    console.log("The cost of this pizza is: $" + cost);
}
let pizzaSize = "large";
let numToppings = 2;
getPizzaCost("medium", 3);
getPizzaCost(pizzaSize, numToppings);


function getPizzaCost2(size, nToppings) {
    let cost = 10;
    if (size === "medium") { cost += 4 }
    else if (size === "large") { cost += 8 }
    cost += nToppings;
    return cost;
}
let pizzaSize2 = "large";
let numToppings2 = 2;
let cost = getPizzaCost2(pizzaSize2, numToppings2);
console.log("The cost of this pizza is: $" + cost);

//hoisting means you can call a function before it's declared