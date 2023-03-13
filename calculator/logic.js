//getting top & bottom screens 
const topSc = document.querySelector("#user_input");
const bottomSc = document.querySelector("#result");

//declaring necessary variables
let lastInput = []
let num1 = 0;
let num2 = 0;
let result = 0;
let operator = "";
let checker = false;


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



//operation function
function operation() {
    num2 = Number(lastInput.join("").toString);
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

    //concat the result of operation
    topSc.textContent = checkIfFloat(num1) + " " + operator + " " + checkIfFloat(num2) + " =";
    bottomSc.textContent = checkIfFloat(result);

    num1 = result
    checker = true;
};


function display(btn) {
    //clear num2 if prev equation resulted in 0;
    if (bottomSc.textContent === "0") {
        num2 = 0;
    }

    if (result) {
        lastInput = [];
        result = "";
    }

    if (lastInput.includes(".") && this.textContent === ".") {
        return;
    }

    if (lastInput.length === 10) {
        lastInput.length = 10;
        return;
    } else
        lastInput.push(this.textContent);
    bottomSc.textContent = lastInput.join("").toString();
}


function chainOperations(btn) {
    num2 = Number(bottomSc.textContent);

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

    num1 = checkIfFloat(result);

    //reset variables
    num2 = 0;
    lastInput = [];
}

function selectOperator(btn) {
    if (bottomSc.textContent === "0") {
        return;
    }

    if (num1 === 0 || checker === true) {
        operator = btn.target.textContent;
        num1 = Number(bottomSc.textContent);
        num1.toFixed(2);
        lastInput = [];
        topScreen.textContent = checkIfFloat(num1) + ' ' + operator;
        checker = false;
    }

    else if (num1) {
        chainOperations();
        operator = btn.target.textContent;
        topScreen.textContent = checkIfFloat(result) + ' ' + operator;
    }
}

//check number
function checkIfFloat(num) {
    let result;
    if (Number.isInteger(num)) {
        result = Number(num);
    } else {
        result = Number(num.toFixed(2));
    }
    return result;
};


function clearData(btn) {
    topSc.textContent = "";
    bottomSc.textContent = "0";
    operator = "";
    num1 = 0;
    num2 = 0;
    lastInput = [];
    result = 0;
};

function clearEntry(btn) {
    bottomSc.textContent = "0";
    num2 = 0;
    lastInput = [];
};


//change numberSign
function changeNumberSign() {
    let num = Number(bottomSc, textContent);
    num = num - (num * 2);
    lastInput = [num];
    bottomSc.textContent = num;
}
