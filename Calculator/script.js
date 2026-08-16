const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "AC") {
            expression = "";
            inputBox.value = "";
        }

        else if (value === "Del") {
            expression = expression.slice(0, -1);
            inputBox.value = expression;
        }

        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                inputBox.value = expression;
            } catch {
                inputBox.value = "Error";
                expression = "";
            }
        }

        else {
            expression += value;
            inputBox.value = expression;
        }

    });
});