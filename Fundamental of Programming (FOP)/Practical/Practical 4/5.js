var input = require('readline-sync');
var child = 0;
do {
    child = input.questionInt("Enter number of children: ");
    if (child < 0 || child > 50) {
        console.log("Invalid number of children!");
        console.log("Please enter a number in range of 0 to 50.");
    }
} while (child < 0 || child > 50);
console.log("Input Accepted! Program terminated..");







/* var num = input.questionInt("Enter a number: ");
// Do while loop
do {
    console.log("Invalid number of children!");
    console.log("Please enter a number in range of 0 to 50.");
    num = input.questionInt("Enter a number: ");
} while (num >= 0 || num <= 50);
// While loop
while (num >= 0 || num <= 50) {
    console.log("Invalid number of children!");
    console.log("Please enter a number in range of 0 to 50.");
    num = input.questionInt("Enter a number: ");
}
// For loop

for (var i = 0; i < 1; i++) {
    console.log("Invalid number of children!");
    console.log("Please enter a number in range of 0 to 50.");

if (num >= 0 || num <= 50) {
    console.log("Invalid number of children!");
   console.log("Please enter a number in range of 0 to 50.")
    return;
}

// Write a do-while loop to prompt for the number of children from the user until a valid input in the range of 0 to 50 is captured. An appropriate error message should be displayed for invalid input.
var num = input.questionInt("Enter a number: ");
do {
    console.log("Invalid number of children!");
    console.log("Please enter a number in range of 0 to 50.");
    num = input.questionInt("Enter a number: ");
} while (num >= 0 || num <= 50);
// Write a while loop to prompt for the number of children from the user until a valid input in the range of 0 to 50 is captured. An appropriate error message should be displayed for invalid input.
while (num >= 0 || num <= 50) {
    console.log("Invalid number of children!");
    console.log("Please enter a number in range of 0 to 50.");
    num = input.questionInt("Enter a number: ");
}

console.log("Input Accepted! Program terminated..");
*/
