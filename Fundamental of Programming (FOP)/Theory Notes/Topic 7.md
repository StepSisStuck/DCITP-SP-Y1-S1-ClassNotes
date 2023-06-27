# Topic 7
[This is the practical](<../Practical/Practical 7>)
Table of Contents:


-------------------------

# Classes and Objects
An Example of a Class
```JavaScript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
```
## What is a Class?
A class is a blueprint for creating objects with pre-defined properties and methods. A class is a template for creating objects. It encapsulates data with code to work on that data. Classes in JavaScript do not actually offer additional functionality, and are often described as providing "syntactical sugar" over prototypes and inheritance in order to make object-oriented programming easier to understand and use.

## What is an Object?

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method. In addition to objects that are predefined in the browser, you can define your own objects. This chapter describes how to use objects, properties, functions, and methods, and how to create your own objects.


# Object Properties

You can use arrays and using objects to create complex data structures, such as lists and objects that contain other lists and objects. You can even use objects to create object methods.

Example:
```JavaScript
var person = {
    firstName: "John",
    lastName : "Doe",
    id       :  5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
```

Explain the example above:

- firstName, lastName, and id are called **properties** of the person object.

```JavaScript
var firstname = "John";

console.log("My first name is " + firstname + ".")

var car = {
    type: "Honda",
    model: "Civic",
    color: "White",
    year: 2010,
    price: 10000
};
    

console.log("My car brand is " + car.type + ".")
console.log("My car model is " + car.model + ".")
console.log("My car color is " + car.color + ".")
console.log("My car year is " + car.year + ".")
console.log("My car price is " + car.price + ".")
console.log("                                                 ")
console.log("My car brand is " + car["type"] + " and the model of the car is " + car["model"] +  " the price of the car is " + car["price"] + ".")
```

The code above is a JavaScript program that defines a variable called firstname and a JavaScript object called car.

The firstname variable is a string that contains the value "John". This variable is then used in a console.log() statement to print the message "My first name is John." to the console.

The car object contains several properties, including type, model, color, year, and price. These properties are accessed using dot notation and bracket notation in a series of console.log() statements. The dot notation is used to access the type, model, color, year, and price properties, while the bracket notation is used to access the type, model, and price properties.

The console.log() statements print various messages to the console, including the brand, model, color, year, and price of the car. The last console.log() statement uses both dot notation and bracket notation to print a message that includes the brand, model, and price of the car.

This program demonstrates how to define variables and objects in JavaScript, as well as how to access properties of an object using dot notation and bracket notation. It also uses the console.log() method to print messages to the console, which is a common technique used for debugging and testing JavaScript code.

Finally, the program uses npm, which is a package manager for JavaScript. It allows developers to easily install and manage third-party packages and libraries that can be used in their projects.


## Accessing Object Properties
You can access object properties in two ways:

- objectName.propertyName
- objectName["propertyName"]

