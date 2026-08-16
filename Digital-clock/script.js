const hours = document.getElementById("hours");
const min = document.getElementById("min");
const sec = document.getElementById("sec");



setInterval( ()=>{
let currentTime = new Date();

hours.innerText =(currentTime.getHours() < 10 ? "0": "") + currentTime.getHours();
min.innerText = (currentTime.getMinutes() < 10 ? "0": "") + currentTime.getMinutes();
sec.innerText = (currentTime.getSeconds() < 10 ? "0": "") + currentTime.getSeconds();

},1000);

