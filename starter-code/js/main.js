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

  document.getElementById("js-start").onclick = function() {
    var element  = document.getElementById('js-board');
    board.drawBoard(element);
    game.startGame(board, player1, player2);
    game.displayTurn(state.turno);
  };

    $('#js-board').on('click', 'button', onClickButton);

    document.getElementById("js-check").onclick = function() {
      this.disabled = true;

      var lettersJoin = state.jugadas.map(function(jugada) {
        return jugada.letter;
      }).join('');

      board.verifyWord(lettersJoin, board.wordsList, board.wordsSelected);
      //state.turno++;
      // player.updateLives();


      if(game.displayTurn(state.turno) % 2 === 0) {
        this.disabled = false;
        $("#js-live1").html(player1.live);
        player1.updateScore(board.lengthWord(lettersJoin));
        $("#js-points1").html(player1.score);
        lettersJoin = [];
        state.turno++;
      } else {
        this.disabled = false;
        $("#js-live2").html(player2.live);
        player2.updateScore(board.lengthWord(lettersJoin));
        $("#js-points2").html(player2.score);
        lettersJoin = [];
        state.turno++;
      }
      //game.win();
  };

  document.getElementById("js-restart").onclick = function() {

  };
};
