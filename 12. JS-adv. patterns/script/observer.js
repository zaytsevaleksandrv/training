//pattern Observer

function Wallet(amount, name) {
  this.amount = amount || Math.random() * 1000;
  this.name = name || 'leather';
}

Wallet.prototype.addObserver = function (observer) {
  this.observer = observer;
}

Wallet.prototype.send = function () {
  const minus = Math.random() * 100;
  this.amount = this.amount - minus;
  if (this.amount > 0) {
    setTimeout(this.send.bind(this), Math.random() * 500);
  } else {
    console.log('%c' + this.name + ' кошелек пустой, увы, ты банкрот', 'color: #fff; background: red');
  }
  console.log('%c' + this.name + " отправил на" + this.observer.name + " " + minus + " рубля, осталось: " + this.amount, 'color: #f45342')
  this.observer.eventFromWallet(minus);
  console.log('%c' + this.observer.name + " получил от " + minus + " рубля, осталось: " + this.observer.amount, 'color: #41f47a')
};

Wallet.prototype.eventFromWallet = function (plus) {
  this.amount = this.amount + plus;
};

module.exports = Wallet;
