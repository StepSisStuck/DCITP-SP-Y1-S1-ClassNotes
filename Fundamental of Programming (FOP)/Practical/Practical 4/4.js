var x = 80;
display = "";

while (x >= 5) {
    if (x == 5) {
        display += x;
    } else {
        display += x + "-";
    
    }
    //console.log(x + "-");
    x /= 2;
} 
console.log(display);