var fs = require('fs');
var number = 122;

function readWordList(file) {
  var list = fs.readFileSync(file);
  return JSON.parse(list);
}

function countAllWords(list) {
  var totalOcc = 0;
  var count = list.length;
  for (var x=0; x<count; x++) {
    totalOcc += list[x].occurrences;
  }
  console.log("Total Occ of All Words in File: " + totalOcc);
  return totalOcc;
}

function countTopWords(number, list) {
  var totalOcc = 0;
  for (var i=0; i<number; i++) {
    totalOcc += list[i].occurrences;
  }
  console.log("Total Occ of Top " + number + " words: " + totalOcc);
  return totalOcc;
}

var wordList = readWordList('spanishWords.json');
var topWords = countTopWords(number, wordList);
var allWords = countAllWords(wordList);
var percent = topWords/allWords;

console.log("The top " + number + " words make up " + percent + " of all word occurrences");