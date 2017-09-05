var Entry = require('./../js/entry.js').entryModule;
var Journal = require('./../js/journal.js').journalModule;

$(function(){
  var journal = new Journal();

  $("#newEntry").submit(function(event){
    event.preventDefault();
    var title = $("#journalTitle").val();
    var entryBody = $("#journalEntry").val();

    var newEntry = new Entry(title, entryBody);
    console.log(journal);
    var output = journal.addEntry(newEntry);
    $('#allEntries').empty();
    output.forEach(function(element) {
      $('#allEntries').append("<li> Title: " + element.title + "<br> Entry: " +   element.entryBody + "</li>");
    });
  });
  $("#currentEntry").submit(function(event){
    event.preventDefault();
    var entryNumber = $("#entryNumber").val();
    var operationId = $('#dropdownList').val();

    $('#result').text(journal.getResult(entryNumber, operationId));

  });
});
