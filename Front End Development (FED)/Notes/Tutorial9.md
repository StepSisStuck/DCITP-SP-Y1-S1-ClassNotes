# Tutorial 9, with JavaScript

Table of Contents




--------------------

Javascript is a programming language that is used to make web pages interactive. It is a scripting language that is used to create and control dynamic website content, i.e. anything that moves, refreshes, or otherwise changes on your screen without requiring you to manually reload a web page.

# How many ways can you declare a variable in JavaScript?

There are 4 ways to declare a variable in JavaScript:

- var
- let
- const
- automatically by assigning a value to a variable

--------------------

# Using the var keyword

var variables can be re-declared and updated

```javascript
var x = 10;
var x = 20;
x = 30;
```

# Declaring a Variable (let)

let variables can be updated but not re-declared

```javascript
let variable = value;
```

Example 1:

```javascript
let name = "John";
name = "Doe";
```

Difference between var and let:

| With var you can: | With let you cannot: |
| ----------------- | -------------------- |
| var x = "John";   | let x = "John";      |
| var x = 0;    //ok    | let x = 0;      //ERROR     |


# Declaring a Constant (const)

Note: the `const` does not define a constant value. It defines a constant reference to a value. Because of this, we cannot change constant primitive values, but we can change the properties of constant objects.

You **cannot** :
- re-declare or update a constant
- reassign a constant array
- reassign a constant object

You **can** :
- change the elements of a constant array
- change the properties of a constant object

```javascript
const variable = value;
```


# Variable Scope

The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes.

- Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.
- Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.
- Block Scoped Variables − Variables declared inside a { } block cannot be accessed from outside the block:

```javascript
// code here can use carName

function myFunction() {
  // code here can also use carName
}

// code here can use carName
```


# Create a Object

The syntax for creating an object using object literal is:

```javascript
let object = {
   key1: value1,
   key2: value2,
   key3: value3,
}
```

Where object is the name of the object, and key1, key2, key3 are the keys of the object. The values can be a string, number, array, boolean, or another object.

Example:

```javascript
let person = {
   name: "John",
   age: 30,
   hobbies: ["reading", "music", "movies"],
   married: false,
   address: {
      street: "1 Main St",
      city: "Toronto",
      province: "ON",
      postalCode: "A1A 1A1"
   }
}
``` 

We can access the properties of the object using dot notation:

```javascript
person.name; // "John"
person.age; // 30
person.hobbies; // ["reading", "music", "movies"]
person.hobbies[0]; // "reading"
person.married; // false
person.address; // {street: "1 Main St", city: "Toronto", province: "ON", postalCode: "A1A 1A1"}
person.address.street; // "1 Main St"
person.address.city; // "Toronto"
person.address.province; // "ON"
person.address.postalCode; // "A1A 1A1"
```

We can also access the properties of the object using bracket notation:

```javascript
person["name"]; // "John"
person["age"]; // 30
person["hobbies"]; // ["reading", "music", "movies"]
person["hobbies"][0]; // "reading"
person["married"]; // false
person["address"]; // {street: "1 Main St", city: "Toronto", province: "ON", postalCode: "A1A 1A1"}
person["address"]["street"]; // "1 Main St"
person["address"]["city"]; // "Toronto"
person["address"]["province"]; // "ON"
person["address"]["postalCode"]; // "A1A 1A1"
```

