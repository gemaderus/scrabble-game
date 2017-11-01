var Game = function() {

};

Game.prototype.startGame = function(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
};

//Game over

Game.prototype.gameOver = function() {
  this.win();
  console.log("Game over");
};

Game.prototype.displayTurn = function(turno) {
  if (turno % 2 === 0) {
    // display.html("Its player one turn");
    this.player1.highlight(turno % 2 === 0);

  } else {
    // display.html("Its player two turn");
    this.player2.highlight(turno % 2 !== 0);
  };
  return turno;
};

//Win

Game.prototype.win = function() {
  if(player1.updateLives() === 0 || player2.updateLives() === 0) {
    if(player1.updateLives() === 0) {
      console.log("The winner is player2");
    } else {
      console.log("The winner is player1");
    };
  };
};

//New Game

Board.prototype.newGame = function() {
  return this.randomBoard();
};

//Update Game
