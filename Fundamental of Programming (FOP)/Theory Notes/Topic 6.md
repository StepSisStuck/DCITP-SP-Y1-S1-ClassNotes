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

