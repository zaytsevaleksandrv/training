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
