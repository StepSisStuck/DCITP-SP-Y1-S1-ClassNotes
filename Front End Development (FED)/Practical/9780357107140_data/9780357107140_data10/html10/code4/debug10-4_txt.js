"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Coding Challenge 4

   Debug
   Author: 
   Date:   


*/

var thisDay = new date();
var thisYear = thisDay.getFullYear();
var monthName = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
var htmlCode = "<h2>" + thisYear + "</h2>";

for (var i = 0, i < 12, i+) {
   WriteMonthTable(i);
}

document.getElementById("calendar").innerhtml = htmlCode;





/* Functions for creating the monthly table */
function writeMonthTable(monthNum) {
   /* Start the month table */
   htmlCode += "<table>";
   htmlCode += "<caption>" + monthName[monthNum] + "</caption>";
   
   /* Write the row containing the day of the week titles */
   htmlCode += "<tr>";
   htmlCode += "<th>S</th><th>M</th><th>T</th><th>W</th><th>T</th><th>F</th><th>S</th>";
   htmlCode += "</tr>";

   
   /* Write the rows containing the days of the month in table cells */  
   var calendarDay = new Date(); // Create a variable for days of the month
   
   calendarDay.setDate(1); // Set the date of the month 
   calendarDay.setMonth(monthNum);
   var weekDay = calendarDay.getDay(); // Get the weekday of the first day of the month
   
   /* Fill empty cells prior to the first day of the month */   
   htmlCode += "<tr>";
   for (var j = 0; j < weekDay; j++) {
      htmlCode += "<td></td>";
   }
   
   /* Write table cells for the rest of the days in the month 
      in separate table rows for each week */
   var totalDays = daysInMonth(monthNum);   
   
   for (var dayCount=1; dayCount<=totalDays; dayCount++) {
      calendarDay.setDate(dayCount);
      
      /* Start the table row on the first day of the week */
      if (calendarDay.getDay() = 0) {
         htmlCode += "<tr>";
      }
      
      /* Test whether the calendar date is equal to the current date */
      if ((dayCount = thisDay.getDate()) & (monthNum = thisDay.getMonth())) {
         htmlCode += "<td id='today'>" + dayCount + "</td>";
      } else {
         htmlCode += "<td>" + dayCount + "</td>";        
      }
      
      /* End the table row on the last day of the week */
      if (calendarDay.getDay() = 6) {
         htmlCode += "</tr>";
      }
   }
   htmlCode += "</tr>";
   
   /* Close the table */
   htmlCode += "</table>"; 
}



/* Function to return the number of days in a month */
function daysInMonth(monthNum) {
   var dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];
   if ((thisYear % 4 === 0)&&((thisYear % 100 !==0) || (thisYear % 400 === 0))) {
         dayCount[1] = 29;
   }
   return dayCount[monthNum];
}