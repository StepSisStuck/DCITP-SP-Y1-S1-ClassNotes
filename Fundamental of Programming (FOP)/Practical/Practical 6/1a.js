function printMe() {
    for (var i = 0; i < 3; i++)
    console.log("My name is Dodo");
    }
    function printYou() {
    for (var x = 0; x < 2; x++)
    console.log("Your name is Bobo");
    }
    function printUs() {
    var i = 1;
    evenCounter = 0;
    do {
    console.log("We are FOPians");
    if (i % 2 == 0)
    evenCounter++;
    i++;
    } while (i < 5);
    console.log(evenCounter);
    }
    // Please refer to Part(a) to (d) below for
    // statements used to invoke selected function(s).

    printMe();
printYou();
console.log("End of program");
