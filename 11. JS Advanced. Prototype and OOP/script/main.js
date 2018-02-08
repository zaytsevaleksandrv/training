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

//----------------------------------------------------------------------------------//
//родительский конструктор Bike_duplicate
function Bike_duplicate(wheelsCount) {
  Vehical_dublicate.apply(this, arguments);
  this.wheelsCount = wheelsCount || 2;
}

Bike_duplicate.prototype = Object.create(Vehical_dublicate.prototype);
Bike_duplicate.prototype.constructor = Bike_duplicate;

//увеличивает скорость на 1
Bike_duplicate.prototype.move = function() {
  this.speed++;
  return this.speed + ' врум врум';
}


//дочерний конструктор
function Child(speed) {
  Bike_duplicate.apply(this, arguments);
}
Child.prototype = new Bike_duplicate();
var lu = new Child(13);

console.log('%c\nBike\n\n', 'text-decoration: underline')
console.log('%clu','color:green;font-weight: bold','speed = ' + lu.speed);
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());

//----------------------------------------------------------------------------------//
//родительский конструктор Car_duplicate
function Car_duplicate(wheelsCount, doorsCount, openCloseDoors) {
  this.wheelsCount = wheelsCount || 4;
  this.doorsCount = doorsCount || 5;
  this.openCloseDoors = openCloseDoors || 0;
  Car.count++;
}

Car_duplicate.prototype = Object.create(Vehical_dublicate.prototype);
Car_duplicate.prototype.constructor = Car_duplicate;
Car.count = 0;

//открывает дверь
Car_duplicate.prototype.openDoor = function() {
  this.openCloseDoors++ ;

  if (this.openCloseDoors > 0 && this.openCloseDoors < this.doorsCount){
    return this.openCloseDoors;
  } else if (this.openCloseDoors <= 0){
    let close = 'all doors close';
    return close;
  } else if (this.openCloseDoors >= this.doorsCount){
    let open = 'all doors open';
    return open;
  } else {
    return this.openCloseDoors;
  }
}

//закрывает дверь
Car_duplicate.prototype.closeDoor = function() {
  let close = this.doorsCount - this.openCloseDoors
  close++;

  if (this.openCloseDoors > 0 && this.openCloseDoors < this.doorsCount){
    return close;
  } else if (this.openCloseDoors <= 0){
    let close = 'all doors close';
    return close;
  } else if (this.openCloseDoors >= this.doorsCount){
    let close = 1;
    return close;
  } else {
    return close;
  }
}

//counter
Car_duplicate.prototype.count = function() {
  return Car.count;
}

//дочерний конструктор
function Child(wheelsCount, doorsCount, openCloseDoors) {
  Car_duplicate.apply(this, arguments);
}
Child.prototype = new Car_duplicate();
var marty = new Child();

console.log('%c\nCar\n\n', 'text-decoration: underline')
console.log('object car count = ' + marty.count())
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'open doors: ' + marty.openDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'close doors: ' + marty.closeDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'open doors: ' + marty.openDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'close doors: ' + marty.closeDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'open doors: ' + marty.openDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'close doors: ' + marty.closeDoor() + ' of ' + marty.doorsCount);

//----------------------------------------------------------------------------------//
//родительский конструктор MonsterTruck_duplicate
function MonsterTruck_duplicate(wheelsSize) {
  Car_duplicate.apply(this, arguments);
  this.wheelsSize = wheelsSize || 30;
}

MonsterTruck_duplicate.prototype = Object.create(Car_duplicate.prototype);
MonsterTruck_duplicate.prototype.constructor = MonsterTruck_duplicate;

//открывает дверь
MonsterTruck_duplicate.prototype.openDoor = function(){
  setTimeout(Car_duplicate.prototype.openDoor(), 1000);
}

var martyTruck = new Child(1,12,3);

console.log('%c\nMonsterTruck\n\n', 'text-decoration: underline')

console.log('%cmartyTruck','color:#f8ab47;font-weight: bold', 'open doors: ' + martyTruck.openDoor() + ' of ' + martyTruck.doorsCount);
