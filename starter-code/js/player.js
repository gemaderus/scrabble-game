var Player = function() {
  this.score = 0;
  this.lives = 3;
};

Player.prototype.scorePlayer = function() {
  if(this.existWord(board.choosedWord, board.wordsList) || !board.isDuplicated(board.choosedWord, board.wordsList)) {
    this.score  += board.lengthWord(board.choosedWord);
  }
};

Player.prototype.livesPlayer = function() {
  if(!this.existWord(board.choosedWord, board.wordsList) || this.isDuplicated(board.choosedWord, board.wordsList)) {
    this.lives --;
  }
  return this.lives;
};

// Player.prototype.turn = function() {
//
// };
