$(document).ready(function() {
  $("form#input").submit(function(event) {
    const highestNumber = parseInt($("#limit").val());
    const countBy = parseInt($("#count").val());

    for (let index = countBy; index <= highestNumber; index += countBy) {
      $("#output").append("<li>" + index + "</li>");
    }
    event.preventDefault();
  });
});