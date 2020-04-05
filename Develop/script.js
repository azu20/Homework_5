$(document).ready(function() {
    let currentTime = moment();
    let momentForLabels = moment();

    console.log(moment().set('hour', 17).format("LT"));

    $("#currentDay").text(currentTime.format("LL"));
    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.

    //[2020, 03, 03, 7, 0] // is this how you carete a MOMENT that has the hour calling moment(ARRAY)???

    let times = [
        moment().set('hour', 8).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 9).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 10).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 11).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 12).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 13).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 14).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 15).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 16).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 17).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 18).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 19).set('minute', 0).set('second', 0).set('millisecond', 0), 
        moment().set('hour', 20).set('minute', 0).set('second', 0).set('millisecond', 0), 
        moment().set('hour', 21).set('minute', 0).set('second', 0).set('millisecond', 0),
        moment().set('hour', 22).set('minute', 0).set('second', 0).set('millisecond', 0)
    ];

  // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
    // =================================================================================

    console.log(currentTime.format());
    // 1. Create a for-loop to iterate through the letters array.
    for (let i = 0; i < times.length; i++) {

        // Inside the loop...

        // 2. Create a variable named "letterBtn" equal to $("<button>");
        let row = $("<tr>");
        let rowLabel = $("<td>");
        let rowTimeSlot = $("<td>");
        let rowTextInput = $("<textarea>");
        let rowButton = $("<td>");

        rowLabel.text(times[i].format("LT"));
        rowButton.text("Save");

        row.addClass("row");
        rowLabel.addClass("hour");

        if (currentTime.set('minute', 0).set('second', 0).set('millisecond', 0).diff(times[i], 'hours') < 0 ) {
            rowTimeSlot.addClass("future");
        } else if (currentTime.set('minute', 0).set('second', 0).set('millisecond', 0).diff(times[i], 'hours') === 0) {
            rowTimeSlot.addClass("present");
        } else {
            rowTimeSlot.addClass("past");
        }

        rowButton.addClass("saveBtn");
        rowTextInput.addClass("textarea");

        rowTextInput.attr("slot", times[i].format("LT"));
        rowTextInput.attr("id", times[i].format("LT"));
        rowButton.attr("slot", times[i].format("LT"));
        
        rowTextInput.text(localStorage.getItem(times[i].format("LT")));
        
        rowTimeSlot.append(rowTextInput);
        row.append(rowLabel);
        row.append(rowTimeSlot);
        row.append(rowButton);

        $("#schedule").append(row);

    }

       // Be sure to test that your code works for this major task, before proceeding to the next one!

    // MAJOR TASK #2: ATTACH ON-CLICK EVENTS TO "LETTER" BUTTONS
    // =================================================================================

    // 7. Create an "on-click" event attached to the ".letter-button" class.
    $(".saveBtn").on("click", function() {
        
       let slotId = $(this).attr("slot");

       localStorage.setItem(slotId, document.getElementById(slotId).value);
    

    });

    // // Be sure to test that your code works for this major task, before proceeding to the next one!

    // // MAJOR TASK #3: ATTACH ON-CLICK EVENTS TO "CLEAR" BUTTON
    // // =================================================================================

    // // 12. Create an "on-click" event attached to the "#clear" button id.
    // $("#clear").on("click", function() {

    //     // Inside the on-click event...

    //     // 13. Use the jQuery "empty()" method to clear the contents of the "#display" div.
    //     // We use find here and once its found it will empty the element
    //     $("#display").empty();

    // });

});

// function a
// var time = ["8:00 am","9:00 am","10:00 am","11:00 am","12:00 pm","01:00 pm","02:00 pm","03:00 pm","04:00 pm", "05:00 pm"] 

// let timeBlock = $("<tr>");
// timeBlock.attr("style", "border: solid black;")
// let timeLabel = $("<td>"); 
// timeLabel.textContent = time; 
// timeLabel.attr("style", "font-weight-bold")
// timeBlock.append(timeLabel); 
// $("#container").append(timeBlock);