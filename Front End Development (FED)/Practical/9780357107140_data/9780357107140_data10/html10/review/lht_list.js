"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Review Assignment

   The eventDates array contains the dates of events at the LHT
   The eventDescriptions array contains the event names
   The eventPrices array contains the cost of the events
*/

var eventDates = ["August 30, 2021 11:00:00", "August 31, 2021 19:00:00", "September 1, 2021 19:30:00", 
                 "September 3, 2021 19:00:00", "September 3, 2021 20:00:00", "September 4, 2021 19:30:00", 
                 "September 6, 2021 11:00:00", "September 6, 2021 19:00:00", "September 8, 2021 19:00:00", 
                 "September 10, 2021 19:30:00", "September 10, 2021 19:30:00", "September 11, 2021 19:30:00", 
                 "September 13, 2021 11:00:00", "September 14, 2021 19:00:00", "September 15, 2021 19:30:00", 
                 "September 17, 2021 19:30:00", "September 19, 2021 19:30:00", "September 18, 2021 19:30:00", 
                 "September 20, 2021 11:00:00", "September 20, 2021 19:00:00", "September 22, 2021 18:00:00", 
                 "September 24, 2021 19:00:00", "September 24, 2021 20:00:00", "September 25, 2021 20:00:00", 
                 "September 27, 2021 11:00:00", "September 28, 2021 18:00:00", "September 29, 2021 18:00:00", 
                 "October 1, 2021 19:30:00", "October 2, 2021 19:00:00", "October 3, 2021 11:00:00", 
                 "October 5, 2021 19:00:00", "October 6, 2021 19:00:00", "October 7, 2021 19:00:00", 
                 "October 8, 2021 19:00:00", "October 9, 2021 19:00:00", "October 10, 2021 11:00:00",
                 "October 11, 2021 19:00:00", "October 13, 2021 20:00:00", "October 14, 2021 20:00:00"];
                 
var eventDescriptions = ["Classics Brunch", "Lasers and Light", "Dixieland Jazz Masters", 
                        "Classic Cinema: Wings", "The Future is Prologue", "American Favorites", 
                        "Classics Brunch", "LHT Jazz Band", "Civic Forum", "Hamilton", "Hamilton", 
                        "Hamilton", "Classics Brunch", "Hacking your Dreams", "Hamilton", "Hamilton", 
                        "Hamilton", "Hamilton", "Classics Brunch", "What Einstein Got Wrong", 
                        "Governor's Banquet", "Classic Cinema: City Lights", "Stardust Memories", 
                        "Summer Concert", "Classics Brunch", "Childrens Shakespeare", "Kids Fair", 
                        "Have Spacesuit, Will Travel", "Cabaret", "Classics Brunch", 
                        "Visions of Light and Dreams", "San Diego Blues", "Cabaret", "Cabaret", 
                        "Cabaret", "Classics Brunch", "Classic Cinema: Safety First", "Exit Stage Left", "Antonio Perez"];

var eventPrices = ["$12", "$12/$18/$24", "$22/$31/$47", "$5", "$18/$24/$36", "$24/$36/$48", "$12", "$24", 
                 "free", "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "free", "$48/$64/$88", 
                 "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "free", "by invitation", "$5", 
                 "$24/$36/$48", "$16/$24", "$12", "free", "free", "$22/$36/$48", "$48/$64/$88", "$12", 
                 "$18/$32", "$24/$36", "$48/$64/$88", "$48/$64/$88", "$48/$64/$88", "$12", "$12",
                 "$18/$28/$36", "$32/$48/$64"];
