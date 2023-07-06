# Topic 7
[This is the practical](<../Practical/Practical 7>)<br>


Table of Contents:
- [Topic 7](#topic-7)
- [Classes and Objects](#classes-and-objects)
  - [What is a Class?](#what-is-a-class)
  - [What is an Object?](#what-is-an-object)
- [Object Properties](#object-properties)
  - [Accessing Object Properties](#accessing-object-properties)
- [Example 1](#example-1)
- [Why shall we use Objects and Classes? / Advantages](#why-shall-we-use-objects-and-classes--advantages)
- [Attributes Defualt Value](#attributes-defualt-value)



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

# Example 1
```JavaScript
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius * this.radius;
    }
}

var c1 = new Circle(10);
var c2 = new Circle(20);
var c3 = new Circle(30);

var area_c1 = c1.getArea();

console.log("The area of c1 is " + area_c1 + ".");
console.log("The area of c2 is " + c2.getArea() + ".");
```

Code output:
The area of c1 is 314.1592653589793.
The area of c2 is 1256.6370614359173.
Code explanation:
- The code above defines a class called Circle that has a constructor method and a getArea() method.


-------------------------

# Why shall we use Objects and Classes? / Advantages

1. Encapsulation: Objects allow us to encapsulate data and behavior into a single entity. This makes it easier to manage and organize code, and helps to prevent data from being modified or accessed in unintended ways.

2. Abstraction: Objects provide a level of abstraction that allows us to focus on the essential features of a system, without getting bogged down in the details. This makes it easier to reason about code and to make changes to the system as requirements evolve.

3. Reusability: Objects can be reused in different parts of a system or in different systems altogether. This can save time and effort, and can help to ensure consistency and maintainability across different parts of a system.

4. Inheritance: Classes can inherit properties and methods from other classes, which can help to reduce code duplication and make it easier to manage complex systems.

5. Polymorphism: Objects can be used in different contexts and can respond to messages in different ways. This can make code more flexible and adaptable to changing requirements.

These are just a few examples of the benefits of using objects and classes in programming. By using objects and classes, we can create more modular, maintainable, and extensible code that is easier to reason about and work with.


-------------------------

# Attributes Defualt Value

In JavaScript, you can set default values for object attributes in a similar way to other programming languages. 

Here's an example of a JavaScript class with a default attribute value:

```javascript
class Person {
  constructor(name, age = 18) {
    this.name = name;
    this.age = age;
  }
}
```

In this example, the `Person` class has two attributes: `name` and `age`. The `name` attribute is required and must be specified when creating a new `Person` object. The `age` attribute, on the other hand, has a default value of `18`. If no value is specified for `age` when creating a new `Person` object, it will be assigned the default value of `18`.

You can also set default values for object attributes using the `||` operator. Here's an example:

```javascript
class Person {
  constructor(name, age) {
    this.name = name || 'John Doe';
    this.age = age || 18;
  }
}
```

In this example, the `Person` class has two attributes: `name` and `age`. If no value is specified for `name` or `age` when creating a new `Person` object, the default values of `'John Doe'` and `18` will be assigned to these attributes, respectively.

Default attribute values can be useful for providing sensible defaults for optional attributes, or for simplifying the process of creating new objects by reducing the number of required arguments. However, it's important to choose default values carefully, as they can affect the behavior of the object and the system as a whole.

