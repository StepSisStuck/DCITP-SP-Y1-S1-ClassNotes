var input = require('readline-sync');

var FirstN = input.question('Enter first number: ');
var SecondN = input.question('Enter second number: ');
var ans = parseInt(FirstN)+ parseInt(SecondN);
console.log ("Here are the results: ");

console.log(FirstN + "+" + SecondN + "=" + ans);
console.log(FirstN + ' divisable by ' + SecondN + ' is ' + (FirstN % SecondN == 0));