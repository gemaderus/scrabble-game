window.onload = function() {
  var btnLetter = document.getElementsByClassName("btn-letters");


  // btnLetter[0].onclick = function() {
  //   console.log("hola");
  //   for(var i = 0; i < btnLetter.length; i++) {
  //     btnLetter[i].classList.add("btn-letter-selected");
  //   }
  // };
  document.getElementById("js-start").onclick = function() {
    var value;

    var board = new Board();
    console.log(board);
    var player = new Player();
    var game = new Game();

    game.startGame(board, player);

    for(var i = 0; i < btnLetter.length; i++) {
      btnLetter[i].innerHTML = board.randomLetters[i];
    }

    for(var i = 0; i < btnLetter.length; i++) {
      btnLetter[i].onclick = function() {
        this.classList.toggle("btn-letter-selected");
        value = this.textContent;
        // board.choosedWord.push(value);
        console.log(value);
      };
    }


  };



};
