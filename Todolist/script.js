var input = document.getElementById("input-text");
var button = document.getElementById("btn");
var list = document.getElementById("text-list");

button.addEventListener("click", function () {

    const inputText = input.value;

    if (inputText === "") {
        alert("Enter the text");
        return;
    }

    var li = document.createElement("li");

    var span = document.createElement("span");
    span.innerText = inputText;

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";

    doneBtn.style.backgroundColor = "#58c45a";
    doneBtn.style.color = "white";   // 'color', not 'Color'

    removeBtn.style.backgroundColor = "red";
    removeBtn.style.color = "white";

    li.appendChild(span);
    li.appendChild(doneBtn);
    li.appendChild(removeBtn);

    list.appendChild(li);

    input.value = "";

    // Done button
    doneBtn.addEventListener("click", function () {
        span.classList.toggle("done");
    });

    // Remove button
    removeBtn.addEventListener("click", function () {
        li.remove();
    });

});