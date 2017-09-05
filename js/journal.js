function Journal() {
  this.entries = [];
}

Journal.prototype.addEntry = function(newEntry) {
  this.entries.push(newEntry);
  newEntry.id = this.entries.length;
  return this.entries;
};

Journal.prototype.getResult = function(number, operation) {
  var thisEntry = this.entries[number - 1].entryBody;
  if (operation == 1) {
    return getSentence(thisEntry);
  } else if (operation == 2) {
    return countConsonants(thisEntry);
  } else if (operation == 3) {
    return countVowels(thisEntry);
  } else {
    return -1;
  }
};

function getSentence(currentEntry) {
  var sentence = currentEntry.match(/[^\.!\?]+[\.!\?]+/g)[0];
  var splitSentence = sentence.split(' ');
  if (splitSentence.length > 8) {
    var eightSentence = splitSentence.slice(0, 8).toString();
    return eightSentence.replace(/[ ,]+/g, " ");
  } else {
    return sentence;
  }
}

function countConsonants(currentEntry) {
  var result = 0;
  var newArray = currentEntry.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  if (newArray != null){
    result = newArray.length;
  }
  return result;
}

function countVowels(currentEntry) {
  var result = 0;
  var newArray = currentEntry.match(/[aeiou]/gi);
  if (newArray != null) {
    result = newArray.length;
  }
  return result;
}

exports.journalModule = Journal;
