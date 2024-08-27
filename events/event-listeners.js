//example 1
const el = document.querySelector("h1");
el.addEventListener("mouseover", makeBlue);
el.addEventListener("mouseover", makeTextWhite);
el.addEventListener("mouseout", makeYellow);
el.addEventListener("mouseout", makeTextGreen);
// uncomment below line to make text white
// el.removeEventListener("mouseover", makeTextWhite);

function makeBlue() {
    el.style.background = "blue";
}
function makeTextWhite() {
    el.style.color = "white";
}
function makeYellow() {
    el.style.background = "yellow"
}
function makeTextGreen() {
    el.style.color = "green";
}