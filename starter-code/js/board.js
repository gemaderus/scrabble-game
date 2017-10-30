var Board = function() {
  this.consonants = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","V","W","X","Y","Z"];
  this.vowels = ["A", "E", "I", "O", "U"];
  this.randomLetters = [];
  this.chooseLetter = [];
  this.length = 64;
  this.level = 0;
  this.wordsList = ["casa", "cara", "cana", "perro", "letras"];
  this.wordsSelected = ["casa", "cara"];
  this.choosedWord = '';
};

Board.prototype.randomConsonants = function() {
  var randomConsonantsNumber = Math.floor(Math.random()* 21);
  return this.consonants[randomConsonantsNumber];
};

Board.prototype.randomVowels = function() {
  var randomVowelsNumber = Math.floor(Math.random()* 5);
  return this.vowels[randomVowelsNumber];
};

Board.prototype.randomBoard = function() {
  for(var i = 0; i < this.length/8; i++) {
    this.randomLetters.push(this.randomConsonants(), this.randomVowels());
  }
  return this.randomLetters;
};

//To enter the word.

Board.prototype.lengthWord = function(word) {
  return word.length;
};

//To check if the word existe in words.

Board.prototype.existWord = function(value, array) {
  return this.array.indexOf(value) > -1;
};

//To push the word if it is correct
Board.prototype.pushWord = function(word, array) {
  if(this.existWord() && !isDuplicated()) {
    this.wordSelected.push(word);
    return this.wordSelected;
  }
};

//To check if the word was selected before

Board.prototype.isDuplicated = function(array, word) {
  return this.array.indexOf(word) > -1;
};
