let num1 = "";
let num2 = "";
let currentOperator = "";

const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");

display.style.width = "400px";
display.style.height = "200px";
display.style.backgroundColor = "lightgray";
display.style.fontSize = "50px";
display.style.textAlign = "right";
display.style.padding = "10px";

numbers.forEach(button => {
    button.addEventListener("click", () => {
        if (!currentOperator) {
            num1 += button.value;
            display.textContent = num1;
        } else {
            num2 += button.value;
            console.log(num2);
            display.textContent = num2;
        }
    });
});

operators.forEach(button => {
    button.addEventListener("click", () => {
        if (num1 && !currentOperator && !num2) {
            currentOperator = button.value;
        }

        else if (num1 && currentOperator && num2) {
            num1 = operate(parseInt(num1), parseInt(num2), currentOperator);
            display.textContent = num1;
            currentOperator = button.value;
            num2 = "";
        }
    });
});

equal.addEventListener("click", () => {
    if (num1 && num2 && currentOperator) {
        display.textContent = operate(parseInt(num1), parseInt(num2), currentOperator);
        resetValues();
    }
});

clear.addEventListener("click", () => {
    resetValues();
    display.textContent = "";
});

function resetValues() {
    num1 = "";
    num2 = "";
    currentOperator = "";
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            console.log(add(num1, num2))
            return add(num1, num2);
            
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 === 0) {
                return "NONONONO";
            } else {
                return divide(num1, num2);
            }
    }
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}