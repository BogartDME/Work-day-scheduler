
$(document).ready(function () {
  
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
    //created variables to store user input into local storage
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var userInput = $(this).siblings(".user-input").val();
    localStorage.setItem(time, userInput);
    console.log(time, userInput);
  });
  
  //here is the method to call back what was stored in the local storage
  $("#9 .user-input").val(localStorage.getItem("9"));
  $("#10 .user-input").val(localStorage.getItem("10"));
  $("#11 .user-input").val(localStorage.getItem("11"));
  $("#12 .user-input").val(localStorage.getItem("12"));
  $("#13 .user-input").val(localStorage.getItem("13"));
  $("#14 .user-input").val(localStorage.getItem("14"));
  $("#15 .user-input").val(localStorage.getItem("15"));
  $("#16 .user-input").val(localStorage.getItem("16"));
  $("#17 .user-input").val(localStorage.getItem("17"));
  

  
});
  
  
