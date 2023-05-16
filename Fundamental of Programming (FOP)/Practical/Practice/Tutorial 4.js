var x ;
x = 0 ;

console.log("The value of x is " + x) ;

//array 
var arrlist = new Array (5) ;

arrlist[0] = 5 ;
arrlist[1] = 10 ;
arrlist[2] = 3 ;
arrlist[3] = 2 ;
arrlist[4] = 7 ;
arrlist[5] = 15 ;
console.log("the value of index 0 for arrlist is " + arrlist[0]) ;
console.log("the value of index 1 for arrlist is " + arrlist[1]) ;
console.log("the value of index 2 for arrlist is " + arrlist[2]) ;
console.log("the value of index 3 for arrlist is " + arrlist[3]) ;
console.log("the value of index 4 for arrlist is " + arrlist[4]) ;
console.log("the value of index 5 for arrlist is " + arrlist[5]) ;


for (var i = 0 ; i < arrlist.length ; i++) {
    console.log("Index " + i + " " + arrlist[i]) ;
}
