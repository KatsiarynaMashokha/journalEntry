var Entry = require('./../js/journal.js').journalModule;

$(function(){
  $("#newEntry").submit(function(event){
    event.preventDefault();
    var title = $("#journalTitle").val();
    var entryBody = $("#journalEntry").val();
    var newEntry = new Entry(title, entryBody);
    // newEntry.id = entries.length;
    var output = newEntry.journal();
    output.forEach(function(element){
      console.log(element.id);
      $('#allEntries').append("<li> Title: " + title + "<br> Entry: " + entryBody + "</li>");
    });

  });
});
