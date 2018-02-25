//decorator

class Ball {
  getDescription() {
    return "ball";
  }
}

class SomeBallDecorator {
  constructor(ball) {
    this.ball = ball;
  }

  getDescription() {
    return "red " + this.ball.getDescription();
  }
}

class LineBallDecorator {
  constructor(ball) {
    this.ball = ball;
  }

  getDescription() {
    return this.ball.getDescription() + " with lines" ;
  }
}

exports.Ball = Ball;
exports.SomeBallDecorator = SomeBallDecorator;
exports.LineBallDecorator = LineBallDecorator;
