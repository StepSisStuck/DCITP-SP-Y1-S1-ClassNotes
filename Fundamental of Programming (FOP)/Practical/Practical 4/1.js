var input = require('readline-sync');
var data;
var sum = 0;
// Keep reading data until the input is 0
do{
// Read the next data
var dataString = input.question(
"Enter an int value (the program exits if the input is 0): ");
data = parseInt(dataString);
sum += data;
} while(data != 0);
console.log("The sum is " + sum);