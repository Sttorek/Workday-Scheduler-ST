// DOM VARIABLES ---------------------------------------------------------
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));
var currentHour = moment();	
$("#currentHour").text(today.format("LT"));
	

var saveBtn1 = document.getElementById("saveBtn1");
var saveBtn2 = document.getElementById("saveBtn2");
var saveBtn3 = document.getElementById("saveBtn3");
var saveBtn4 = document.getElementById("saveBtn4");
var saveBtn5 = document.getElementById("saveBtn5");
var saveBtn6 = document.getElementById("saveBtn6");
var saveBtn7 = document.getElementById("saveBtn7");
var saveBtn8 = document.getElementById("saveBtn8");
var saveBtn9 = document.getElementById("saveBtn9");

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


function init() {
  
  $('#input1').val(localStorage.getItem("item1"));
  $('#input2').val(localStorage.getItem("item2"));
  $('#input3').val(localStorage.getItem("item3"));
  $('#input4').val(localStorage.getItem("item4"));
  $('#input5').val(localStorage.getItem("item5"));
  $('#input6').val(localStorage.getItem("item6"));
  $('#input7').val(localStorage.getItem("item7"));
  $('#input8').val(localStorage.getItem("item8"));
  $('#input9').val(localStorage.getItem("item9"));
  
};





// EVENT LISTENERS --------------------------------------------------------
saveBtn1.addEventListener("click", function() {
  
  localStorage.setItem("item1", $("#input1").val());

});

saveBtn2.addEventListener("click", function() {
  
  localStorage.setItem("item2", $("#input2").val());

});

saveBtn3.addEventListener("click", function() {
  
  localStorage.setItem("item3", $("#input3").val());

});

saveBtn4.addEventListener("click", function() {
  
  localStorage.setItem("item4", $("#input4").val());

});

saveBtn5.addEventListener("click", function() {
  
  localStorage.setItem("item5", $("#input5").val());

});

saveBtn6.addEventListener("click", function() {
  
  localStorage.setItem("item6", $("#input6").val());

});

saveBtn7.addEventListener("click", function() {
  
  localStorage.setItem("item7", $("#input7").val());

});

saveBtn8.addEventListener("click", function() {
  
  localStorage.setItem("item8", $("#input8").val());

});

saveBtn9.addEventListener("click", function() {
  
  localStorage.setItem("item9", $("#input9").val());

});

// FUNCTION CALLS ---------------------------------------------------------

init();

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