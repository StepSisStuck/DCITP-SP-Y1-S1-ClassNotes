"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 3

   Clock Face
   Author: 
   Date:   


*/





/* ------------------------------------------------

   The rotateHand() using the transform style to rotate the hand
   image by a specified angle
*/

function rotateHand(angle, hand) {
   document.getElementById(hand).style.transform = "rotate(" + angle + "deg)";
}
