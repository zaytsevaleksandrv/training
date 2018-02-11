'use strict'
//1 способ decorator
// function Ball(){
//   return {
//   getDescription:   function(){
//       return 'ball';
//     }
//   };
// };
//
// //decorator 1
// function BlueBall(ball){
//   self.ball = ball;
//   return {
//     getDescription: function(){
//       return 'red ' + self.ball.getDescription();
//     }
//   }
// };
//
// //decorator 2
// function LinesBall(ball) {
//   self.ball = ball;
//   return {
//     getDescription: function(){
//       return 'lines ' + self.ball.getDescription();
//     }
//   }
// }


//2 способ decorator
function Ball() {}

Ball.prototype.getDescription = function() {
  return 'ball';
}

function SomeBallDecorator(ball) {
  this.ball = ball;
}

SomeBallDecorator.prototype.getDescription = function() {
  return 'red ' + this.ball.getDescription();
}

function LineBallDecorator(ball) {
  this.ball = ball;
}

LineBallDecorator.prototype.getDescription = function() {
  return this.ball.getDescription() + ' with lines';
}



console.log(new Ball().getDescription()) // ball
console.log(new SomeBallDecorator(new Ball()).getDescription()) // red ball with lines
console.log(new LineBallDecorator(new Ball()).getDescription())
console.log(new LineBallDecorator(new SomeBallDecorator(new Ball())).getDescription())


//pattern Observer

function Wallet(amount, name) {
  this.amount = amount || Math.random() * 1000;
  this.name = name || 'leather';
}

Wallet.prototype.addObserver = function(observer){
  this.observer = observer;
}

Wallet.prototype.send = function () {
    const minus = Math.random() * 100;
    this.amount = this.amount - minus;
    if(this.amount > 0) {
      setTimeout(this.send.bind(this), Math.random() * 500);
    } else {
      console.log('%c' + this.name + ' кошелек пустой, увы, ты банкрот', 'color: green');
    }
    console.log(this.name + " отправил на" + this.observer.name + " " + minus + " рубля, осталось: " + this.amount)
    this.observer.eventFromWallet(minus);
    console.log(this.observer.name + " получил от " + minus + " рубля, осталось: " + this.observer.amount)
};

Wallet.prototype.eventFromWallet = function(plus) {
  this.amount = this.amount + plus;
};


let wallet1 = new Wallet(300, ' красный');
let wallet2 = new Wallet(100, ' белый');

wallet2.addObserver(wallet1);
wallet1.addObserver(wallet2);

wallet1.send();
wallet2.send();


//3.цепочка обязанностей
function Child(next) {
  this.next = next;
}

Child.prototype.eat = function(apples) {
    apples = apples-Math.round(Math.random() * 2 + 1);
    if (apples <= 0) {
      console.log("Neener-neener! I am glutton! And now are No apples: ", apples);
    } else if (this.next && apples > 0){
      this.next.eat(apples);
      console.log(apples)
    }
    // need add to here chain logic
}

const boy1 = new Child();
const girl1= new Child(boy1);
// ...
girl1.eat(3);
