window.onload = function() {

  var board = new Board();
  var player = new Player();
  var game = new Game();

  var state = {
    turno: 0, // 0 o 1 para el turno de cada jugador
    jugadas: [] // cada una de las letras pulsadas es una jugada
  };

  //Necesito generar el board antes para meter la letra en el data-letter del botón.
  board.randomBoard();

  var btnLetter = document.getElementsByClassName("btn-letters");

  document.getElementById("js-start").onclick = function() {
    var element  = document.getElementById('js-board');
    var fragment = document.createDocumentFragment();

    board.randomLetters.forEach(function(randomLetter, index) {
        var li = document.createElement('li');
        $(li).addClass('board-cell');
        var button = document.createElement('button');
        $(button).addClass('btn btn-full btn-letters');
        li.appendChild(button);
        button.setAttribute('data-index', index);
        button.setAttribute('data-letter', randomLetter);
        button.innerHTML = randomLetter;
        fragment.appendChild(li);
    });

    //Añadimos los li al ul
    element.appendChild(fragment);

    game.startGame(board, player);
  };

  $('#js-board').on('click', 'button', onClickButton);





    function onClickButton (e) {
      // board.choosedWord.push(letter);
      // $("js-word").innerHTML = .join('');

      var button = $(e.target);
      var index = button.attr('data-index'); // cada elemento button en el dom tiene un índice asignado (0...63)
      var letter = button.attr('data-letter'); // de igual forma la letra la metemos en un attributo, además del label

      if (isClicked(index)) {
        button.removeClass('is-clicked');
        removeIndex(index);
      } else {
        button.addClass('is-clicked');
        state.jugadas.push({
          index: index,
          letter: letter
        });
      }
    };

    function isClicked(index) {
      return state.jugadas.some(function (jugada) {
        return jugada.index === index;
      });
    }

    function removeIndex(index) {

      state.jugadas = state.jugadas.filter(function (jugada) {
        return jugada.index !== index;
      });
    }
};
