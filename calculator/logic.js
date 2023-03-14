//declaring necessary variables
let num1 = 0;
let num2 = 0;
let operator = "";
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


//adding event listeners
equals.addEventListener('click', evaluate);
clearAllBtn.addEventListener('click', clear);
clearEntryBtn.addEventListener('click', clearAll);
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


//operation function
function operation() {
    num2 = Number(bottomSc.textContent);
    console.log(num1);
    console.log(num2);

    //check operator
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        default:
            return;
    }


};

function clearData(btn) {
    topSc.textContent = "";
    bottomSc.textContent = "0";
    operator = "";
    num1 = 0;
    num2 = 0;
    result = 0;
};

function clearEntry(btn) {
    bottomSc.textContent = "0";
    num2 = 0;
};


