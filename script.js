

const operators = prompt('Enter operator to perform the calculation(either +,-,* or/):');

//const number1 = parseFloat(prompt('Enter the first number:'));
//const number2 = parseFloat(prompt('Enter the second number:'));

if(operators=='+'){
    result = number1+number2;
}
else if(operators=='-'){
    result=number1-number2
}
else if(operators=='*'){
    result=number1*number2
}
else {
    result=number1/number2
}
window.alert("Results is"+results);