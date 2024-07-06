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
        if (!currentNum.includes(".")) {
            insertNumber(".");
        };
});

// Function Buttons
bttnClear.addEventListener("click", () => {
    currentNum = 0;
    lastNum = 0;
    operator = null;
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
    operator = "+";
    numberSwitch();
});
bttnSub.addEventListener("click", () => {
    operator = "-";
    numberSwitch();
});
bttnMult.addEventListener("click", () => {
    operator = "*";
    numberSwitch();
});
bttnDiv.addEventListener("click", () => {
    operator = "/";
    numberSwitch();
});

// Functions
function evaluate() {
    if (operator == null) {
        console.log("No Operator")
        return;
    }
    currentNum = operate(Number(lastNum), Number(currentNum), operator);
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
                \nshowingLast: ${showingEval}`);
};