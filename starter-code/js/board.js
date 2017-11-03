var Board = function() {
  this.consonants = ["B","C","D","F","G","H","J","K","L","M","N","Ñ","P","Q","R","S","V","W","X","Y","Z"];
  this.vowels = ["A", "E", "I", "O", "U"];
  this.randomLetters = [];
  this.length = 32;
  this.level = 0;
  this.wordsList = ["CASA", "CARA", "CANA", "PERRO", "LETRAS", "DODA", "PERA", "LECHE", "ZUMO", "COLA", "MANO", "MESA", "COCHE", "MOTO", "NIÑO", "PLATANO", "PINO", "CALLE", "MANO", "PIE", "DEDO", "OJO", "CIELO", "LUNA", "SOL", "ROCA", "LIMON", "SANDIA", "NUBE", "PERO", "POMO", "LAPIZ", "PAPEL", "PALO", "PELO", "PILA", "POLO", "NUEZ", "NANA", "NENE", "NUEVO", "PICO", "HUEVO", "MIEL"];
  this.wordsSelected = [];
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
  this.randomLetters = [];

  for(var i = 0; i < this.length; i++) {
    this.randomLetters.push(this.randomConsonants(), this.randomVowels());
  }
  return this.randomLetters;
};

Board.prototype.drawBoard = function (element) {
  //Para no generar otro board nuevo.

  element.innerHTML = '';

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

Board.prototype.unselect = function(index) {
  $('#js-board .btn[data-index=' + index + ']').removeClass('is-clicked');
};

//To enter the word.
Board.prototype.lengthWord = function(word) {
  return word.length;
};

//To check if the word existe in words.
Board.prototype.existWord = function(word, array) {
  return array.indexOf(word) !== -1;
};

//To push the word if it is correct
Board.prototype.verifyWord = function(word, array, array2) {
  if (this.existWord(word, array) && !this.isDuplicated(word, array2)) {
    this.wordsSelected.push(word);
    return true;
  }

  return false;
};

// Reset all clicked letters
Board.prototype.reset = function () {
  $('.board-cell .btn').removeClass('is-clicked');
};

//To check if the word was selected before

Board.prototype.isDuplicated = function(word, array) {
  return array.indexOf(word) !== -1;
};
