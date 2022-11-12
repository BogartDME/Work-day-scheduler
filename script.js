// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var today = dayjs();
  var hr = dayjs().hour();
    console.log("currently the hour is " + hr);
    
    $("#currentDay").text(today.format("MMMM DD, dddd"));
    
    $(".time-block").each(function(){
    var apptBlock= $(this).attr("id");
      if (apptBlock<hr) $(this).addClass("past").removeClass("present").removeClass("future")
        else if (apptBlock==hr) $(this).addClass("present").removeClass("past").removeClass("future")
        else $(this).addClass("future").removeClass("past").removeClass("present")
});



    // Listener for click event on the save buttons
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var userInput = $(this).siblings(".user-input").val();
    localStorage.setItem(time, userInput);
    console.log(time, userInput);
  });
  
  

  
});
  
  
