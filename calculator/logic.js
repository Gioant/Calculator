//declaring necessary variables
let num1 = 0;
let num2 = 0;
let current_operator = null;
let shouldResetScreen = false;

//getting top & bottom screens 
const topSc = document.querySelector("#user_input");
const bottomSc = document.querySelector("#result");


//Getting all buttons & operator buttons
const numberBtns = document.querySelectorAll(".btn_num");
const operatorBtns = document.querySelectorAll(".btn_operator");

const decimalBtn = document.querySelector("#decimal")
const equals = document.querySelector("#equals");

const clearAllBtn = document.querySelector("#clear-all");
const clearEntryBtn = document.querySelector("#clear-entry");
const changeNumberSignBtn = document.querySelector("#change-sign");


//adding event listeners & calling appropriate function
equals.addEventListener('click', evaluate);
clearAllBtn.addEventListener('click', clear);
clearEntryBtn.addEventListener('click', clearEntry);
decimalBtn.addEventListener('click', appendDecimal);


numberBtns.forEach((button) =>
    button.addEventListener('click', () => displayNumber(button.textContent))
)

operatorBtns.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent))
)


//function to show current operation on bottom div
function displayNumber(number) {
    if (bottomSc.textContent === "0" || shouldResetScreen) {
        resetScreen();
    }
    bottomSc.textContent += number;
}

//function to reset screen
function resetScreen() {
    bottomSc.textContent = "";
    shouldResetScreen = false;
}

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



//decimal function
function appendDecimal() {
    if (shouldResetScreen) {
        resetScreen();
    }

    // if (bottomSc.textContent === "") {
    //     bottomSc.textContent = "";
    // }
    // //if there is already a decimal point.. return nothing
    // if (bottomSc.textContent.includes('.')){
    //     return;
    // }

    if (bottomSc.textContent === "") {
        bottomSc.textContent = "0";
    }

    if (bottomSc.textContent.includes('.')) {
        return;
    }

    //add a decimal if previous 3 conditions are met
    bottomSc.textContent += ".";
}


//function to track the user's input and follow order of operations
function SetOperation(operator) {
    if (current_operator !== null) {
        evaluate();
    }

    num1 = current_operator.textContent;
    current_operator = operator;
    topSc.textContent = topSc.textContent = num1 + ' ' + current_operator;
};


//function to evaluate
function evaluate() {
    if (current_operator === null || shouldResetScreen) {
        return;
    }

    if (current_operator === "÷" && bottomSc.textContent === "0") {
        alert("Error! Can't Divide by 0!");
        return;
    }

    num2 = bottomSc.textContent
    bottomSc.textContent = roundResult(operate)
}


//function for operator
function operate(op, num1, num2) {
    num1 = Number(num1);
    num2 = number(num2);

    switch (op) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case 'x':
            return multiply(num1, num2);
        case '÷':
            if (num2 === 0) {
                return null;
            } else {
                return divide(num1, num2);
            }
        default:
            return null;
    }
}


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