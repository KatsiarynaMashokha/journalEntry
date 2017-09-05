(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/journal.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
