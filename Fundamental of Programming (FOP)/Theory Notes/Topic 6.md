# Functions

Table of Contents:

------------------

# What is a function?
- A function is a block of code that performs a specific task.
- A function is a block of code that performs a specific task. It can be called from other parts of the code, allowing for code reuse and modularity.

Example of a function:
```Javascript
function printme() {
    for (var i = 0; i < 2; i++) {
        console.log("Hello World");
    }
}

printme();
```

Explanation:
- The function is called `printme`.
- `printme()`. When this function is called, it will execute a `for` loop that will run two times. During each iteration of the loop, the function will print the string "Hello World" to the console using the `console.log()` method.

The `for` loop in this function uses a variable called `i` to keep track of the number of iterations. The loop will continue to run as long as `i` is less than 2. During each iteration, the value of `i` will be incremented by 1.

This function is a simple example of how to use a loop to repeat a task multiple times. In this case, the task is to print a message to the console. By using a loop, we can easily repeat this task without having to write the same code multiple times.



------------------
# Calling a function
- A function is called by using its name followed by parentheses `()`.

Example of calling a function:
```Javascript
function printme() {
    for (var i = 0; i < 2; i++) {
        console.log("Hello World");
    }
}

printme();
```

Explanation:
- The function is called `printme`.

The function is called by using its name followed by parentheses `()`. In this case, the function is called `printme`. When the function is called, it will execute a `for` loop that will run two times. During each iteration of the loop, the function will print the string "Hello World" to the console using the `console.log()` method.

## Return statement

A function can return a value by using the `return` statement. The `return` statement is used to return a value from a function. It can be used to return a value from a function.

Example of a function with a return statement:
```Javascript
function add(a, b) {
    return a + b;
}

var result = add(1, 2);
console.log(result);
```

Explanation:
- The function is called `add`.
- The code above is a JavaScript program that defines a function called `add()`. This function takes two parameters, `a` and `b`, and returns the sum of these two values using the `+` operator.

After defining the `add()` function, the code calls this function with arguments `1` and `2` and stores the result in a variable called `result`. The code then prints the value of `result` to the console using the `console.log()` method.

This program demonstrates how to define and call a function in JavaScript. By defining a function, we can encapsulate a block of code that performs a specific task and reuse it throughout our program. In this case, the `add()` function performs a simple addition operation, which is used to calculate the sum of two numbers.

The program also uses the `console.log()` method to print the result of the addition operation to the console. This is a common technique used for debugging and testing JavaScript code.


------------------
# Call Stack (LIFO) Last In First Out

- A call stack is a data structure that stores information about the active subroutines of a computer program. The call stack is used to keep track of the order in which subroutines are called and to store information about the parameters passed to each subroutine.

## Example of a call stack:
```Javascript
function add(a, b) {
    return a + b;
}   // 1st

function multiply(a, b) {
    return a * b;
}   // 2nd

function subtract(a, b) {
    return a - b;
}   // 3rd

var result = subtract(multiply(add(1, 2), 3), 4);

console.log(result);
```

Explanation:
- The code above is a JavaScript program that defines three functions: `add()`, `multiply()`, and `subtract()`. These functions take two parameters, `a` and `b`, and return the sum, product, and difference of these two values, respectively.


------------------
# Pass by value vs Pass by reference

## Pass by value
- Pass by value is a method of passing arguments to a function. In this method, the value of the argument is copied into a new variable and then passed to the function. The function can then modify the value of the argument without affecting the original variable.

Example of pass by value:
```Javascript
function add(a, b) {
  return a + b;
}

var x = 1;
var y = 2;
var result = add(x, y);

console.log(result); // Output: 3
console.log(x); // Output: 1
console.log(y); // Output: 2

```

Explanation:
- The code above is a JavaScript program that defines a function called `add()`. This function takes two parameters, `a` and `b`, and returns the sum of these two values using the `+` operator.




## Pass by reference

- Pass by reference is a method of passing arguments to a function. In this method, the address of the argument is passed to the function. The function can then modify the value of the argument without affecting the original variable.

- In this example, the `add()` function takes two parameters, `a` and `b`, which are primitive data types. When the function is called with arguments `x` and `y`, the values of `x` and `y` are copied and passed to the function. This means that any changes made to `a` and `b` inside the function do not affect the original variables `x` and `y`.

Example of pass by reference:
```Javascript
function changeName(person) {
  person.name = 'John';
}

var myPerson = { name: 'Jane' };
changeName(myPerson);

console.log(myPerson); // Output: { name: 'John' }
```

