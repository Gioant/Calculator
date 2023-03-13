//getting top & bottom screens 
const topSc = document.querySelector("#user_input");
const bottomSc = document.querySelector("#result");

//declaring necessary variables
let lastInput = []
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = "";
let total = false;


//Getting all buttons & operator buttons + adding event listeners
const input = document.querySelectorAll(".btn_num");
input.forEach(button => button.addEventListener("click", display));

const operatorBtns = document.querySelectorAll(".btn_operator");
operatorBtns.forEach(button => button.addEventListener("click", selectOperator));

const equals = document.querySelector("#equals");
equals.addEventListener("click", operate);

const clearAllBtn = document.querySelector("#clear-all");
clearAllBtn.addEventListener("click", clearData);

const clearEntryBtn = document.querySelector("#clear-entry");
clearEntryBtn.addEventListener("click", clearEntry);

const changeNumberSignBtn = document.querySelector("#change-sign");
changeNumberSignBtn.addEventListener("click", changeNumberSign);

//math functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

