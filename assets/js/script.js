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
  var hour = event.target.getAttribute("data-hour");
  var data = $(`#${hour}-text`).val();
  localStorage.setItem(hour, data);
});

for (let index = 9; index < 18; index++) {
  const data = localStorage.getItem(index);
  $(`#${index}-text`).val(data);
}

$(".btn-danger").on("click", function () {
  localStorage.clear();
  location.reload();
});
