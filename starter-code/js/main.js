//Botones de las letras

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
  word.draw(state.jugadas);
}

// Borrar letra
function onClickWord (e) {
  var button = $(e.target);
  var index = button.attr('data-index');
  removeIndex(index);
  board.unselect(index);
  word.draw(state.jugadas);
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
var player1 = new Player($('#player1'));
var player2 = new Player($('#player2'));
var game = new Game();
var word = new Word();

var state = {
  turno: 0,
  jugadas: []
};


window.onload = function() {
  board.randomBoard();

  document.getElementById("js-btn-cross").onclick = function() {
    $("#js-warning").hide();
  };

  document.getElementById("js-start").onclick = function() {
    var element  = document.getElementById('js-board');
    board.drawBoard(element);
    game.startGame(board, player1, player2);
    game.displayTurn(state.turno);
    $(".container-home").fadeOut();
    $(".container-game").fadeIn();
  };

    $('#js-board').on('click', 'button', onClickButton);
    $('#js-word').on('click', 'button', onClickWord);

    document.getElementById("js-check").onclick = function() {
      var lettersJoin = state.jugadas.map(function(jugada) {
        return jugada.letter;
      }).join('');

      // Tiene que haber al menos una letra
      if (lettersJoin === '') {
        return;
      }

      this.disabled = true;
      var isWordCorrect = board.verifyWord(lettersJoin, board.wordsList, board.wordsSelected);

      // actualizar
      if (!isWordCorrect) {
        game.takeLive(state.turno);

        if(!board.existWord(lettersJoin, board.wordsList)) {
          $("#js-warning").show();
          $("#js-warning-text").text("Ops!! Parece que tu palabra no existe. Pierdes una vida!!");
        };

        if(board.isDuplicated(lettersJoin, board.wordsSelected)) {
          $("#js-warning").show();
          $("#js-warning-text").text("Ops!! Parece que tu palabra está duplicada. Pierdes una vida!!");
        };
      } else {
        game.updateScore(state.turno, lettersJoin.length);
      }

      this.disabled = false;
      state.turno++;

      // reseteamos las letras
      state.jugadas = [];
      // el board lo desmarcamos
      board.reset();
      // borramos la palabra
      word.draw([]);
      // ponemos la bolita del turno
      game.displayTurn(state.turno);

      if(!player1.isAlive() || !player2.isAlive()) {
        game.gameOver();
      }
  };

  document.getElementById("js-new-game").onclick = function() {
    state = {
     jugadas: [],
     turno: 0
    };
    var element  = document.getElementById('js-board');
    $(".container-end-game").fadeOut();
    $(".container-game").fadeIn();
    $("#js-warning").hide();
    board.newGame();
    board.drawBoard(element);
    player1.reset();
    player2.reset();
    game.displayTurn(state.turno);
  };
};
