 var input = require('readline-sync');
/*
 var username= input.question('May I have your name? ');
console.log('Hello ' + username + '!')

var favFood = input.question("What is your favourite food? ");
console.log('Oh,'+ username + ' I like to eat ' + favFood + ' too!')

var a = input.questionInt("What is your number for A? ");
var b = input.questionInt("What is your number for B? ");
// var c = parseInt (a) + parseInt (b);
var c = a + b;

console.log("c " + c);

var a = input.questionInt("What is your number for A? ");
var b = input.questionInt("What is your number for B? ");
// var c = parseInt (a) + parseInt (b);
var c = a * b;

console.log("c " + c);



*/

x = "5";
num1 = x * 2;
num2 = x / 2;
num3 = x + 2;
num4 = x - 2;

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);
console.log(typeof num4);


var mark = 90;
if (mark >= 80) {
    grade = "A";

}
console.log('Your grade is ' + grade);

var UserMark;
UserMark = input.questionInt("What is your mark? ");
if (UserMark >= 80) {
    grade = "A";
    console.log('Your grade is ' + grade);
}
else if (UserMark >= 70) {
    grade = "B";
    console.log('Your grade is ' + grade);
}
else if (UserMark >= 60) {

    grade = "C";
    console.log('Your grade is ' + grade);
}

else if (UserMark >= 50) {

    grade = "D";
    console.log('Your grade is ' + grade);
}

else if (UserMark >= 40) {

    grade = "E";
    console.log('Your grade is ' + grade);
}

else if (UserMark <= 30) {

    grade = "F";
console.log('Your grade is ' + grade);

}
