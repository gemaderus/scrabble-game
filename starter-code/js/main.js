function onClickButton (e) {
  var button = $(e.target);
  var index = button.attr('data-index');
  var letter = button.attr('data-letter');

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

  // Le paso a word un array de letras del state
  word.draw(state.jugadas.map(function (jugada) {
    return jugada.letter;
  }));
}

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

var board = new Board();
var player = new Player();
var game = new Game();
var word = new Word();

var state = {
  turno: 0,
  jugadas: []
};

window.onload = function() {
  board.randomBoard();

  // var btnLetter = document.getElementsByClassName("btn-letters");

  document.getElementById("js-start").onclick = function() {
    var element  = document.getElementById('js-board');
    board.drawBoard(element);
    game.startGame(board, player);
  };

  $('#js-board').on('click', 'button', onClickButton);
};
