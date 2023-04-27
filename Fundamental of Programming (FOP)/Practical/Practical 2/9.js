var input = require('readline-sync');

var TempF = input.question('Enter the temperature in Fahrenheit: ');

var TempC = (TempF - 32) * 5 / 9;

console.log("The temperature in Celsius is: " + TempC.toFixed(1) + " degrees.");

