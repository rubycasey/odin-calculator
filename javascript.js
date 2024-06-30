// Elements
let bttn0 = document.getElementById("bttn-0");
let bttn1 = document.getElementById("bttn-1");
let bttn2 = document.getElementById("bttn-2");
let bttn3 = document.getElementById("bttn-3");
let bttn4 = document.getElementById("bttn-4");
let bttn5 = document.getElementById("bttn-5");
let bttn6 = document.getElementById("bttn-6");
let bttn7 = document.getElementById("bttn-7");
let bttn8 = document.getElementById("bttn-8");
let bttn9 = document.getElementById("bttn-9");
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

// Init
updateDisplay(display);

// Functions
function updateDisplay(text) {
    displayElement.innerText = text;
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
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};