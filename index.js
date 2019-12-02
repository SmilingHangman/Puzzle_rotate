// document.getElementsByClassName("rotate").addEventListener("click", function () {
//     document.getElementsByClassName("rotate").style.transform = "rotate(90deg)"
// }); iterate the array

// let rngRotator = Math.floor(((Math.random() * 3) + 5) * 90);
// let rngRotator = ((Math.floor(Math.random() * 10 + 1)) * 90);

document.getElementById("shuffle").addEventListener("click", function () {
    let rngRotator = ((Math.floor(Math.random() * 10 + 1)) * 90);
    document.getElementById("squareOne").style.transform = "rotate(" + String(rngRotator) + "deg)";
    document.getElementById("squareTwo").style.transform = "rotate(" + String(rngRotator) + "deg)";
    document.getElementById("squareThree").style.transform = "rotate(" + String((Math.floor(Math.random() * 10 + 1)) * 90) + "deg)";
    document.getElementById("squareFour").style.transform = "rotate(" + String((Math.floor(Math.random() * 10 + 1)) * 90) + "deg)";
    document.getElementById("squareFive").style.transform = "rotate(" + String((Math.floor(Math.random() * 10 + 1)) * 90) + "deg)";
    document.getElementById("squareSix").style.transform = "rotate(" + String((Math.floor(Math.random() * 10 + 1)) * 90) + "deg)";
    document.getElementById("squareSeven").style.transform = "rotate(" + String((Math.floor(Math.random() * 10 + 1)) * 90) + "deg)";
    document.getElementById("squareEight").style.transform = "rotate(" + String((Math.floor(Math.random() * 10 + 1)) * 90) + "deg)";
    document.getElementById("squareNine").style.transform = "rotate(" + String((Math.floor(Math.random() * 10 + 1)) * 90) + "deg)";
});

let sqOne = document.getElementById("squareOne");
let compSqOne = window.getComputedStyle(sqOne).getPropertyValue("transform");
let rotator = parseInt(document.getElementById("squareOne").style.getPropertyValue('transform'), 10);
document.getElementById("squareOne").addEventListener("click", function () {
    document.getElementById("squareOne").style.transform = "rotate(" + String(rotator += 90) + "deg)";
});

document.getElementById("squareTwo").addEventListener("click", function () {
    document.getElementById("squareTwo").style.transform += "rotate(90deg)";
});

document.getElementById("squareThree").addEventListener("click", function () {
    document.getElementById("squareThree").style.transform += "rotate(90deg)";
});

document.getElementById("squareFour").addEventListener("click", function () {
    document.getElementById("squareFour").style.transform += "rotate(90deg)";
});

document.getElementById("squareFive").addEventListener("click", function () {
    document.getElementById("squareFive").style.transform += "rotate(90deg)";
});

document.getElementById("squareSix").addEventListener("click", function () {
    document.getElementById("squareSix").style.transform += "rotate(90deg)";
});

document.getElementById("squareSeven").addEventListener("click", function () {
    document.getElementById("squareSeven").style.transform += "rotate(90deg)";
});

document.getElementById("squareEight").addEventListener("click", function () {
    document.getElementById("squareEight").style.transform += "rotate(90deg)";
});

document.getElementById("squareNine").addEventListener("click", function () {
    document.getElementById("squareNine").style.transform += "rotate(90deg)";
});