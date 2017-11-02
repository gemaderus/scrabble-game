function Word () {
  this.element = document.querySelector('#js-word');
  this.completeWord = [];
  this.lettersJoin = [];
}

Word.prototype.draw = function(letters) {
  var fragment = document.createDocumentFragment();

  letters.forEach(function(letter) {
    var letra = letter.letter;
    var index = letter.index;

    var li = document.createElement('li');
    li.classList.add('letter');

    var button = document.createElement('button');
    button.classList.add('btn', 'btn-letters');
    button.setAttribute('data-index', index);
    button.setAttribute('data-letter', letra);
    button.innerHTML = letra;

    li.appendChild(button);
    fragment.appendChild(li);
  });

  // Borro el contenido y después inserto el nuevo a partir de las letras que me llegan
  this.element.innerHTML = '';
  this.element.appendChild(fragment);
};

Word.prototype.getWord = function(letters) {
 this.lettersJoin = letters.join('');
  return this.lettersJoin;
};
