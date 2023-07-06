class Rectangle {

    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

let r1 = new Rectangle(10, 5);
console.log("Area of rectangle r1 is " + r1.getArea());
console.log("Perimeter of rectangle r1 is " + r1.getPerimeter());
