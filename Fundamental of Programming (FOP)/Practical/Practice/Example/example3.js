var input = require('readline-sync');

var num1= input.questionInt("Enter the first number: ");
var num2= input.questionInt("Enter the second number: ");


if (isNaN (num1) || isNaN(num2)) {
    console.log("Invalid input Please try again");
    }
else 
{
    if (num1 == num2)
    {
        console.log ("The two numbers are equal");

    }
    else
    {
        console.log ("The second number is bigger than the first number");
    }
}

/* ReferenceError: isNan is not defined
at Object.<anonymous> (c:\Users\Stanly\Desktop\GitHub\CommonICT\Fundamental of Programming (FOP)\Practical\Practice\example3.js:7:1)
at Module._compile (node:internal/modules/cjs/loader:1254:14)
at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
at Module.load (node:internal/modules/cjs/loader:1117:32)
at Module._load (node:internal/modules/cjs/loader:958:12)
at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
at node:internal/main/run_main_module:23:47
*/
// The error is because the function isNan is not defined. It should be isNaN.
