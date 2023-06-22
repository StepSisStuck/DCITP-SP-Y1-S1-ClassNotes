function allmultiples(num1, num2, x) {
    var display = "";
    for (var i = num1; i <= num2; i++) {
        if (i % x == 0) {
            display += i + " ";
        }
    }
    return display;
}
