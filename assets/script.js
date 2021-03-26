// DOM VARIABLES ---------------------------------------------------------
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY"));
var currentHour = moment();	
$("#currentHour").text(today.format("LT"));
	




// JAVASCRIPT VARIABLES --------------------------------------------------
var rows = {
  row1: 23,
  row2: 10,
  row3: 11,
  row4: 12,
  row5: 13,
  row6: 14,
  row7: 15,
  row8: 16,
  row9: 17,
}

// var i = [9,10,11,12,13,14,15,16,17,]

// how to assign i to  rows object key value???????????????


for(i = 0; i < rows.value; i++) {
  var rows = i
}
// ASSIGN the for loop to a variable then insert that variable into the function
// need to loop through rows object key value??

// FUNCTION DEFINITIONS --------------------------------------------------



function updateRowColor() {
    var hr = (new Date()).getHours()
    if (hr < i) {
      $( "textarea" ).addClass( "future" );
    } else if (hr > i) {
        $( "textarea" ).addClass( "past" );
    } else if (hr == i) {
        $( "textarea" ).addClass( "present" );
    } 
  }
  
  setInterval(updateRowColor, 1000 * 60);
  updateRowColor();


// EVENT LISTENERS --------------------------------------------------------




// FUNCTION CALLS ---------------------------------------------------------
updateRowColor();
