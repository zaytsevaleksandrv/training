//2 способ decorator
function Ball() { }

Ball.prototype.getDescription = function () {
  return "ball";
};

function SomeBallDecorator(ball) {
  this.ball = ball;
}

SomeBallDecorator.prototype.getDescription = function () {
  return "red " + this.ball.getDescription();
};

function LineBallDecorator(ball) {
  this.ball = ball;
}

LineBallDecorator.prototype.getDescription = function () {
  return this.ball.getDescription() + " with lines";
};

exports.Ball = Ball;
exports.SomeBallDecorator = SomeBallDecorator;
exports.LineBallDecorator = LineBallDecorator;
