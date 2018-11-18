var intervalID;
var queryURL = "https://opentdb.com/api.php?amount=8&category=9&difficulty=easy&type=multiple";

// var timerBox = $("#timer");

var timer = {
    seconds: 10,

    start: function () {
        clearInterval(intervalID); //prevent stacking
        intervalID = setInterval(timer.count, 1000);
    },

    count: function () {
        timer.seconds--;
        $("#timer").text("Time Remaining: " + timer.seconds + " Seconds");

        if (timer.seconds === 0) {
            timer.end();
        }
    },

    end: function () {
        clearInterval(intervalID);
        alert("Game Over!");
    }

}

$("#start-button").on("click", function () {
    $("#start-button-row").remove();

    var timerDiv = $("<div>");
    timerDiv.attr("class", "row");
    timerDiv.html(`<div class="col">
                        <h2 id="timer">Time Remaining: 120 Seconds</h2>
                    </div>`);

    $(".container").append(timerDiv);



    $.ajax({
        url: "https://opentdb.com/api.php?amount=8&category=9&difficulty=easy&type=multiple",
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.results.length);

        for (var i = 0; i < response.results.length; i++) {

            var answersArr = response.results[i].incorrect_answers;
            answersArr.push(response.results[i].correct_answer);

            var questionDiv = $("<div>");
            questionDiv.attr("class", "row");
            questionDiv.html(`<div class="col">
            <h2>${response.results[i].question}</h2>
            <div class="form-check-inline">
                <input class="form-check-input" type="radio" name="exampleRadios" id="q1a1" value="option1">
                <label class="form-check-label" for="q1a1">
                    Option 1
                </label>
            </div>
            <div class="form-check-inline">
                <input class="form-check-input" type="radio" name="exampleRadios" id="q1a2" value="option2">
                <label class="form-check-label" for="q1a2">
                    Option 2
                </label>
            </div>
            <div class="form-check-inline">
                <input class="form-check-input" type="radio" name="exampleRadios" id="q1a3" value="option3">
                <label class="form-check-label" for="q1a3">
                    Option 2
                </label>
            </div>
            <div class="form-check-inline">
                <input class="form-check-input" type="radio" name="exampleRadios" id="q1a4" value="option3">
                <label class="form-check-label" for="q1a4">
                    Option 2
                </label>
            </div>
        </div>`)

            $(".container").append(questionDiv);
        }
    })

    // timer.start();
});

