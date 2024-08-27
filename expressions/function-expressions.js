//calling function before function is decalred does not work in function expressions
// console.log(adder(1,2));
const adder = function(a,b) {
    return a+b;
}
console.log(adder(1,2));

//someName only accessible withing function and is rare to use
const adder2 = function someName(a,b) {
    return a+b;
}
console.log(adder2(1,2));
console.log(someName(1,2));