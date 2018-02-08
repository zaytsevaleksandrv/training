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

console.log('%c\n1. Создать цепочку прототипов для следующих объектов:\n\n', 'font-weight: bold')
console.log('Bike\nspeed = ' + Bike.speed + '\nwheelsCount = ' + Bike.wheelsCount);
console.log('Car\nspeed = ' + Car.speed + '\nwheelsCount = ' + Car.wheelsCount + '\ndoorsCount = ' + Car.doorsCount);
console.log('MonsterTruck\nspeed = ' + MonsterTruck.speed + '\nwheelsCount = ' + MonsterTruck.wheelsCount + '\ndoorsCount = ' + MonsterTruck.doorsCount + '\nwheelsSize = ' + MonsterTruck.wheelsSize);

//2. Используя прототипное наследование создать иерархию классов для объектов из задания 1 с дополнениями):

//родительский конструктор Vehical_dublicate
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
console.log('%c\n2. Используя прототипное наследование создать иерархию классов для объектов из задания 1 с дополнениями\n\n', 'font-weight: bold')
console.log('%cVehical\n\n', 'text-decoration: underline')
console.log('%cmort','color:red;font-weight: bold','speed = ' + mort.speed);
console.log('%cmort','color:red;font-weight: bold', 'move = ' + mort.move());
console.log('%cmort','color:red;font-weight: bold', 'stop = ' + mort.stop());

//родительский конструктор Bike_duplicate
function Bike_duplicate(wheelsCount) {
  Vehical_dublicate.apply(this, arguments);
  this.wheelsCount = wheelsCount || 2;
}

//увеличивает скорость на 1
Bike_duplicate.prototype.move = function() {
  this.speed++;
  return this.speed + ' врум врум';
}

function Child(speed) {
  Bike_duplicate.apply(this, arguments);
}
Child.prototype = new Bike_duplicate();
var lu = new Child(13);

console.log('%c\nBike\n\n', 'text-decoration: underline')
console.log('%clu','color:green;font-weight: bold','speed = ' + lu.speed);
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());
