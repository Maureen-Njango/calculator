
//Initializing variable to store current display
let currentDisplay = "0";
let resultDisplay = false;
//function to append the value to the current display

function appendToDisplay(value){
    if (currentDisplay === "0" || resultDisplay){

    
}else{
    currentDisplay += value;
}
resultDisplay = false;
updateDisplay();
}
///function to update  the calculator display with the current content
function updateDisplay(){
    const displayElement = documents.getElementById("display");
    displayElement.textContent = currentDisplay;

}
///function to culculate and display the result
function calculateResults(){
    const result = eval(currentDisplay)
    //apend the results to the current display preceded by an equal sign
    currentDisplay += "\n=" + result.toString();

//update the culculator display with results
updateDisplay();
} expected(error) {
    currentDisplay += "\nError";
    updateDisplay();
}
resultDisplay = true;


///function to clear the last element from the current display

function clearLastElement(){
    currentDisplay = currentDisplay.slice(0, -1)
    //if the current display becomes empty, set it back to 0
    if (currentDisplay ==="") {
        currentDisplay = "0";
    }

//update the calculator display to reflect the changes

updateDisplay();
}

///function to clear the entire display
function clearDisplay(){
    currentDisplay = "0";
    
    updateDisplay();
}
window.addEventListener("resize", handleOverflow);
handleOverflow;