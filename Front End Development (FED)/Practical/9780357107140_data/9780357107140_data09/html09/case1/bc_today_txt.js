
/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 9
   Case Problem 1

   Today at the Union Script
   Author: 
   Date:   
   
   This script uses the getEvent() function to return the
   HTML code containin the daily events at the Bridger College
   student union.

*/



function getEvent(day) {
   var eventHTML;
   switch (day) {
      case 0: // Sunday Events
      eventHTML = "<dl> \
         <dt>Highlights from the Bridger Art Collection</dt> \
         <dd><p>An exhibition from over 60 items in the BC permanent collection.</p> \
             <p><strong>Location:</strong> Room A414</p> \
             <p><strong>Time:</strong> 12 am &ndash; 4 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Bridger Starlight Cinema</dt> \
         <dd><p>Recent, diverse, and provocative films straight from the art house. 35mm.</p> \
             <p><strong>Location:</strong> Fredric Whyte Play Circle</p> \
             <p><strong>Time:</strong> 7 pm &ndash 10 pm</p> \
             <p><strong>Cost:</strong> $3.75 MWU students, Union members, Union staff. $4.25 all others</p> \
         </dd> \
      </dl>";
      break;
      case 1: // Monday Events
      eventHTML = "<dl> \
         <dt>Monday Billiards</dt> \
         <dd><p>Play in the BC Billiards league for fun and prizes</p> \
             <p><strong>Location:</strong> Union Game Room </p> \
             <p><strong>Time:</strong> 7 pm &ndash; 11 pm</p> \
             <p><strong>Cost:</strong> $3.75 for registration</p> \
         </dd> \
         <dt>Distinguished Lecture Series</dt> \
         <dd><p>Cultural critic <em>Elizabeth Kellog</em> speaks on the issues of the day.</p> \
             <p><strong>Location:</strong> Union Theater</p> \
             <p><strong>Time:</strong> 7 pm &ndash; 9 pm</p> \
             <p><strong>Cost:</strong> free, seating is limited</p> \
         </dd> \
      </dl>";
      break;
      case 2: // Tuesday Events
      eventHTML = "<dl> \
         <dt>Alternative Breaks Spring Break Information Session</dt> \
         <dd><p>Make your spring break matter! Alt Breaks offers students inexpensive trips \
               (all under $500) around the US to participate on service projects in places such \
               as NYC, Florida Everglades and New Orleans. Travel. Serve. \
               Change lives...including yours.</p> \
             <p><strong>Location:</strong> Union Great Hall</p> \
             <p><strong>Time:</strong> 9 am &ndash; 5 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Spotlight Series</dt> \
         <dd><p>Former Lieutenant Governor, Joe Tierney, will present <em>The Dream Alive Program</em>, \
                celebrating the life of Martin Luther King, Jr.</p> \
             <p><strong>Location:</strong> Room 178</p> \
             <p><strong>Time:</strong> 7 pm &ndash; 8:30 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
      </dl>";
      break;      
         case 3: // Wednesday Events
      eventHTML = "<dl> \
         <dt>Volunteer Fair</dt> \
         <dd><p>Over 20 community organizations and schools will be on hand to promote their \
               volunteer opportunities with youth programs, enviromental issues, child care, \
               tutoring, health care, elder care, etc. </p> \
             <p><strong>Location:</strong> Union Great Hall</p> \
             <p><strong>Time:</strong> 9 am &ndash; 5 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Union Music Committee</dt> \
         <dd><p>Volunteer and gain experience in all areas of the music business: book bands, \
                create promotional campaigns, meet new people.</p> \
             <p><strong>Location:</strong> Room 125</p> \
             <p><strong>Time:</strong> 5 pm &ndash; 6:30 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>International Cinema</dt> \
         <dd><p><em>Close-Up (Iran)</em></p> \
             <p><strong>Location:</strong> Oakside Theater</p> \
             <p><strong>Time:</stgrong> 7 pm &ndash; 9 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
      </dl>";
      break;
      case 4: // Thursday Events
      eventHTML = "<dl> \
         <dt>Thursday Nite Open Mike</dt> \
         <dd><p>New later hours with more acts and karaoke added to the mix! \
                Students performing for students. Get your 15 minutes of \
                fame!. Sign up early for your slot.</p> \
             <p><strong>Location:</strong> Union Circle</p> \
             <p><strong>Time:</strong> 8 pm &ndash; 11:30 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Midnight Cinema</dt> \
         <dd><p><em>Amerika</em> From the the underground to the revolutionary.</p> \
             <p><strong>Location:</strong> Fredric Whyte Play Circle</p> \
             <p><strong>Time:</strong> 10 pm &ndash; 11:30 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Late Night Yoga</dt> \
         <dd><p>Sample different styles for Yoga for 15 weeks, Thursdays at the \
                BC Student Union.</p> \
             <p><string>Location:</strong> Rm B201</p> \
             <p><strong>Time:</strong> 6 pm &ndash; 7:15 pm</p> \
             <p><strong>Cost:</strong> free to students; $30 for guests (15 week session)</p> \
         </dd> \
      </dl>";
      break;         
         case 5: // Friday Events
      eventHTML = "<dl> \
         <dt>Conversation &amp; Coffee Hour</dt> \
         <dd><p>Meet people from around the world in a relaxing atmosphere. \
                Enjoy coffee, snacks, and informal conversation with  \
                people from other cultures and interests.</p> \
             <p><strong>Location:</strong> Room A210</p> \
             <p><strong>Time:</strong> 11:30 am &ndash; 1 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Behind the Beat</dt> \
         <dd><p><em>Clyde Barrett</em> of the Uptown Blues Band performs \
                contemporary jazz and blues.</p> \
             <p><strong>Location:</strong> Great Hall</p> \
             <p><strong>Time:</strong> 7 pm &ndash; 10 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Friday Nite Movies</dt> \
         <dd><p><em>Masters of Fate</em></p> \
             <p><strong>Location:</strong> Fredric Whyte Play Circle</p> \
             <p><strong>Time:</strong> 7 pm &ndash; 9:30 pm; 10 pm &ndash; midnight</p> \
             <p><strong>Cost:</strong> $5.50</p> \
         </dd> \
      </dl>";
      break;
      case 6: // Saturday Events
      eventHTML = "<dl> \
         <dt>Kites on the Concourse</dt> \
         <dd><p>Enjoy beautiful kites from around the world and then make and \
                fly kites of your own invention.</p>\
             <p><strong>Location:</strong> Union Concourse</p> \
             <p><strong>Time:</strong> 10 am &ndash; 3 pm</p> \
             <p><strong>Cost:</strong> free</p> \
         </dd> \
         <dt>Saturday Bargain Billiards</dt> \
         <dd><p>Play unlimited pool every Saturday night.</p> \
             <p><strong>Location:</strong> Union Game Room</p> \
             <p><strong>Time:</strong> 7 pm &ndash; 11:30 pm</p> \
             <p><strong>Cost:</strong> $4.25 with student ID</p> \
         </dd> \
         <dt>Great Hall Music Ball </dt> \
         <dd><p><em>Ian Gold and Free Space</em> perform contemporary \
             pop and rock.</p> \
             <p><strong>Location:</strong> Great Hall</p> \
             <p><strong>Time:</strong> 8 pm &ndash; midnight</p> \
             <p><strong>Cost:</strong> $5.75 with student ID</p> \
         </dd> \
      </dl>";
      break;      
   }
   
   return eventHTML
}