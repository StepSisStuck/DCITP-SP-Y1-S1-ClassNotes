var UserInput = require("readline-sync");

var num1 = UserInput.question("Enter a number: ");
function muiliTable(UserInput) {
    for (var x = 1; x <= 12; x++) {
        console.log(x + "x " + num1 + " = " + (x * num1));
    }
}
muiliTable(1);
