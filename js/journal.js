var entries = [];

function Entry(title, entryBody) {
  this.id = "";
  this.title = title;
  this.entryBody = entryBody;
}

Entry.prototype.journal = function() {
  entries.push(Entry);
  Entry.id = entries.length;
  return entries;
}


// Entry.prototype.getResult = function(number, operation) {
//   var thisEntry = entries[number];
//   if (operation == 1) {
//
//
//   } else if (operation == 2) {
//
//   } else if (operation == 3) {
//
//   } else {
//
//   }
// }
//
// function getSentence() {
//
// }

exports.journalModule = Entry;
