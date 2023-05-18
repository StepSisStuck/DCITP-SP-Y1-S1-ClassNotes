/*var intArr = new Array(10); 
var biggest, biggestIndex; for(var i = 0 ; i < intArr.length ; i++) {     //generate a random integer between 1 & 10     intArr[i] = Math.floor(Math.random() * 10) + 1; }  // for e.g. [1,8,7,1,5,6,2,7,4,3]  
// Insert code here  
       for(var i = 0; i < intArr.length; i++) {         if(i == 0) {             biggest = intArr[i];             biggestIndex = i;         } else {             if(intArr[i] > biggest) {                 biggest = intArr[i];                 biggestIndex = i;             }         }     }  // End of code
       in2tArr[i] = Math.floor(Math.random() * 10) + 1; }  // for e.g. [1,8,7,1,5,6,2,7,4,3]

       var max = intArr[0]; 
       var index = 0;

         for(var i = 1; i < intArr.length; i++) {
                if(intArr[i] > max) {
                    max = intArr[i];
                    index = i;
                }
            }
     console.log("The largest number is " + biggest); console.log(biggest + " is stored at array index #" + biggestIndex);
     console.log(biggest + " is stored at array index #" + biggestIndex);  

     */


     var intArr = new Array(10);
     for (var i = 0; i < intArr.length; i++) {
       intArr[i] = Math.floor(Math.random() * 10) + 1;
     }
     
     var biggest = intArr[0];
     var biggestIndex = 0;
     
     for (var i = 1; i < intArr.length; i++) {
       if (intArr[i] > biggest) {
         biggest = intArr[i];
         biggestIndex = i;
       }
     }
     
     console.log(`The largest number is ${biggest}`);
     console.log(`${biggest} is stored at array index #${biggestIndex}`);