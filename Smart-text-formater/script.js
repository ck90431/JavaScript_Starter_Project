const text = document.getElementById("text");
const output = document.getElementById("output");


document.getElementById("upperCase").onclick=function(){
    output.innerText = text.value.toUpperCase();
}

document.getElementById("lowerCase").onclick=function(){
    output.innerText = text.value.toLowerCase();
}

document.getElementById("caplization").onclick= function(){
    let value = text.value.toLowerCase().trim();
    
    let word = value.split(" ");

    for(let i=0; i<word.length; i++) {
        const firstLetter = word[i].charAt(0).toUpperCase();
        const remainingLetter = word[i].slice(1);
        word[i] = firstLetter + remainingLetter;
    }
    output.innerText = word.join(" ");

}