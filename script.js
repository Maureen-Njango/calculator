var leftVar = null;
var rightVar = null;
var opp = null;


function appendToDisplay(value) {
    const element = document.getElementById("display");
    if (element == null) return; // Should never happen, but just in case...
    if (element.textContent === "0") {
        element.textContent = value;
    } else {
        // handleInput(value); todo, finish implementing the function (with BODMAS in consideration)
        element.textContent += value;
    }
}

function clearlastElement() {
    const element = document.getElementById("display");
    const content = element.textContent;// context of the calculator
    if (content.length == 0) return;// check whether the content is empty
    element.textContent = element.textContent.substring(0, display.length - 1);//to extract characters btwm the two strings
    if (content.length == 1) {
        element.textContent = "0";
    } else {
        // remove the last character of content
        element.textContent = content.slice(0, -1);
    }


}
function clearDisplay() {
    const element = document.getElementById("display");
    const content = element.textContent;
    element.textContent = element.textContent.substring(0, display.length - 1);
    if (content.length == 1) {
        element.textContent = "0";
    }
}

function calculateResult() {
    // handle the expression displayed  on the screen
    const arithmatics = document.getElementById("display").textContent;
    document.getElementById("display").textContent = evaluateExpression(arithmatics);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    //  Check for division by zero error
    if (b === 0) return 0;
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function applyOperation(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            throw new Error("Invalid operator");
    }
}

function evaluateExpression(expression) {
    // Split the expression into tokens using regular expression
    /**
     * Tokenization: The function starts by tokenizing the input expression. 
     * Tokenization means breaking down the expression into meaningful units called tokens.  
     * In this function, tokens are numbers and operators like addition (+), subtraction (-), 
     * multiplication (*), and division (/). This is achieved using a regular expression (/\d+|\+|\-|\*|\//g), 
     * which matches sequences of digits (\d+) or individual operators (\+, \-, \*, \/).
     */
    const tokens = expression.match(/\d+|\+|\-|\*|\//g);
    console.log("Tokens:", tokens);

    // Operator precedence map to better handle BODMAS
    /**
     * The function defines a precedence map that assigns a precedence level to each operator.
     *  Operators with higher precedence are evaluated before operators with lower precedence. 
     * In this implementation, multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).
     */
    const precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2
    };

    // Stack to hold operands and operators
    const operandStack = [];
    const operatorStack = [];
    /**
     * 3*3+4*(3 -6)
     * after processing, we will have (From right to left)
     * operand = [3,3,4,3,6]
     * operator = [*,+,*,-]
     * 
     * first loop
     * 3-6 = -3
     * push -3 onto operand stack
     * 
     * second loop
     * operand = [3,3,4,-3]
     * operator = [*,+,*]
     * 4*-3 = -12
     * push -12 to operand stack
     * 
     * third loop
     * operand = [-12,3,3]
     * operation = [+, *]
     * 3*3 = 9
     * push 9 to operand stack
     * 
     * forth loop
     * operand = [-12, 9]
     * operation = [+]
     * -12 + 9 = -3
     */
    // Process each token
    tokens.forEach(token => {
        if (!isNaN(token)) {
            operandStack.push(parseFloat(token));
        } else {
            while (
                operatorStack.length > 0 &&
                precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
            ) {
                const operator = operatorStack.pop();
                const b = operandStack.pop();
                const a = operandStack.pop();
                operandStack.push(applyOperation(a, b, operator));
            }
            operatorStack.push(token);
        }
        console.log("Operand Stack:", operandStack);
        console.log("Operator Stack:", operatorStack);
    });

    while (operatorStack.length > 0) {
        const operator = operatorStack.pop();
        const b = operandStack.pop();
        const a = operandStack.pop();
        operandStack.push(applyOperation(a, b, operator));
    }
    console.log("Operand Stack:", operandStack);
    console.log("Operator Stack:", operatorStack);

    return operandStack.pop();
}