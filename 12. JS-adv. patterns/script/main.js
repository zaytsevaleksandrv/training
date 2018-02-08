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
// function Ball() {}
//
// Ball.prototype.getDescription = function() {
//   return 'ball';
// }
//
// function SomeBallDecorator(ball) {
//   this.ball = ball;
// }
//
// SomeBallDecorator.prototype.getDescription = function() {
//   return 'red ' + this.ball.getDescription();
// }
//
// function LineBallDecorator(ball) {
//   this.ball = ball;
// }
//
// LineBallDecorator.prototype.getDescription = function() {
//   return this.ball.getDescription() + ' with lines';
// }
//
//
//
// console.log(new Ball().getDescription()) // ball
// console.log(new SomeBallDecorator(new Ball()).getDescription()) // red ball with lines
// console.log(new LineBallDecorator(new Ball()).getDescription())
// console.log(new LineBallDecorator(new SomeBallDecorator(new Ball())).getDescription())


//3.цепочка обязанностей
// function Child(next) {
//   this.next = next;
// }
//
// Child.prototype.eat = function(apples) {
//     apples = apples-Math.round(Math.random() * 2 + 1);
//     if (apples <= 0) {
//       console.log("Neener-neener! I am glutton! And now are No apples: ", apples);
//     } else if (this.next && apples > 0){
//       this.next.eat(apples);
//       console.log(apples)
//     }
//     // need add to here chain logic
// }
//
// const boy1 = new Child();
// const girl1= new Child(boy1);
// // ...
// girl1.eat(3);

//2 observer

function Wallet() {
  this.amount = Math.random() * 1000;
}
Wallet.prototype.send = function () {
    const minus = Math.random() * 100;
    this.amount = this.amount - minus;
    console.log(this.amount);
    if(this.amount > 0) {
      setTimeout(this.send.bind(this), Math.random() * 500);
    } else {
      console.log('WALLET is empty');
    }
};
Wallet.prototype.eventFromWallet = function(plus) {
  this.amount = this.amount + plus;
}
let wallet1 = new Wallet();
let wallet2 = new Wallet();
// need add here subscribe logic
wallet1.send();
wallet2.send();
