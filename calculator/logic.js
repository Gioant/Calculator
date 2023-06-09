//declaring necessary variables
let currentValue = 0;
let previousValue = 0;
let operator = null;
let finalResult = null;

//getting top & bottom screens 
const topSc = document.querySelector("#previousInput");
const bottomSc = document.querySelector("#result");


//Getting all buttons & operator buttons
const numberBtns = document.querySelectorAll(".btn_num");
const operatorBtns = document.querySelectorAll(".btn_operator");

const clearEntryBtn = document.getElementById("clear-entry");
const clearAllBtn = document.getElementById("clear-all");
const decimalBtn = document.getElementById("decimal");
const equalsBtn = document.getElementById("equals");

//for Numbers
function handleNumber(button) {
    finalResult = null;

    //update variable
    if (bottomSc.textContent.toString().length < 15) {
        currentValue = Number(currentValue + button.innerText);
    }

    // Display to screen
    bottomSc.innerText = currentValue;
}

//function for when button is an operator
function handleOperator(button) {

    if ((operator !== null) && (currentValue === 0)) {
        currentValue = 0;


    } else if (operator === null) {
        previousValue = currentValue + finalResult;

        currentValue = 0;
        operator = button.innerText;

        //Display Results to Screen
        topSc.innerText += " " + bottomSc.innerText + " " + button.innerText;
        bottomSc.innerText = currentValue;


    } else {
        previousValue = operate(previousValue, currentValue, operator);

        currentValue = 0;
        operator = button.innerText;

        //Display Results to Screen
        topSc.innerText += " " + bottomSc.innerText + " " + button.innerText;
        bottomSc.innerText = currentValue;
    }
}

//function to add decimal
function handleDecimal() {
    if (!currentValue.toString().includes('.')) {
        currentValue += '.';
    }

    // Display result
    return bottomSc.innerText = currentValue;
}

//handle equals
function handleEquals() {
    if (operator === null) {
        return currentValue;
    } else {
        //call operator function
        finalResult = operate(previousValue, currentValue, operator);


        if (isNaN(finalResult)) {
            bottomSc.innerText = "Can't Divide By 0";
            return;
        }

        //only round off if final result is more than 15 digits
        if (finalResult.toString().length > 15) {
            //round off final result
            finalResult = finalResult.toExponential(10);
        }

        //reset variables
        currentValue = 0;
        previousValue = 0;
        operator = null;
        topSc.innerText = null;

        // display current result
        bottomSc.innerText = finalResult;
    }
}

//Function to clear current Entry
function clearEntry() {
    //delete last character
    currentValue = Number(currentValue.toString().slice(0, -1));

    return bottomSc.innerText = currentValue;
}

//Clear Everything Function
function clearAll() {

    //reset Everything
    currentValue = 0;
    previousValue = 0;
    finalResult = null;
    operator = null;

    //reset screens
    bottomSc.innerText = null;
    topSc.innerText = null;
}


//Math functions
function operate(a, b, operand) {
    //check what operator it is
    switch (operand) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case 'x':
            return a * b;
        case '÷':
            return a / b;
        case '%':
            return a / 100 * b;
    }
}

//adding event listeners for number & operator buttons
numberBtns.forEach(button => {
    button.addEventListener('click', () => handleNumber(button));
});

operatorBtns.forEach(button => {
    button.addEventListener('click', () => handleOperator(button));
});


//add event listeners to the individual buttons
equalsBtn.addEventListener("click", () => {
    handleEquals();
});

decimalBtn.addEventListener("click", () => {
    handleDecimal();
});

clearAllBtn.addEventListener("click", () => {
    clearAll();
});

clearEntryBtn.addEventListener("click", () => {
    clearEntry();
});


//Keyboard support
//get all the buttons
const buttons = document.querySelectorAll('button');

//creating obj of key-value pairs for keyboard inputs
const keyInputs = {
    'Enter': '=',
    'Backspace': 'CE',
    'Escape': 'C',
    '*': '×',
    '/': '÷'
};


//add event listener to document
document.addEventListener('keydown', e => {
    //map certain keyboard keys to a specific button while leaving other "keys" as is
    const buttonText = keyInputs[e.key] || e.key;

    /*
    1) Using Array.From, convert nodeList to array and use find method
    2) for each button, search the innerText of the btn and compare it with buttonText Variable
    3) if button was found, simulate click 
    */
    const button = Array.from(buttons).find(btn => btn.innerText === buttonText);
    if (button) {
        e.preventDefault();
        button.click();
    }
});

