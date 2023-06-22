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






