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