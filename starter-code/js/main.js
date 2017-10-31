window.onload = function() {

  var state = {
    turno: 0, // 0 o 1 para el turno de cada jugador
    jugadas: [] // cada una de las letras pulsadas es una jugada
  };

  var btnLetter = document.getElementsByClassName("btn-letters");

  document.getElementById("js-start").onclick = function() {
    console.log("hola");
    // var value;
    var word = document.getElementById("js-word");

    var board = new Board();

    // console.log(board);

    var player = new Player();
    var game = new Game();

    game.startGame(board, player);

    for(var i = 0; i < btnLetter.length; i++) {
      btnLetter[i].innerHTML = board.randomLetters[i];
    }
  };

  $('#js-board').on('click', 'button', onClickButton);

    function onClickButton (e) {
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
    }

    function isClicked(index) {
      return state.jugadas.some(function (jugada) {
        return jugada.index === index;
      });
    }

    function removeIndex(index) {
      return state.jugadas.filter(function (jugada) {
        return jugada.index !== index;
      });
    }
};
