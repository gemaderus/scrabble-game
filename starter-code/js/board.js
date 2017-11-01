var Board = function() {
  this.consonants = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","V","W","X","Y","Z"];
  this.vowels = ["A", "E", "I", "O", "U"];
  this.randomLetters = [];
  this.chooseLetter = [];
  this.length = 64;
  this.level = 0;
  this.wordsList = ["casa", "cara", "cana", "perro", "letras"];
  this.wordsSelected = ["casa", "cara"];
  this.choosedWord = [];
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

Board.prototype.drawBoard = function (element) {
  var fragment = document.createDocumentFragment();

  this.randomLetters.forEach(function(randomLetter, index) {
    var li = document.createElement('li');
    li.classList.add('board-cell');

    var button = document.createElement('button');
    button.classList.add('btn', 'btn-full', 'btn-letters');
    button.setAttribute('data-index', index);
    button.setAttribute('data-letter', randomLetter);
    button.innerHTML = randomLetter;

    li.appendChild(button);
    fragment.appendChild(li);
  });

  element.appendChild(fragment);
};

//To enter the word.

Board.prototype.lengthWord = function(word) {
  return word.length;
};

//To check if the word existe in words.

Board.prototype.existWord = function(value, array) {
  return array.indexOf(value) > -1;
};

//To push the word if it is correct

Board.prototype.pushWord = function(word, array) {
  if(this.existWord() && !isDuplicated()) {
    this.wordSelected.push(word);
    this.wordSelected.join('');
    return this.wordSelected;
  }
};

//To check if the word was selected before

Board.prototype.isDuplicated = function(array, word) {
  return this.array.indexOf(word) > -1;
};

// Board.prototype.deleteLastCharacter = function() {
//   if(this.choosedWord.length > 0) {
//     console.log("hola" +this.chooseWord);
//     this.choosedWord.pop();
//     return this.choosedWord;
//   }
// };
