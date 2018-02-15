var Ball = require("../lib/decorator.js").Ball,
    SomeBallDecorator = require("../lib/decorator.js").SomeBallDecorator,
    LineBallDecorator = require("../lib/decorator.js").LineBallDecorator,
    Child = require("../lib/chain.js"),
    Wallet = require("../lib/observer.js");

//decorator
console.log(new Ball().getDescription())
console.log(new SomeBallDecorator(new Ball()).getDescription())
console.log(new LineBallDecorator(new Ball()).getDescription())
console.log(new LineBallDecorator(new SomeBallDecorator(new Ball())).getDescription())

// observer
let wallet1 = new Wallet(300, ' красный');
let wallet2 = new Wallet(100, ' белый');

wallet2.addObserver(wallet1);
wallet1.addObserver(wallet2);

wallet1.send();
wallet2.send();

//chain
const boy1 = new Child();
const girl1 = new Child(boy1);

girl1.eat(3);
