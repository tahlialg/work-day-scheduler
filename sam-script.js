const timer = $("#currentDay");
const timeblockContainer = $(".container");

//When the pages loads

//Show the timer
setInterval(function () {
  timer.text(moment().format("DD-MM-YYYY HH:mm:ss"));
}, 1000);

//Create the row

// <!-- row -->
// <div class="row">
//   <articles class="col-2">
//     <!-- time -->
//     <span></span>
//   </articles>
//   <articles class="col-8">
//     <!-- textarea -->
//     <textarea></textarea>
//   </articles>
//   <articles class="col-2">
//     <!-- button -->
//     <button class="btn btn-primary"></button>
//   </articles>
// </div>

function createRow(time) {
  const row = $("<div>").attr("class", "row");

  const timeCol = $("<article>").attr("class", "col-2");
  const timeSpan = $("<span>").text(time + ":00");
  timeCol.append(timeSpan);

  row.append(timeCol);

  const timeNow = moment();

  const isPast = time < Number(timeNow.format("H"));

  const isPresent =
    time >= Number(timeNow.format("H")) &&
    time <= Number(timeNow.format("H") + 1);

  const isFuture = time > Number(timeNow.format("H"));

  let colourClass;

  if (isPast) {
    colourClass = "past";
  }
  if (isPresent) {
    colourClass = "present";
  }
  if (isFuture) {
    colourClass = "future";
  }

  const textareaCol = $("<article>").attr("class", "col-8" + colourClass);
  const textarea = $("<textarea>");

  //Attempt to find existing value on localstorage
  const existingNote = localStorage.getItem(time + ":00");

  //If exists, then load content into textarea
  if (existingNote) {
    textarea.val(existingNote);
  }

  textareaCol.append(textarea);

  row.append(textareaCol);

  const buttonCol = $("<article>").attr("class", "col-2");

  const button = $("<button>").attr("class", "btn btn-primary save-btn");
  button.text("save");
  buttonCol.append(button);
  row.append(buttonCol);

  return row;
}

const times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

//Generate all the timeblock rows

//For each row
for (let index = 0; index < times.length; index++) {
  const time = times[index];
  const row = createRow(time);
  timeblockContainer.append(row);
}

//User clicks on the save button for a row
$(document).on("click", ".save-btn", function (event) {
  //Save the content in the current row textarea to LS
  //Grab the content of the textarea
  const jButton = $(event.target);
  const jButtonCol = jButton.parent();
  const textarea = jButton.prev().children();
  const userInput = textarea.val();

  //Use time as the localstorage key
  const timeSpan = jButton.prev().prev().children();
  const timeOfRow = timeSpan.text();

  //Save to localstorage
  localStorage.setItem(timeOfRow, userInput);
});
