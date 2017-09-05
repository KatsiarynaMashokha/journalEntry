function Journal() {
  this.entries = [];
}

Journal.prototype.addEntry = function(newEntry) {
  console.log(this.entries);
  this.entries.push(newEntry);
  console.log("entr: " + this.entries);
    newEntry.id = this.entries.length;
  console.log("id " + newEntry.id);
  return this.entries;
};
exports.journalModule = Journal;
// function getResult(number, operation) {
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
//   var sentence = thisEntry.split(/^(.*?)[.?!]\s/);
//
// }
//
// function countConsonants() {
//
// }
//
// function countVowels() {
//
// }
