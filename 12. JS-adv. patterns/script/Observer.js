//pattern Observer

//Опишем объект "Переводы"
function Translation(){
  this.remitters = [];
}

//Опишем метод, который позволит отправителям, подписаться на переводы
Translation.prototype.remitter = function(onRemitter){
  this.remitters.push(onRemitter);
};

//Опишем метод, который будет вызываться, когда прошел перевод
Translation.prototype.translated = function(success){

  for(var i in this.remitters) {
    this.remitters[i].send(success);
  }
}

function Wallet(amount, name) {
  this.amount = amount || Math.random() * 1000;
  this.name = name || 'leather';
}

Wallet.prototype.send = function (success) {
    const minus = Math.random() * 100;
    this.amount = this.amount - minus;
    console.log(this.name + ": " + success + ' ' +this.amount);
    if(this.amount > 0) {
      setTimeout(this.send.bind(this), Math.random() * 500);
    } else {
      console.log('%c' + this.name + ' кошелек пустой, увы, ты банкрот', 'color: green');
    }
};

Wallet.prototype.eventFromWallet = function(plus) {
  this.amount = this.amount + plus;
};


let wallet1 = new Wallet(300, ' красный');
let wallet2 = new Wallet(100, ' белый');

var sberBankOnline = new Translation();

sberBankOnline.remitter(wallet1);
sberBankOnline.remitter(wallet2);

sberBankOnline.translated('Перевод сделан, остаток');
