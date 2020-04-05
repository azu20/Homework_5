$(document).ready(function() {
    let currentTime = moment();
    let momentForLabels = moment();

    console.log(moment().set('hour', 17).format("LT"));

    $("#currentDay").text(currentTime.format("LL"));
    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.

    //[2020, 03, 03, 7, 0] // is this how you carete a MOMENT that has the hour calling moment(ARRAY)???

    let times = [
        moment().set('hour', 8).set('minute', 0),
        moment().set('hour', 9).set('minute', 0),
        moment().set('hour', 10).set('minute', 0),
        moment().set('hour', 11).set('minute', 0),
        moment().set('hour', 12).set('minute', 0),
        moment().set('hour', 13).set('minute', 0),
        moment().set('hour', 14).set('minute', 0),
        moment().set('hour', 15).set('minute', 0),
        moment().set('hour', 16).set('minute', 0),
        moment().set('hour', 17).set('minute', 0), 
        moment().set('hour', 18).set('minute', 0), 
        moment().set('hour', 19).set('minute', 0), 
        moment().set('hour', 20).set('minute', 0), 
    ];


        moment().set('hour', 20).set('minute', 0)    // MAJOR TASK #1: DYNAMICALLY CREATE BUTTONS
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

        if (currentTime.diff(times[i], 'hours') < 0) {
            rowTimeSlot.addClass("past");
        } else if (currentTime.diff(times[i], 'hours') === 0) {
            rowTimeSlot.addClass("present");
        } else {
            rowTimeSlot.addClass("future");
        }

        let timeForThisI = moment(times[i]);

        console.log(timeForThisI.format());

        rowButton.addClass("saveBtn");
        rowTextInput.addClass("textarea");

        rowTimeSlot.attr("slot", times[i]);
        rowButton.attr("slot", times[i]);

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
    // $(".letter-button").on("click", function() {

    //     // Inside the on-click event...

    //     // 8. Create a variable called "fridgeMagnet" and set the variable equal to a new div.
    //     var fridgeMagnet = $("<div>");

    //     // 9. Give each "fridgeMagnet" the following classes: "letter fridge-color".
    //     fridgeMagnet.addClass("letter fridge-color");

    //     // 10. Then chain the following code onto the "fridgeMagnet" variable: .text($(this).attr("data-letter"))
    //     // attr acts as both a setter and a getter for attributes depending on whether we supply one argument or two
    //     // NOTE: There IS a $(data) jQuery method, but it doesn't do what you'd expect. So just use attr.
    //     fridgeMagnet.text($(this).attr("data-letter"));
    //     console.log($(this).attr("data-letter"));
    //     // 11. Lastly append the fridgeMagnet variable to the "#display" div (provided);
    //     // Again you can see we use that find, and once its found we append the item
    //     $("#display").append(fridgeMagnet);

    // });

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