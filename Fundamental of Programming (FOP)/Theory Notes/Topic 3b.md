# Topic 3b: Repetition - For Loop
<h4>

Topics covered in this section: <br>
[1. For loop](#1) <br>
[2. How For loop works?](#2) <br>
[3. Logical Errors](#3) <br>
[4. Summary](#4) <br>

----------------------------------
<h2 id="1"> 
For loop
<h4>

For loop can be used like this 
``` Javascript
for(start; stop; increment){
    //code
}
```
for loops syntax is similar to while loop but it is more compact and easier to use.

Example:
``` Javascript
for(var i = 0; i < 10; i++){
    console.log(i);
}
```
- This will print out the numbers from 0 to 9.

    - After 10 loops, the condition ```i < 10``` will be false and the loop will stop.
    - Everything start from 0, so the first number is 0 and the last number is 9.


----------------------------------

<h2 id="2">
How For loop works?
<h4>

For loop is a loop that will run for a certain amount of time. It will run until the condition is false.

![Alt text](Images/11.png)


``` Javascript
var s ="";
for(var i = 0; i < 2; i++){
    s += i + " * ";
    s += i + "\n";
}
console.log(s + "*");
```
- This will print out:
```
0. * 0
1. * 1
*
```

- Write a loop that will print out the following numbers 1 to 100
``` Javascript
for(var i = 1; i <= 100; i++){
    console.log(i);
}
```
1. Why do we need the <=?
   - Because we want to print out 100 as well.
2. What is I remove the =?
   - It will only print out 99.
3. What is I change the < to >?
   - It will print out nothing.
4. What is I change the < to >= and what is the difference?
   - It will print out 1 to 100.
   - The difference is that it will print out 1 to 100 instead of 0 to 99.
   - <= means less than or equal to.
   - >= means greater than or equal to.

----------------------------------

<h2 id="3">
Logical Errors
<h4>

Logical errors are errors that are not syntax errors. It is an error that is caused by the programmer.

Example:
``` Javascript
for(var i = 0; i < 10; i++){
    console.log(i);
}
```
- This will print out the numbers from 0 to 9.

    - After 10 loops, the condition ```i < 10``` will be false and the loop will stop.
    - Everything start from 0, so the first number is 0 and the last number is 9.


----------------------------------

<h2 id="4">
Summary 
<h4>
To use for loop statements to control the flow of the program.

----------------------------------


