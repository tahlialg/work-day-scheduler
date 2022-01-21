const timer =$("#currentDay");

//when the pages loads

//show the timer
setInterval(function(){
    timer.text(moment().format("DD-MM-YYYY HH:mm:ss"));
}, 1000);

function createRow(time) {
    const row = $("<div>").attr("class", "row");

    const timeCol = $("<article>").attr("class", "col-2");
    const timeSpan = $("<span>").text(time + ":00");
    timeCol.append(timeSpan);

    row.append(timeCol);

    const textareaCol = $("<article>").attr("class", "col-8");
}