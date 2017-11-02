var Board = function() {
  this.consonants = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","V","W","X","Y","Z"];
  this.vowels = ["A", "E", "I", "O", "U"];
  this.randomLetters = [];
  //this.chooseLetter = [];
  this.length = 32;
  this.level = 0;
  this.wordsList = ["CASA", "CARA", "CANA", "PERRO", "LETRAS", "DODA"];
  this.wordsSelected = ["CASA"];
  //this.choosedWord = [];
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
  for(var i = 0; i < this.length; i++) {
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
    button.classList.add('btn', 'btn-letters');
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
  console.log(word.length);
  return word.length;
};

//To check if the word existe in words.

Board.prototype.existWord = function(word, array) {
  return array.indexOf(word) !== -1;
};

//To push the word if it is correct

Board.prototype.verifyWord = function(word, array, array2) {
  if(this.existWord(word, array) && !this.isDuplicated(word, array2)) {
    this.lengthWord(word);
    this.wordsSelected.push(word);
    return this.wordsSelected;
  }
};

//To check if the word was selected before

Board.prototype.isDuplicated = function(word, array) {
  alert("The word is repeat. You lose a live");
  return array.indexOf(word) !== -1;
};
