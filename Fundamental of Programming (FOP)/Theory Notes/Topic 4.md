# Repetitions (Do While Loop)

Topic in this Document:



--------------------

<h2 id="1"> Repetitions

<h4>

- A more effective way to make use of the repetition/looping/iteration structures
    - For loop
    - while loop
    - do while loop

This topic will focus more on do-whole and while loop.

--------------------

<h2 id="2"> Do While Loop Syntax

<h4>

```JavaScript
do {
    // statements
} while (condition);
```

```JavaScript
var count = 0;
do {
    console.log("Welcome to JavaScript");
    count++;
} while (count < 10);
```
Output:
```
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
Welcome to JavaScript
```
Explain the output:
- The statements in the do block will be executed first before the condition is checked. <br>
- The statements in the do block will be executed at least once. <br>
- The statements in the do block will be executed repeatedly until the condition is false. <br>
- The condition is checked after the statements in the do block are executed. <br>


--------------------

<h2 id="3"> do-while Loop Example

<h4>

```JavaScript
var count = 0;
do {
    console.log("Welcome to JavaScript");
    count++;
} while (count < 2);
console.log("End of Program");
```
```
Output:
Welcome to JavaScript
Welcome to JavaScript
End of Program
```
Explain the output:
- The statements in the do block will be executed first before the condition is checked. <br>
- The statements in the do block will be executed at least once. <br>
- The statements in the do block will be executed repeatedly until the condition is false. <br>
- The condition is checked after the statements in the do block are executed. <br>
  

--------------------

<h2 id="4"> while Loop Example
