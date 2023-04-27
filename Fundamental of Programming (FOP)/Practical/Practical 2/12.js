var input = require('readline-sync');

var UserName= input.question('Enter your name: ');
var Salary = input.questionInt('Enter your salary: ');



if (Salary < 1000)
{
    increment = Salary * (20/100);
    newSalary = Salary + increment;
    console.log("Your new salary is: " + newSalary);
}

else if ((Salary >= 1000) && (Salary < 2000))
{
    increment = Salary * (15/100);
    newSalary = Salary + increment;
    console.log("Your new salary is: " + newSalary);
}

else if (Salary >= 2000) 
{
    increment = Salary * (10/100);
    newSalary = Salary + increment;
    console.log("Your new salary is: " + newSalary);

}