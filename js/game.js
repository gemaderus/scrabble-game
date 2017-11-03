var Game = function() {

};

Game.prototype.startGame = function(board, player1, player2) {
  this.board = board;
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.displayTurn = function(turno) {
  // Actualizar los dos players en cada turno

  this.player1.highlight(turno % 2 === 0);
  this.player2.highlight(turno % 2 !== 0);
};

Game.prototype.getPlayer = function (turno) {
  if (turno % 2 === 0) {
    return this.player1;
  } else {
    return this.player2;
  };
};

Game.prototype.takeLive = function (turno) {
  var player = this.getPlayer(turno);
  player.updateLives();
};

Game.prototype.updateScore = function (turno, score) {
  var player = this.getPlayer(turno);
  player.updateScore(score);
};

//Win

Game.prototype.win = function() {
  $('.js-winners player').hide();

  if (!player1.isAlive() || !player2.isAlive()) {
    if (player1.isAlive()) {
      $('.js-winners .js-player1').show();
    } else {
      $('.js-winners .js-player2').show();
    };
  };
};


Game.prototype.resetTurn = function (state) {
  state.jugadas = [];
};

//Game over

Game.prototype.gameOver = function() {
  $(".container-end-game").show();
  $(".container-game").hide();

  if(!this.player1.isAlive()) {
    $(".js-player2").show();
    $(".js-star").text(this.player2.score);
  } else if(!this.player2.isAlive()) {
    $(".js-player1").show();
    $(".js-star").text(this.player1.score);
  }
};


//New Game

Board.prototype.newGame = function() {
  return this.randomBoard();
};
