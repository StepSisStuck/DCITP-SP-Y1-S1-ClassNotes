/*output  3 6 9 12 15 18 for loop
for (var x = 3; x <= 18; x += 3) {
    console.log(x);
}

Output: 25-20-15-10-5-0
for (var x = 25; x >= 0; x -= 5) {
    console.log(x);
}

// Output: 1 8 27 64 125
for (var x = 1; x <= 5; x++) {
    console.log(Math.pow(x, 3));
}




var x = "*";
for (var i = 1; i <= 4; i++) {
    console.log(x);
    x += "*";
}





for (var a = 1, b = 5 * a; a <= 12; a++) {
    console.log(a + "x" + "5 ="  + b);
    b += 5;
}


const input = require('readline-sync');

var sum = 0;
for (var i = 1; i <=5; i++ )
 {
var num = input.questionInt("number " + i + " : ");

sum += num;

}
console.log("Your sum is " + sum);
*/


 
/* Enter 1st number: 2 Enter 2nd number: 11  Odd numbers between 2 & 11: 3 5 7 9 
const input = require('readline-sync'); */
const input = require('readline-sync');

num1 = input.questionInt("Enter a number 1: ");
num2 = input.questionInt("Enter a number 2: ");

for (var i = num1 +1 ; i < num2; i++) {

        if (i % 2 !== 0) {
            console.log(i);
        }

    
    
} 

