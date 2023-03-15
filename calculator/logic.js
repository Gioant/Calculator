//declaring calculator object
let calculator = {
    num1: '',
    num2: '',
    operand: '',
    result: '',
    display: ''
};

//getting top & bottom screens 
const topSc = document.querySelector("#user_input");
const bottomSc = document.querySelector("#result");


//Getting all buttons & operator buttons
const numberBtns = document.querySelectorAll(".btn_num");
const operatorBtns = document.querySelectorAll(".btn_operator");


const changeNumberSignBtn = document.getElementById('change-sign')


//adding event listeners & calling appropriate function
numberBtns.forEach(button => {
    button.addEventListener('click', () => addNumber(button.innerHTML));
});

operatorBtns.forEach(button => {
    button.addEventListener('click', () => compute(button.innerHTML));
});


function updateDisplay() {
    topSc.innerHTML = calculator.display;
}


//function to show current operation on bottom div
function displayNumber(number) {
    if (bottomSc.textContent === "0" || shouldResetScreen) {
        resetScreen();
    }
    bottomSc.textContent += number;
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





function operate(operand, a, b) {

    switch (operand) {

        case "+":
            result = sum(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "÷":
            switch (true) {
                case b !== 0:
                    result = a / b;
                    break;

                case b == 0:
                    result = "Can't Divide By 0"
                    break;

                default:
                    break;
            }
            break;
        case "x":
            result = multiply(a, b);
            break;

        default:
            break;

    }
    return result
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