function appendToDisplay(value){
    const element = document.getElementById("display");
    if (element == null) return; // Should never happen, but just in case...
    if (element.textContent ==="0"){
        element.textContent = value;
    } else {
       element.textContent += value;
    
    }
}
function clearlastElement(){
    const element = document.getElementById("display");
    const content = element.textContent;
    if (content.length == 0) return;
    element.textContent = element.textContent.substring(0, display.length -1);
    if (content.length == 1) {
        element.textContent = "0";
    } else {
        // remove the last character of content
        element.textContent = content.slice(0,-1);
    }


}
function clearDisplay(){
    const element = document.getElementById("display");
    const content = element.textContent;
    element.textContent = element.textContent.substring(0, display.length -1);
    if (content.length == 1) {
        element.textContent = "0";


}
}

