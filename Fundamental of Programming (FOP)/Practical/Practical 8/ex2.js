class Square {
    constructor(length) {
      this.length = length;
    }
    calculateArea() {
      return this.length ** 2;
    }
  }
  
  var sqArray = [];
  for (var i = 0; i < 10; i++) {
    var len = Math.floor(Math.random() * 11) + 10;
    var square = new Square(len);
    sqArray.push(square);
  }
  
  console.log("Length");
  for (var i = 0; i < sqArray.length; i++) {
    console.log(sqArray[i].length);
  }
  
  console.log("\nArea");
  for (var i = 0; i < sqArray.length; i++) {
    console.log(sqArray[i].calculateArea());
  }