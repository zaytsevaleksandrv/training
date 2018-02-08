//1. Создать цепочку прототипов для следующих объектов:
var Vehical = {
  speed: 10,
};

var Bike = {
  wheelsCount: 2,
};

var Car = {
  wheelsCount: 4,
  doorsCount: 5,
};

var MonsterTruck = {
  wheelsSize: 30,
}

Bike.__proto__ = Vehical;
Car.__proto__ = Vehical;
MonsterTruck.__proto__ = Car;

console.log('Bike\nspeed = ' + Bike.speed + '\nwheelsCount = ' + Bike.wheelsCount);
console.log('Car\nspeed = ' + Car.speed + '\nwheelsCount = ' + Car.wheelsCount + '\ndoorsCount = ' + Car.doorsCount);
console.log('MonsterTruck\nspeed = ' + MonsterTruck.speed + '\nwheelsCount = ' + MonsterTruck.wheelsCount + '\ndoorsCount = ' + MonsterTruck.doorsCount + '\nwheelsSize = ' + MonsterTruck.wheelsSize);

//2. Используя прототипное наследование создать иерархию классов для объектов из задания 1 с дополнениями):

//родительский конструктор Vehical
function Vehical_dublicate(speed) {
  this.speed = speed || 10;
}

//увеличивает скорость на 1
Vehical_dublicate.prototype.move = function() {
  this.speed++;
  return this.speed;
}

//обнуление скорости
Vehical_dublicate.prototype.stop = function() {
  return this.speed = 0;
}

//дочерний конструктор
function Child(speed) {
  Vehical_dublicate.apply(this, arguments);
}
Child.prototype = new Vehical_dublicate();

var mort = new Child(20);
console.log('\n2. Используя прототипное наследование создать иерархию классов для объектов из задания 1 с дополнениями\n\n')
console.log('Vehical\n\n')
console.log('mort speed = ' + mort.speed);
console.log('mort move = ' + mort.move());
console.log('mort stop = ' + mort.stop());
