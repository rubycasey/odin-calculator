let lastNum = 0;
let currentNum = 0;
let operator = null;

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
