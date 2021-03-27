// DOM VARIABLES ---------------------------------------------------------
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));
var currentHour = moment();	
$("#currentHour").text(today.format("LT"));
	



// JAVASCRIPT VARIABLES --------------------------------------------------

  var time1 = 8;
  var time2 = 9;
  var time3 = 10;
  var time4 = 11;
  var time5 = 12;
  var time6 = 13;
  var time7 = 14;
  var time8 = 15;
  var time9 = 16;



   




// FUNCTION DEFINITIONS --------------------------------------------------

function updateRow1() {
  var hr = (new Date()).getHours()
  if (hr < time1) {
    $( ".row1" ).addClass( "future" );
  } else if (hr > time1) {
      $( ".row1" ).addClass( "past" );
  } else if (hr == time1) {
      $( ".row1" ).addClass( "present" );
  } 
};

function updateRow2() {
  var hr = (new Date()).getHours()
  if (hr < time2) {
    $( ".row2" ).addClass( "future" );
  } else if (hr > time2) {
      $( ".row2" ).addClass( "past" );
  } else if (hr == time2) {
      $( ".row2" ).addClass( "present" );
  } 
};

function updateRow3() {
  var hr = (new Date()).getHours()
  if (hr < time3) {
    $( ".row3" ).addClass( "future" );
  } else if (hr > time3) {
      $( ".row3" ).addClass( "past" );
  } else if (hr == time3) {
      $( ".row3" ).addClass( "present" );
  } 
};

function updateRow4() {
  var hr = (new Date()).getHours()
  if (hr < time4) {
    $( ".row4" ).addClass( "future" );
  } else if (hr > time4) {
      $( ".row4" ).addClass( "past" );
  } else if (hr == time4) {
      $( ".row4" ).addClass( "present" );
  } 
};

function updateRow5() {
  var hr = (new Date()).getHours()
  if (hr < time5) {
    $( ".row5" ).addClass( "future" );
  } else if (hr > time5) {
      $( ".row5" ).addClass( "past" );
  } else if (hr == time5) {
      $( ".row5" ).addClass( "present" );
  } 
};

function updateRow6() {
  var hr = (new Date()).getHours()
  if (hr < time6) {
    $( ".row6" ).addClass( "future" );
  } else if (hr > time6) {
      $( ".row6" ).addClass( "past" );
  } else if (hr == time6) {
      $( ".row6" ).addClass( "present" );
  } 
};

function updateRow7() {
  var hr = (new Date()).getHours()
  if (hr < time7) {
    $( ".row7" ).addClass( "future" );
  } else if (hr > time7) {
      $( ".row7" ).addClass( "past" );
  } else if (hr == time7) {
      $( ".row7" ).addClass( "present" );
  } 
};

function updateRow8() {
  var hr = (new Date()).getHours()
  if (hr < time8) {
    $( ".row8" ).addClass( "future" );
  } else if (hr > time8) {
      $( ".row8" ).addClass( "past" );
  } else if (hr == time8) {
      $( ".row8" ).addClass( "present" );
  } 
};

function updateRow9() {
  var hr = (new Date()).getHours()
  if (hr < time9) {
    $( ".row9" ).addClass( "future" );
  } else if (hr > time9) {
      $( ".row9" ).addClass( "past" );
  } else if (hr == time9) {
      $( ".row9" ).addClass( "present" );
  } 
};





// EVENT LISTENERS --------------------------------------------------------




// FUNCTION CALLS ---------------------------------------------------------

setInterval(updateRow1, 1000 * 60);
updateRow1();

setInterval(updateRow2, 1000 * 60);
updateRow2();

setInterval(updateRow3, 1000 * 60);
updateRow3();

setInterval(updateRow4, 1000 * 60);
updateRow4();

setInterval(updateRow5, 1000 * 60);
updateRow5();

setInterval(updateRow6, 1000 * 60);
updateRow6();

setInterval(updateRow7, 1000 * 60);
updateRow7();

setInterval(updateRow8, 1000 * 60);
updateRow8();

setInterval(updateRow9, 1000 * 60);
updateRow9();