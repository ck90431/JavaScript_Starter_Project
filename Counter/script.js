
let count = 0;
var counter = document.querySelector("#Counter");
var btnup = document.querySelector("#btn-up");
var btndown = document.querySelector("#btn-down");



btnup.addEventListener("click", () => {
    count++;
    counter.innerText = count;

})

btndown.addEventListener("click", () => {
    count--;
    counter.innerText = count;

})


