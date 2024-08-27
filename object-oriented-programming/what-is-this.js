const dragon1 = {
    color: "red",
    roar() {
        console.log("The red dragon lets out a tremendous roar!");
    }
};
dragon1.roar();

dragon1.roar = function() {
    console.log(`The ${dragon1.color} dragon lets out a tremendous roar!`);
};
dragon1.roar();

const dragon2 = {
    color: "blue",
    roar() {
        console.log(`The ${this.color} lets out a tremendous roar!`);
    }
};
dragon2.roar();