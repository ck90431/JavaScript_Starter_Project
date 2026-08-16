const quotes = [
  "Believe in yourself and all that you are.",
  "Small steps every day lead to big results.",
  "Success begins with self-discipline.",
  "Dream big. Start small. Act now.",
  "Your only limit is your mindset.",
  "Stay patient. Great things take time.",
  "Every expert was once a beginner.",
  "Hard work beats talent when talent doesn't work hard.",
  "Consistency creates extraordinary results.",
  "Do something today your future self will thank you for.",
  "Mistakes are proof that you are trying.",
  "The best way to predict the future is to create it.",
  "Push yourself because no one else will do it for you.",
  "Discipline is choosing what you want most over what you want now.",
  "Stay focused and never give up.",
  "Opportunities don't happen, you create them.",
  "Progress is better than perfection.",
  "Believe you can, and you're halfway there.",
  "Don't wait for the perfect moment. Take the moment and make it perfect.",
  "Success is the sum of small efforts repeated every day."
];

var btn = document.getElementById("btn");
var NewQuote = document.getElementById("quote");


function randomNum(){

var getrandamNum = Math.floor(Math.random()* quotes.length);
return getrandamNum;
}
function showQuote(){

    var num = randomNum();

    NewQuote.innerText = quotes[num];

}