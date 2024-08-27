var myVar = 1;  //global and can be redeclared
let myLet = 2;  // global, can be reassigned and can not be redeclared
const myConst = 3;  //global, can not be reassigned or redeclared
const myConst2 = 5;

const myFunction = () => {
    let mylet = 8;
    const myConst = 4;  //both are block scope, only accessible in function.
}

undeclaredVariable = 12;

const test = () => {
    var myVar2 = 18; //block scope, only accessible in function.
    x = "hi"; //accessible after function call.  Do not do this!
}

