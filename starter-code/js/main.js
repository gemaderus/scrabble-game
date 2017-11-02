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
    $(".container-home").css("display", "none");
    $(".container-game").css("display", "block");
  };

    $('#js-board').on('click', 'button', onClickButton);

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

      // Si la palabra no es correcta, restamos una vida
      // si es correcta, aumentamos los puntos
      // en estos casos delegamos las acciones a game, que en función del turno, sabrá qué player necesita

      // actualizar
      if (!isWordCorrect) {
        game.takeLive(state.turno);
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

      if(!board.existWord(lettersJoin, board.wordsList)) {
        $("#js-warning").css("display", "block");

        var text = $("#js-warning-text").text("Ops!! Parece que tu palabra no existe. Pierdes una vida!!");
        $("js-warning-text").html(text);
      };

      if(board.isDuplicated(lettersJoin, board.wordsSelected)) {
        $("#js-warning").addClass("is-visible");
        $("js-warning-text").html("Ops!! Esta palabra está duplicada. Pierdes una vida!!");
      };

      document.getElementById("js-btn-cross").onclick = function() {

        console.log("hola");
        document.getElementById("js-warning").style.display = "none";
      };


      if(!player1.isAlive() || !player2.isAlive()) {
        game.gameOver();
      }
  };

  document.getElementById("js-new-game").onclick = function() {
    var element  = document.getElementById('js-board');
    $(".container-end-game").css("display", "none");
    $(".container-game").css("display", "block");
    board.newGame();
    board.drawBoard(element);
    player1.reset();
    player2.reset();
    state = {
     jugadas: [],
     turno: 0
   };
  };


  // document.getElementById("js-restart").onclick = function() {
  //
  // };
};