Explanation:
- The code above is a JavaScript program that defines a function called `changeName()`. This function takes one parameter, `person`, and changes the value of the `name` property of this object to "John".

- In this example, the `changeName() `function takes one parameter, `person`, which is an object. When the function is called with the `myPerson` object, a reference to the object is passed to the function. This means that any changes made to the `person` object inside the function affect the original myPerson object. In this case, the `name` property of the `myPerson` object is changed from `'Jane'` to `'John'`.


------------------

``` Javascript
var myColor = "blue";

function changeColor() {
    var anotherColor = "red";
    console.log("Color inside function: " + anotherColor);
    console.log("myColor inside function: " + myColor);
}

console.log("My Color is: " + myColor);
changeColor();
console.log("Color outside function: " + anotherColor);

```

Explanation:
- The code above is a JavaScript program that defines a variable called `myColor` and a function called `changeColor()`. The variable `myColor` is initialized with the value `"blue"`. The function `changeColor()` is defined with a local variable called `anotherColor` that is initialized with the value `"red"`. The function also prints the value of `anotherColor` to the console. The function then prints the value of `myColor` to the console. The function is then called. The function prints the value of `anotherColor` to the console. The function then prints the value of `myColor` to the console. The function then returns. The program then prints the value of `myColor` to the console. The program then prints the value of `anotherColor` to the console.

------------------

# Math Funtions

## Math.random()
- The `Math.random()` function returns a floating-point, pseudo-random number in the range [0, 1) (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

Example:
```Javascript
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));

```

Output:
```Javascript
0
```

Explanation:

- The code above is a JavaScript program that defines a function called `getRandomInt()`. This function takes one parameter, `max`, which is the maximum value of the random number that will be generated. The function then returns a random integer between 0 and `max` (inclusive). The function uses the `Math.random()` function to generate a random number between 0 and 1 (exclusive). The function then multiplies this number by `max` and rounds it down to the nearest integer using the `Math.floor()` function.




## Math.floor()

- The `Math.floor()` function returns the largest integer less than or equal to a given number.

Example:
```Javascript
console.log(Math.floor(1.95));
// expected output: 1

console.log(Math.floor(-1.95));

```

Output:
```Javascript
1
```

Explanation:

- The code above is a JavaScript program that uses the `Math.floor()` function to round a number down to the nearest integer. The `Math.floor()` function takes one parameter, `x`, which is the number to be rounded down. The function returns the largest integer less than or equal to `x`.




## Math.ceil()

- The `Math.ceil()` function always rounds a number up to the next largest integer.

Example:
```Javascript
console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));

```

Output:
```Javascript

1
```

Explanation:

- The code above is a JavaScript program that uses the `Math.ceil()` function to round a number up to the next largest integer. The `Math.ceil()` function takes one parameter, `x`, which is the number to be rounded up. The function returns the smallest integer greater than or equal to `x`.



## Math.round()

- The `Math.round()` function returns the value of a number rounded to the nearest integer.


Example:
```Javascript
console.log(Math.round(0.9));
// expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));

```

Output:
```Javascript
1
```

Explanation:

- The code above is a JavaScript program that uses the `Math.round()` function to round a number to the nearest integer. The `Math.round()` function takes one parameter, `x`, which is the number to be rounded. The function returns the value of `x` rounded to the nearest integer.



## Math.pow()

- The `Math.pow()` function returns the base to the exponent power, that is, baseexponent.

```Javascript  
console.log(Math.pow(7, 2));
// expected output: 49

console.log(Math.pow(4, 0.5));
// expected output: 2

console.log(Math.pow(7, -2));

```

Output:
```Javascript
49
```

Explanation:

- The code above is a JavaScript program that uses the `Math.pow()` function to calculate the value of a number raised to a power. The `Math.pow()` function takes two parameters, `base` and `exponent`, which are the base and exponent of the power. The function returns the value of `base` raised to the power of `exponent`.

------------------
```Javascript
function muiliTable() {
    for (var x = 1; x <= 12; x++) {
        console.log(x + " x 5 = " + (x * 5));}
}
```
Output:
```Javascript
1 x 5 = 5
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
11 x 5 = 55
12 x 5 = 60
```

Explanation:

- The code above is a JavaScript program that defines a function called `muiliTable()`. This function takes no parameters. The function then prints the multiplication table for the number 5 to the console. The function uses a for loop to iterate through the numbers 1 through 12. The function then prints the number and the result of multiplying the number by 5 to the console.







