
// 4 a
console.log('%c\n4. Исправит ошибки\n\n', 'font-weight: bold')

function Animal(name) {
  this.name = name;
}

Animal.prototype.printName = function() {
  console.log(this.name);
}


function Rabbit() {
  Animal.apply(this, arguments);
}

Rabbit.prototype.printName = function() {
  console.log(this.name);
}

Rabbit.prototype = Object.create(Animal.prototype);
Rabbit.prototype.constructor = Rabbit;

var r = new Rabbit('Lucky');
r.printName(); // Should run without any errors and write 'Lucky'
console.log(Rabbit.prototype.hasOwnProperty('printName')) // Should be false


// 4 b
var animal = {
  speed: 0
};

var mammal = {
  age: 3
};

var rabbit = {
  name: 'Lucky'
};

animal.__proto__ = mammal;
rabbit.__proto__ = animal;

console.log(rabbit.age) // Should be '3'
console.log(rabbit.hasOwnProperty("age")) // Should be 'false' (also fix error)
