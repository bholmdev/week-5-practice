//example 2
function makeBlue() {
    document.querySelector("h2").style.background = "blue";
}
function makeYellow() {
    document.querySelector("h2").style.background = "yellow";
}

//example 3
document.querySelector("h3").onmouseover = makeBlue2;
document.querySelector("h3").onmouseout = makeYellow2;

function makeBlue2() {
    document.querySelector("h3").style.background = "blue";
}
function makeYellow2() {
    document.querySelector("h3").style.background = "yellow";
}

//example 4
const el = document.querySelector("h4")
el.onmouseover = makeBlue3;
el.onmouseout = makeYellow3;

function makeBlue3() {
    el.style.background = "blue";
}
function makeYellow3() {
    el.style.background = "yellow";
}