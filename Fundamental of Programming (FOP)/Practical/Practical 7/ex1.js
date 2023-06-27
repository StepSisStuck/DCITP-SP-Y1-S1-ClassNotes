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