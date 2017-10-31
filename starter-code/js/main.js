window.onload = function() {
  // var btnLetter = document.getElementsByClassName("btn-letters");
  //
  // //on click btn to start the game
  //
  // document.getElementById("js-start").onclick = function() {
  //   var value;
  //   var word = document.getElementById("js-word");
  //
  //   var board = new Board();
  //
  //   // console.log(board);
  //
  //   var player = new Player();
  //   var game = new Game();
  //
  //   game.startGame(board, player);
  //
  //   for(var i = 0; i < btnLetter.length; i++) {
  //     btnLetter[i].innerHTML = board.randomLetters[i];
  //   }
  //
  //   for(var i = 0; i < btnLetter.length; i++) {
  //
  //     //on click btn to letter inside the start on click for that buttons are not clickable before starting the game
  //
  //     btnLetter[i].onclick = function() {
  //
  //       this.classList.add("btn-letter-selected");
  //
  //       if(this.classList.contains("btn-letter-selected")) {
  //         this.setAttribute('disabled', 'disabled');
  //       }
  //
  //       value = this.textContent;
  //       board.choosedWord.push(value);
  //       word.innerHTML = board.choosedWord.join('');
  //
  //       console.log(board.choosedWord);
  //     };
  //   }
  //
  //   var deleteBtn = document.getElementById("js-delete");
  //
  //   deleteBtn.onclick = function() {
  //     board.deleteLastCharacter();
  //     word.innerHTML = board.choosedWord.join('');
  //
  //     if(board.choosedWord.length === 0) {
  //       this.setAttribute('disabled', true);
  //     };
  //
  //
  //     console.log(board.choosedWord);
  //     //console.log(board.choosedWord);
  //   };
  // };//end btn start click

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
