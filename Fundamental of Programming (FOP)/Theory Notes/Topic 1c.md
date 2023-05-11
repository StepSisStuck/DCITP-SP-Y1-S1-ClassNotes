# Topic 1C

## [Document to refer](../School%20Notes/Topic%201c%20Intro%20to%20JavaScript%20Programming_DataTypesv1.pdf)

# Table of Contents Listed Below:

- [Topic 1C](#topic-1c)
  - [Document to refer](#document-to-refer)
- [Table of Contents Listed Below:](#table-of-contents-listed-below)
- [Escape Sequences](#escape-sequences)
  - [How to type " in a string](#how-to-type--in-a-string)
  - [How to put in a new line" in a string](#how-to-put-in-a-new-line-in-a-string)
- [Comennting in Javascript](#comennting-in-javascript)
  - [Single Line Comennting](#single-line-comennting)
  - [Multi Line Commenting](#multi-line-commenting)
- [Variable](#variable)
  - [What is a variable?](#what-is-a-variable)
  - [Example for this code](#example-for-this-code)
  - [Declaring a variable](#declaring-a-variable)
  - [List of data type](#list-of-data-type)
- [Initialising a variable](#initialising-a-variable)
  - [Re-initializing a variable.](#re-initializing-a-variable)
  - [Special Math funtions](#special-math-funtions)
- [Reserved words](#reserved-words)


------------------
# Escape Sequences


An escape sequence is a combination of characters that represents a single character. For example, the escape sequence `\n` represents a newline character. The following table lists some of the most common escape sequences.
![Alt text](Images/1.PNG)

``` javascript
console.log("c:\\user");

```

    If my require to put one \
    I put two \, it will show me one \

    If my require to put two \\ 
    I put four \\\\, it will show me two \\
   
   [Something to refer to](../Practical/Practice/Require.js)


 --------------------------------
## How to type " in a string
 
The wrong way
``` javascript
console.log("I "love" you");
```

    The I "love" you is not a valid string. Because the "love" is not a valid string. So we need to use escape sequence.
The right way

``` javascript
console.log("I \"love\" you");
```

    The I "love" you is a valid string. Because the "love" is a valid string. So we need to use escape sequence.
    Remeber to add \ before the ".
    
 [Something to refer](../Practical/Practical%200/helloworld.js)


------------------
## How to put in a new line" in a string

``` javascript
console.log("The quick brown fox /njumps over the lazy dog");
```
    The quick brown fox 

    jumps over the lazy dog

    If you put a /n in the string, it will show you a new line.



-------------------------
# Comennting in Javascript

## Single Line Comennting 
``` javascript
console.log("The quick brown fox \njumps over the lazy dog"); // You can use "//" to use to comment 
```
## Multi Line Commenting
``` javascript
console.log("The quick brown fox")
/*
This will use a muiltiline comment
start /* and end with */ 

```
# Variable

## What is a variable?
A variable is a named storage for data. We can use variables to store data.

![Alt text](Images/2.PNG)

## [Example for this code](../Practical/Practical%201/programmingexample1.js)

------------------- 

## Declaring a variable

Although we can declare a variable using the var keyword, it does not require the var keyword. 

However, it is a good practice to always use the var keyword to declare a variable. 




--------------------------------

``` javascript
var  _myname, $cash , hundred1, chong_cs
// This will work
var  _myname, $cash , 1hundred, chong cs
//This will not work
```

If you do not assign a number, it will be undefined/null


This is the content of my section.

## List of data type
- String
   - a string is a sequence of characters 
   - NRIC, admin number, postal code, name, address, etc
- Boolean 
    - true or false
- Integer
    - 1,2,3,4,5,6,7,8,9,0
    - rececept number, phone number, etc
- Double
    - 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 0.0
- Float point = 10 x 10^-2
    - 1.1, 2.2, 3.3, 4.4, 5.5, 6.6, 7.7, 8.8, 9.9, 0.0

-------------------------
# Initialising a variable


``` javascript
var x; //x is undefined
var x = 5; //x is 5
//print x
console.log(x); //5
```
## Re-initializing a variable.



``` javascript
var area = 5; // Declaring a variable
area = 8; // Re-initializing a variable
```
-------------------------
## Special Math funtions



> Math.floor(58.3) result in 58

> Math.ceil(58.3) result in 59

> Math.sqrt(100) result in 10

> Math.pow(2,3) result in 8

> Math.random() result in 0.123456789


# Reserved words


| Reserved Word | Description |
|---------------|-------------|
| `break` | Used to terminate a loop or switch statement |
| `case` | Used to define a branch in a switch statement |
| `catch` | Used to handle exceptions thrown by try...catch statements |
| `class` | Used to define a class |
| `const` | Used to declare a constant variable (Cannoot change the var) |
| `continue` | Used to skip to the next iteration of a loop |
| `debugger` | Used to pause JavaScript execution and launch a debugger |
| `default` | Used to define a default case in a switch statement |
| `delete` | Used to delete an object's property |
| `do` | Used to create a do...while loop |
| `else` | Used to specify an alternative block of code to be executed |
| `export` | Used to export a module from a file |
| `extends` | Used to create a subclass of a class |
| `finally` | Used to specify a block of code to be executed after a try...catch statement |
| `for` | Used to create a for loop |
| `function` | Used to define a function |
| `if` | Used to specify a block of code to be executed if a condition is true |
| `import` | Used to import a module into a file |
| `in` | Used to check if a property exists in an object |
| `instanceof` | Used to check if an object is an instance of a specified class |
| `let` | Used to declare a block-scoped variable |
| `new` | Used to create an instance of a class |
| `return` | Used to specify a value to be returned from a function |
| `super` | Used to call a method on an object's parent |
| `switch` | Used to evaluate an expression and execute a specific case |
| `this` | Refers to the current object |
| `throw` | Used to throw an exception |
| `try` | Used to specify a block of code to be tested for errors |
| `typeof` | Used to determine the type of a value |
| `var` | Used to declare a variable |
| `void` | Used to specify that a function does not return a value |
| `while` | Used to create a while loop |
| `with` | Used to specify an object to use as a default context for a block of code |
| `yield` | Used to pause and resume a generator function |
| `async` | Used to define an asynchronous function |
| `await` | Used to pause the execution of an asynchronous function until a promise is resolved |
| `static` | Used to define a static method or property for a class |
| `get` | Used to define a getter method for an object property |
| `set` | Used to define a setter method for an object property |
