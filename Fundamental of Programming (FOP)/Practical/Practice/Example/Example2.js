var x = 1;
switch (x) {
case 1: x += 2;
case 2: x = 5;
break;
case 3: x = 2;
break;
case 5: x -= 2;
break;
}
console.log ('Value of x is ' + x);
// Why is the output 5?
// Because there is no break statement in case 1, so it will continue to case 2 and break there.
// If there is a break statement in case 1, the output will be 3.
// If there is a break statement in case 2, the output will be 5.
// If there is a break statement in case 3, the output will be 2.
