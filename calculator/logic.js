//declaring necessary variables
let currentValue = 0;
let previousValue = 0;
let operator = null;

//getting top & bottom screens 
const topSc = document.querySelector("#previousInput");
const bottomSc = document.querySelector("#result");


//Getting all buttons & operator buttons
const numberBtns = document.querySelectorAll(".btn_num");
const operatorBtns = document.querySelectorAll(".btn_operator");



//adding event listeners & calling appropriate function
numberBtns.forEach(button => {
    button.addEventListener('click', () => handleNumber(button.innerHTML));
});

operatorBtns.forEach(button => {
    button.addEventListener('click', () => handleOperator(button.innerHTML));
});



//function to clear everything
function clear() {
    bottomSc.textContent = "0";
    topSc.textContent = "";
    num1 = "";
    num2 = "";
    operation = "";
}

//function to clear current input only
function clearEntry() {
    bottomSc.textContent = bottomSc.textContent.toString().slice(0, 1);
}



//Math functions
function operate(operand, a, b) {
    //check what operator it is
    switch (operand) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            return a / b;
        case '%':
            return a / 100 * b;
    }
}