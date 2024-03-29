var leftVar = null;
var rightVar = null;
var opp = null;


function handleInput(element) {
    const operations = ['+', '-', '*', '/'];
    const documentElement = document.getElementById("display");
    if (operation in operations) {
        opp = operation;
        // if leftVar is Null,  set it to the current value of element.value and make rightVar Null
        if (leftVar == null) {
            leftVar = Number(documentElement.textContent);
        } else if (rightVar == null) {
            rightVar = Number(documentElement.textContent);
        }
        if (operation === "+") {
            result = add(num1, num2);
        } else if (operation === "-") {
            result = subtract(num1, num2);
        } else if (operation === "*") {
            result = multiply(num1, num2);
        } else if (operation === "/") {
            result = divide(num1, num2);
        } else {
            // if leftVar is null, store
        }
    } else {
        // append document content
        document.getElementById("display").textContent += value;
    }
}


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
 

