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


const changeSignBtn = document.getElementById('change-sign')


//adding event listeners & calling appropriate function
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        const number = button.innerHTML;
        displayNumber(number);
    });
});

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        const operator = button.innerHTML;
        calculator.operand = operator;
    });
});



function displayNumber(number) {
    if (calculator.operand) {
        topSc.textContent += " " + calculator.operand + " " + number;
        calculator.num2 += number;
    } else {
        topSc.textContent += number;
        calculator.num1 += number;
    }

    let result = operate(calculator);
    bottomSc.textContent = result || number;
    calculator.display = topSc.textContent + " = " + bottomSc.textContent;
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



function appendDecimal() {
    // Check if decimal already exists
    if (bottomSc.textContent.includes('.')) {
        return;
    }

    // If there is no current number and no decimal, add a leading zero
    if (bottomSc.textContent === "") {
        bottomSc.textContent = "0";
    }

    // If previous calculation was made and the result already contains a decimal, set the new number to "0."
    if (calculator.display.includes("=") && calculator.display.endsWith(".")) {
        calculator.num1 = "0";
        calculator.num2 = "";
        calculator.operand = "";
        topSc.textContent = "";
    }

    // Add decimal to the number and update the display
    bottomSc.textContent += ".";
    calculator.num2 += ".";
    calculator.display = topSc.textContent + " = " + bottomSc.textContent;
}



function operate(calculator) {
    let num1 = Number(calculator.num1);
    let num2 = Number(calculator.num2);
    let operand = calculator.operand;
    let result = "";

    switch (operand) {
        case "+":
            result = sum(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "x":
            result = multiply(num1, num2);
            break;
        case "÷":
            if (num2 === 0) {
                result = "Can't Divide By 0";
            } else {
                result = divide(num1, num2);
            }
            break;
        default:
            result = "Error";
    }
    return result;


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