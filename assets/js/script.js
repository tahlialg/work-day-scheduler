//Display current date and time
const timeElement = $("#currentDay");
timeElement.text(moment().format("DD-MM-YYYY HH:mm:ss"));

setInterval(function () {
  timeElement.text(moment().format("DD-MM-YYYY HH:mm:ss"));
}, 1000);

//Set colour of timeblocks
const timeNow = moment();
let currentHour = $("#current-hour");
const textarea = $("<textarea>");
const times = [9, 10, 11, 12, 13, 14, 15, 16, 17];
currentHour = times;

function backgroundColour() {
  for (let index = 0; index < currentHour.length; index++) {
    const hour = Number(times[index]);
    const currentHour = timeNow.format("H");
    if (hour < Number(currentHour)) {
      $(`#${hour}-text`).addClass("past");
  
    }
    if (hour >= Number(currentHour) && hour <= Number(currentHour + 1)) {
      $(`#${hour}-text`).addClass("present");
    }
    if (hour > Number(currentHour)) {
      $(`#${hour}-text`).addClass("future");
    }
  }
}

backgroundColour();

$(document).on("click", ".save-button", function (event) {
  var taskText = $(this).parent().siblings(".col-8").children("textarea").val();
  var taskTime = $(this).parent().siblings(".col-1.5").data("hour");
  localStorage.setItem(taskTime, taskText);
});

$(".row").each(function () {
  var timeBlock = $(this).children(".col-2").data("hour");
  const existingEvent = localStorage.getItem(timeBlock);
  if (existingEvent) {
    $(this).find("textarea").val(existingEvent);
  }
});
