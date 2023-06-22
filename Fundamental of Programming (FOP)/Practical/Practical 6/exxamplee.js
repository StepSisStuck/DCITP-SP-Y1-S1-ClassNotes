var display = "";
for (var x = 0; x < 5; x++) {
    for (var i = 0; i < 4; i++) {
        var num1 = Math.floor(Math.random() * 10);
        display = display + num1 + " ";
        ///console.log(num1);
    }
    console.log(display);
    display = "";
}