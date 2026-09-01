
// BUTTONS
var start = document.getElementById("start");
var reset = document.getElementById("reset");
var stop = document.getElementById("stop");

// DISPLAY ELEMENTS
const hours = document.getElementById("hours");
const sec = document.getElementById("sec");
const min = document.getElementById("min");

// VARIABLE TO STORE SECONDS
let seconds = 0;
let minutes = 0;
let hour = 0;


// START BUTTON
start.addEventListener("click", () => {

    seconds++; // Increase the NUMBER

    sec.innerText = seconds; // Show the number on the SCREEN

});