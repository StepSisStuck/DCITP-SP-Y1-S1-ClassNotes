# Topic 8

Table of Contents:



-------------------------
# Arrays for Storing Data
### Example 1

The `.push()` method in JavaScript is used to add one or more elements to the end of an array and returns the new length of the array. 

Here's an example of how to use the `.push()` method to add a new element to the `animal` array:

```javascript
var animal = ["Dog", "Cat", "Bird", "Fish"];
animal.push("Rabbit");
console.log(animal); // Output: ["Dog", "Cat", "Bird", "Fish", "Rabbit"]
```

In this example, the `.push()` method is used to add the string "Rabbit" to the end of the `animal` array. The `console.log()` statement is used to output the updated array to the console, which should display `["Dog", "Cat", "Bird", "Fish", "Rabbit"]`.

-------------------------
# Example 2

```javascript
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

var c1 = new Circle(5);

console.log("The area of circle is " + c1.getArea() + ".");

var circle = [];
circle.push(new Circle(10));
circle.push(new Circle(12));
circle.push(new Circle(8));

console.log("The area of circle with radius " + circle[0].radius + " is " + circle[0].getArea() + ".");

console.log("The area of circle with radius " + circle[1].radius + " is " + circle[1].getArea() + ".");

console.log("The area of circle with radius " + circle[2].radius + " is " + circle[2].getArea() + ".");
```

Code output:
The area of circle is 78.53981633974483.
The area of circle with radius 10 is 314.1592653589793.
The area of circle with radius 12 is 452.3893421169302.

Code explanation:
- The code above defines a class called Circle that has a constructor method and a getArea() method.
- The constructor method is used to initialize the radius property of the Circle object.
- The getArea() method is used to calculate the area of the Circle object.
- The code also defines an array called circle that contains three Circle objects.
- The first Circle object has a radius of 10, the second Circle object has a radius of 12, and the third Circle object has a radius of 8.

-------------------------

# Array of Objects

- An array of objects is a collection of objects that are stored in an array.
- The objects in the array can be accessed using the index of the object in the array.
- The following example shows how to create an array of objects:

```javascript
var person1 = { name: "John", age: 20 };
var person2 = { name: "Mary", age: 25 };
var person3 = { name: "Bob", age: 30 };

var people = [person1, person2, person3];

console.log(people[0].name); // Output: John
console.log(people[1].name); // Output: Mary
console.log(people[2].name); // Output: Bob
```

- In the example above, an array of objects is created using the following code:

```javascript
var people = [person1, person2, person3];
```

- The array contains three objects: person1, person2, and person3.
- The objects in the array can be accessed using the index of the object in the array.
- For example, the first object in the array can be accessed using the following code:

```javascript
people[0]
```

- The second object in the array can be accessed using the following code:

```javascript
people[1]
```

- The third object in the array can be accessed using the following code:

```javascript
people[2]
```

- The objects in the array can also be accessed using the dot notation.
- For example, the name property of the first object in the array can be accessed using the following code:

```javascript
people[0].name
```

- The age property of the second object in the array can be accessed using the following code:

```javascript
people[1].age
```

- The name property of the third object in the array can be accessed using the following code:

```javascript
people[2].name
```

-------------------------

# Data Type

| Primitive Data Types | Reference Data Types |
| -------------------- | -------------------- |
| String               | Array                |
| Number               | Object               |
| Boolean              | Function             |
| Null                 |                      |
| Undefined            |                      |

-------------------------

# Pass by Value vs Pass by Reference

- In JavaScript, there are two ways to pass data to a function: pass by value and pass by reference.
- When you pass a primitive data type to a function, the value of the variable is copied into the function's parameter.

```javascript
var x = 10;

function changeValue(x) {
    x = 20;
}

changeValue(x);

console.log(x); // Output: 10
```

- In the example above, the value of the variable x is copied into the function's parameter.

- When you pass an object to a function, the reference to the object is copied into the function's parameter.

```javascript

var person = { name: "John", age: 20 };

function changeValue(person) {
    person.name = "Mary";
    person.age = 25;
}

changeValue(person);

console.log(person.name); // Output: Mary

console.log(person.age); // Output: 25
```

- In the example above, the reference to the object person is copied into the function's parameter.

-------------------------



