var intervalID;

var timerBox = $("#timer");

var timer = {
    seconds: 10,

    start: function () {
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

timer.start();