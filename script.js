//Display current date and time
const timeElement = $("#currentDay");
timeElement.text(moment().format("DD-MM-YYYY HH:mm:ss"));

setInterval(function () {
  timeElement.text(moment().format("DD-MM-YYYY HH:mm:ss"));
}, 1000);

//Set colour of timeblocks
const timeNow = moment();
const currentHour = $("#current-hour");
const textarea = $("<textarea>");
const times = [];

for (let index = 0; index < currentHour.length; index++) {
  times.push(currentHour[index].dataset.hour);
}

function backgroundColour() {
  for (let index = 0; index < currentHour.length; index++) {
    if (times < Number(timeNow.format("H"))) {
      textarea.addClass("past");
    }
    if (
      times >= Number(timeNow.format("H")) &&
      times <= Number(timeNow.format("H") + 1)
    ) {
      textarea.addClass("present");
    }
    if (times > Number(timeNow.format("H"))) {
      textarea.addClass("future");
    }
  }
}

backgroundColour();
