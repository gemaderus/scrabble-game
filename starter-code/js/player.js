var Player = function(node) {
  this.element = node;
  this.score = 0;
  this.lives = 3;
};

Player.prototype.updateScore = function(points) {
  this.score  += points;  
};

Player.prototype.updateLives = function() {
  this.lives --;
};

Player.prototype.reset = function() {
  this.score = 0;
  this.lives = 3;
};

Player.prototype.highlight = function (isOn) {
  this.element.toggleClass('is-highlight', isOn);
};
