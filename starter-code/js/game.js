var Game = function() {

};

Game.prototype.startGame = function(board, player) {
  this.board = board;
  this.player = player;
  //board.randomLetters = [];
};

//Game over

Game.prototype.gameOver = function() {
  if(this.player.lives === 0) {
    return alert ("You are a loser! Game over baby!");
  };
};

//Wind


//New Game

Board.prototype.newGame = function() {
  return this.randomBoard();
};

//Update Game
