(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, entryBody) {
    this.id = "";
    this.title = title;
    this.entryBody = entryBody;
  }

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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
});

},{"./../js/entry.js":1,"./../js/journal.js":3}],3:[function(require,module,exports){
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

},{}]},{},[2]);
