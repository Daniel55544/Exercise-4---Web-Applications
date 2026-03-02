/*Exercise 4 — Basic ArithmeticCalculator
Objective
Practice:
-Function declaration
-Arithmetic operators
-Variables (let / const)
-String interpolation
-Clean and readable code structure

Instructions
Create a basic calculator in JavaScript that performs the following arithmetic operations:
-Addition
-Subtraction
-Multiplication
-Division
The program must:
1. Define two numeric variables.
2. Implement separate traditional functions for each arithmetic operation.
3. Call the appropriate function.
4. Display the result in a descriptive string message using proper formatting.
Example output:
The result of 10 + 5 is 15.

Requirements
-Use correct JavaScript syntax.
-Follow good naming conventions and clean code practices.
-Each operation must be implemented in its own function.
-The result must be printed as a formatted string (not just the raw number).

Technical Expectations
-Use let or const appropriately.
-Use return inside functions.
-Use template literals (recommended) for string formatting.
Example of formatting style:
console.log(`The result of ${num1} + ${num2} is ${result}`);

Going further...
-Change the traditional functions to arrow functions (arrow functions do not need a
return statement for this specific case)
-Add validation when needed.*/

// Define two numeric variables
const num1 = 10;
const num2 = 5;

// Function for addition
function add(a, b) {
    return a + b;
}
// Function for subtraction
function subtract(a, b) {
    return a - b;
}
// Function for multiplication
function multiply(a, b) {
    return a * b;
}
// Function for division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
// Call the functions and display results
const additionResult = add(num1, num2);
// Display results using template literals
console.log(`The result of ${num1} + ${num2} is ${additionResult}.`);
// Call the subtraction function and display results
const subtractionResult = subtract(num1, num2);
// Display results using template literals
console.log(`The result of ${num1} - ${num2} is ${subtractionResult}.`);
// Call the multiplication function and display results
const multiplicationResult = multiply(num1, num2);
// Display results using template literals
console.log(`The result of ${num1} * ${num2} is ${multiplicationResult}.`);
// Call the division function and display results
const divisionResult = divide(num1, num2);
// Display results using template literals
console.log(`The result of ${num1} / ${num2} is ${divisionResult}.`);