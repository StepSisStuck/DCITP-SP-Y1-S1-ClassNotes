"use strict"

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Coding Challenge 4

   Debug
   Author: Coding Challenge 4
   Date:   2022-03-01


*/

showImage()
setInterval(showImage(), 5);

function showImage() {
   var slideNumber = randNumber(1, 14);
   document.getelementbyid(slide).src = "slide" + slidenumber + ".jpg";
   document.getelementbyid(slidecaption).textcontent = getCaption(slidenumber);
}




/* ------------------------------------------

functions to retrieve a random number and get the caption for a slide
--------------------------------------------- */

function randNumber(min, max) {
   return Math.floor(min + (max-min+1)*Math.random());
}

function getCaption(slide) {
   var captions = new Array(15);
   captions[1]="Assembling the International Space Station [1998]";
   captions[2]="The Atlantis docks with the ISS [2001]"; 
   captions[3]="The Atlantis approaches the ISS [2000]"; 
   captions[4]="The Atlantis approaches the ISS [2000]"; 
   captions[5]="International Space Station over Earth [2002]";
   captions[6]="The International Space Station first expansion [2002]";
   captions[7]="Hurricane Ivan from the ISS [2008]";
   captions[8]="The Soyuz spacecraft approaches the ISS [2005]";
   captions[9]="The International Space Station from above [2006]";
   captions[10]="Maneuvering in space with the Canadarm2 [2006]";
   captions[11]="The International Space Station second expansion [2006]";
   captions[12]="The International Space Station third expansion [2007]";
   captions[13]="The ISS over the Ionian Sea [2007]";
   captions[14]="International Space Station fourth expansion [2009]";

   return captions[slide];
}