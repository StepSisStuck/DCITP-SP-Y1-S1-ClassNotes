class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  
    enlargeCircle() {
      this.radius *= 3;
      console.log("Circle is enlarged 3 times.");
    }
  
    shrinkCircle() {
      this.radius /= 2;
      console.log("Circle is shrunk by halve.");
    }
  }
  
  let circle1 = new Circle(2);
  console.log("Area of circle1 with radius " + circle1.radius + " is " + circle1.getArea());
  
  circle1.enlargeCircle();
  console.log("Area of circle1 with radius " + circle1.radius + " is " + circle1.getArea());
  
  circle1.shrinkCircle();
  console.log("Area of circle1 with radius " + circle1.radius + " is " + circle1.getArea());