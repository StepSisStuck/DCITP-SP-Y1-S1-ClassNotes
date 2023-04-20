"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 1

   Clock
   Author: 
   Date:   

   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/


function getWeekday(dayNum) {
   var wDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   return wDays[dayNum];
}
