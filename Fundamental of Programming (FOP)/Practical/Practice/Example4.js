var input = require('readline-sync');

var result = parseFloat(input.question("Please enter your score: "));

if (result >= 80) {
    console.log("You got an A");
}
else if (result >= 70) {
    console.log("You got a B");
}
else if (result >= 60) {
    console.log("You got a C");
}
else if (result >= 50) {
    console.log("You got a D");
}
else {
    console.log("You got an F");
}

