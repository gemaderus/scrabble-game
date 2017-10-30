var Board = function() {
  this.consonants = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","V","W","X","Y","Z"];
  this.vowels = ["A", "E", "I", "O", "U"];
  this.
  this.randomLetters = [];
  // this.chooseLetter = [];
  this.length = 64;
  this.level = 0;
  this.words = ["casa", "cara", "cana", "perro", "letras"];
  this.wordSelected = [];
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
  for(var i = 0; i < this.length/2; i++) {
    this.randomLetters.push(this.randomConsonants(), this.randomVowels());
  }
  return this.randomLetters;
};


Board.prototype.checkWord = function(value, array) {
  return this.array.indexOf(value) > -1;
};

Board.prototype.selectedWord = function(word) {
  this.wordSelected.push(word);
};

checkWord("casa");



var board = new Board();

board.randomBoard();
