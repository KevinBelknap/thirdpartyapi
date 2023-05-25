//Wrapping all code with this function 
$(document).ready(function () {

// save button on click for local storage
  $(".saveBtn").on("click", function () {

    // Grab user input description from the textarea in HTML
    var description = $(this).siblings(".description").val().trim();

    // Get the hour-x id of the time-block containing the button that was clicked
    var timeBlockId = $(this).parent().attr("id");

    // Save the user input in local storage with the id as the key
    localStorage.setItem(timeBlockId, description);
  });
});

// Color cordinating if else logic 
function hourupdater() {

  // Display the current date at the top of the page
  var now = dayjs();
  //displaying current time 
  $("#currentDay").text(now.format("dddd, MMMM D"));

  // Load any saved descriptions from local storage 
  $(".description").each(function () {
    var id = $(this).parent().attr("id");
    var savedDescription = localStorage.getItem(id);
    if (savedDescription !== null) {
      $(this).val(savedDescription);
    }
  });

  // Get currenhour 
  var currentHour = now.hour();
  // time-block color cordinating logic 
  // getting blockhour from the id and the currenthour from our API
  $('.time-block').each(function () {
    var blockhour = parseInt($(this).attr('id').split('-')[1])
    console.log(currentHour, blockhour)
    if (blockhour < currentHour) {
      $(this).addClass('past')
    } else if (blockhour === currentHour) {
      $(this).removeClass('past')
      $(this).addClass('present')

    } else {
      $(this).removeClass('past')
      $(this).removeClass('present')
      $(this).addClass('future')

    }
  })
}
hourupdater()
// creating a varible that will pull that description and locally storing that information becuase it is getting that item by getitem
$(".saveBtn").on("click", function () {
  var id = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(id, description);
});


