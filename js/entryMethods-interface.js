$(function(){
  $("#currentEntry").submit(function(event){
    event.preventDefault();
    var entryNumber = $("#entryNumber").val();
    var dropDown = $("#dropdownList").val();
    var resultValue = getResult(entryNumber, dropDown);

    $("#result").prepend("<p>" + resultValue + "</p>");
  });
});
