window.onload = function() {
  var btnLetter = document.getElementsByClassName("btn-letters");

  //on click btn to start the game

  document.getElementById("js-start").onclick = function() {
    var value;
    var word = document.getElementById("js-word");

    var board = new Board();

    // console.log(board);

    var player = new Player();
    var game = new Game();

    game.startGame(board, player);

    for(var i = 0; i < btnLetter.length; i++) {
      btnLetter[i].innerHTML = board.randomLetters[i];
    }

    for(var i = 0; i < btnLetter.length; i++) {

      //on click btn to letter inside the start on click for that buttons are not clickable before starting the game

      btnLetter[i].onclick = function() {

        this.classList.add("btn-letter-selected");

        if(this.classList.contains("btn-letter-selected")) {
          this.setAttribute('disabled', 'disabled');
        }

        value = this.textContent;
        board.choosedWord.push(value);
        word.innerHTML = board.choosedWord.join('');

        console.log(board.choosedWord);
      };
    }

    var deleteBtn = document.getElementById("js-delete");

    deleteBtn.onclick = function() {
      board.deleteLastCharacter();
      word.innerHTML = board.choosedWord.join('');

      if(board.choosedWord.length === 0) {
        this.setAttribute('disabled', true);
      };


      console.log(board.choosedWord);
      //console.log(board.choosedWord);
    };
  };//end btn start click




};
