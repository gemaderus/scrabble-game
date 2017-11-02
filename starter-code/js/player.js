var Player = function(node) {
  this.element = node;
  this.score = 0;
  this.lives = 3;
};

Player.prototype.updateScore = function(points) {
  this.score  += points;
  // Actualizamos la vista de los puntos
  this.showScore();
};

Player.prototype.updateLives = function() {
  this.lives--;
  // Actualizamos la vista de los corazones
  this.showLives();
};

Player.prototype.showLives = function () {
  // cogemos los svg que están dentro de nuestro nodo
  var liveNodes = this.element.find('.hearts-item svg');
  var lives = this.lives;
  // recorremos los svg para ponerles la clase heart-live o heart-dead
  liveNodes.each(function (index) {
    if (index < lives) {
      $(this).attr('class', 'heart-alive');
    } else {
      $(this).attr('class', 'heart-dead');
    }
  });
};

Player.prototype.showScore = function () {
  var scoreNode = this.element.find('.js-score');
  scoreNode.html(this.score);
};

Player.prototype.reset = function() {
  this.score = 0;
  this.lives = 3;
};

Player.prototype.highlight = function (isOn) {
  this.element.toggleClass('is-highlight', isOn);
};

Player.prototype.isAlive = function () {
  return this.lives > 0;
};
