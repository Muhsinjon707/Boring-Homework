let firstNumber = +prompt("Enter a number: ");
let secondNumber = +prompt("Enter a second number: ");

if (firstNumber > secondNumber) {
    document.write(`<strong>${firstNumber}</strong> is greater than ${secondNumber}`);
} else {
    document.write(`<strong>${secondNumber}</strong> is greater than ${firstNumber}`);
}

