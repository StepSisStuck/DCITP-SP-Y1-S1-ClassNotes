/* var x ;
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



var mylist = [1, 5, 3, 8, 2, 10];
var max = mylist [0] ;

for (var i=1 ; i < mylist.length ; i++) {
    if (mylist[i] > max) {
        max = mylist[i] ;
    }
    console.log("Index " + i + " " + mylist[i]) ;
}


var arr1 = [-1, 0, 'one', '2', true, false, 5]; 
console.log(arr1.length); 
console.log(arr1[0]); 
console.log(arr1[2] + arr1[6]); 
console.log(arr1[4] + arr1[3]); 
console.log(typeof(arr1[4])); 
console.log(arr1[arr1[1]]); 
console.log(arr1[arr1.length + arr1[0]]); 

*/
var arr2 = new Array(24, 0, 19, 21, 6, -5, 10, 16);
var arr3 = [], sum = 0;
for (var k = 0; k < arr2.length; k += 2) {
sum += arr2[k];
if (arr2[k] < arr2[k+1])
arr3.push(arr2[k+1]); }
console.log(sum);