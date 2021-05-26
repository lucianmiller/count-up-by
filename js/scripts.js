$(document).ready(function() {
  $("form#input").submit(function(event) {
    const highestNumber = parseInt($("#limit").val());
    console.log(highestNumber);
    const countBy = parseInt($("#count").val());
    console.log(countBy);

    for (let index = countBy; index <= highestNumber; index += countBy) {
      console.log(index);
    }
    event.preventDefault();
  });
});