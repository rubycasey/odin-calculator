// Elements
let bttnNum = [
    document.getElementById("bttn-0"),
    document.getElementById("bttn-1"),
    document.getElementById("bttn-2"),
    document.getElementById("bttn-3"),
    document.getElementById("bttn-4"),
    document.getElementById("bttn-5"),
    document.getElementById("bttn-6"),
    document.getElementById("bttn-7"),
    document.getElementById("bttn-8"),
    document.getElementById("bttn-9"),
];

let bttnDeci = document.getElementById("bttn-decimal");

let bttnClear = document.getElementById("bttn-AC");
let bttnDel = document.getElementById("bttn-del");
let bttnEval = document.getElementById("bttn-=");

let bttnAdd = document.getElementById("bttn-+");
let bttnSub = document.getElementById("bttn--");
let bttnMult = document.getElementById("bttn-*");
let bttnDiv = document.getElementById("bttn-/");

let displayElement = document.getElementById("display-text");

// Variables
let lastNum = 0;
let currentNum = 0;
let operator = null;
let display = "0";
let showingEval = false;
let steps = 0;

// Init
updateDisplay(display);

// Button Functions
// Digit Buttons
bttnNum.forEach(function (currentBttn, i) {
    currentBttn.addEventListener("click", () => {
        if (showingEval) {
            numberSwitch();
        };
        insertNumber(i);
    });
});
bttnDeci.addEventListener("click", () => {
        if (!String(currentNum).includes(".")) {
            insertNumber(".");
        };
});

// Function Buttons
bttnClear.addEventListener("click", () => {
    currentNum = 0;
    lastNum = 0;
    operator = null;
    steps = 0;
    updateDisplay(currentNum);
});
bttnDel.addEventListener("click", () => {
    currentNum = String(currentNum).slice(0, currentNum.length - 1);
    updateDisplay(currentNum);
});
bttnEval.addEventListener("click", () => {
    evaluate();
    showingEval = true;
});

// Operator Buttons
bttnAdd.addEventListener("click", () => {
    numberSwitch();
    operator = "+";
    steps += 1;
});
bttnSub.addEventListener("click", () => {
    numberSwitch();
    operator = "-";
    steps += 1;
});
bttnMult.addEventListener("click", () => {
    numberSwitch();
    operator = "*";
    steps += 1;
});
bttnDiv.addEventListener("click", () => {
    numberSwitch();
    operator = "/";
    steps += 1;
});

// Functions
function evaluate() {
    if (steps >= 1) {
        if (operator == null) {
            console.log("No Operator")
            return;
        }
        currentNum = operate(Number(lastNum), Number(currentNum), operator);
    };
    updateDisplay(currentNum);
};

function updateDisplay(text) {
    // Updates "screen" on calculator
    if (String(text) == "") {
        text = 0;
    }
    displayElement.innerText = text;
    showingEval = false;
};

function insertNumber(number) {
    // Inserts digits into current number
    if (currentNum == 0) {
        currentNum = "";
    };
    currentNum = String(currentNum + String(number));
    updateDisplay(currentNum);
};

function numberSwitch() {
    // Progresses number positions
    if (!showingEval){
        evaluate();
    };
    
    if (!currentNum == 0) {
            lastNum = currentNum;
            currentNum = 0;
        };
};

function operate(a, b, op) {
    switch (op) {
        case "+":
            return (add(a, b));
        case "-":
            return (subtract(a, b));
        case "*":
            return (multiply(a, b));
        case "/":
            if (a == 0 && b == 0) {
                return `Can't divide 0 by 0 :(`;
            };
            return (divide(a, b));
        default:
            console.log("Invalid Operator");
            return;
    };
};

function add(a, b) {
    return Number(a) + Number(b);
};

function subtract(a, b) {
    return Number(a) - Number(b);
};

function multiply(a, b) {
    return Number(a) * Number(b);
};

function divide(a, b) {
    return Number(a) / (b);
};

// For Debugging:
function log() {
    console.log(`last: ${lastNum}
                \ncurrent: ${currentNum}
                \noperator: ${operator}
                \nshowingLast: ${showingEval}
                \nsteps: ${steps}`);
};