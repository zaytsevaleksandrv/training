
//2. Используя прототипное наследование создать иерархию классов для объектов из задания 1 с дополнениями):

//родительский конструктор Vehical
function Vehical(speed) {
  this.speed = speed || 10;
}

//увеличивает скорость на 1
Vehical.prototype.move = function() {

  return (this.speed += 1)
}

//обнуление скорости
Vehical.prototype.stop = function() {
  return this.speed = 0;
}

Vehical.prototype.toString = function() {
  var msg = "Помни, вся мощь джедая идет от его Силы...";
  return msg;
}

Vehical.prototype.valueOf = function() {
  var msg = "Эх... не видна взгляду Темная сторона";
  return msg;
};

var mort = new Vehical(20);


console.log('%c\n2. Используя прототипное наследование создать иерархию классов для объектов из задания 1 с дополнениями\n\n', 'font-weight: bold')

console.info(mort instanceof Vehical)

console.log('%cVehical\n\n', 'text-decoration: underline')
console.log('%cmort','color:red;font-weight: bold','speed = ' + mort.speed);
console.log('%cmort','color:red;font-weight: bold', 'move = ' + mort.move());
console.log('%cmort','color:red;font-weight: bold', 'stop = ' + mort.stop());

console.log('%c\n' + mort.toString(), 'color: orange')
console.log('%c\n' + mort.valueOf(), 'color: green')

//----------------------------------------------------------------------------------//
//родительский конструктор Bike_duplicate
function Bike(wheelsCount) {
  Vehical.apply(this, arguments);
  this.wheelsCount = wheelsCount || 2;
}

Bike.prototype = Object.create(Vehical.prototype);
Bike.prototype.constructor = Bike;

//увеличивает скорость на 1
Bike.prototype.move = function() {
  Vehical.prototype.move.bind(this);
  return (this.speed +=1)  + ' врум врум';
}

Bike.prototype.toString = function() {
  var msg = "Они что-то знают про Силу и скрывают это от меня...";
  return msg;
}

Bike.prototype.valueOf = function() {
  var msg = "Здесь неприятно...Я чувствую холод,.. смерть...";
  return msg;
};

var lu = new Bike(13);

console.log('%c\nBike\n\n', 'text-decoration: underline')

console.info(lu instanceof Vehical)
console.info(lu instanceof Bike)

console.log('%clu','color:green;font-weight: bold','speed = ' + lu.speed);
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());

console.log('%c\n' + lu.toString(), 'color: orange')
console.log('%c\n' + lu.valueOf(), 'color: green')

//----------------------------------------------------------------------------------//
//родительский конструктор Car_duplicate
function Car(wheelsCount, doorsCount, openCloseDoors) {
  this.wheelsCount = wheelsCount || 4;
  this.doorsCount = doorsCount || 5;
  this.openCloseDoors = openCloseDoors || 0;
  Car.count++;
}

Car.prototype = Object.create(Vehical.prototype);
Car.prototype.constructor = Car;
Car.count = 0;

//открывает дверь
Car.prototype.openDoor = function() {
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
Car.prototype.closeDoor = function() {
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
Car.prototype.count = function() {
  return Car.count;
}

Car.prototype.toString = function() {
  var msg = "Тут царит темная сторона Силы...Это Зла обитель. Войти ты должен.";
  return msg;
}

Car.prototype.valueOf = function() {
  var msg = "Бояться будешь. Ты будешь...";
  return msg;
};

var marty = new Car();

console.log('%c\nCar\n\n', 'text-decoration: underline')

console.info(marty instanceof Vehical)
console.info(marty instanceof Car)

console.log('object car count = ' + marty.count())
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'open doors: ' + marty.openDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'close doors: ' + marty.closeDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'open doors: ' + marty.openDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'close doors: ' + marty.closeDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'open doors: ' + marty.openDoor() + ' of ' + marty.doorsCount);
console.log('%cmarty','color:#9ab1c7;font-weight: bold', 'close doors: ' + marty.closeDoor() + ' of ' + marty.doorsCount);

console.log('%c\n' + marty.toString(), 'color: orange')
console.log('%c\n' + marty.valueOf(), 'color: green')

//----------------------------------------------------------------------------------//
//родительский конструктор MonsterTruck_duplicate
function MonsterTruck(wheelsSize) {
  Car.apply(this, arguments);
  this.wheelsSize = wheelsSize || 30;
}

MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;

//открывает дверь
MonsterTruck.prototype.openDoor = function(){
  setTimeout(Car.prototype.openDoor.bind(this), 1000);
  return this.openCloseDoors;
}

MonsterTruck.prototype.toString = function() {
  var msg = "Сомневаюсь. Мне нужен великий воин.";
  return msg;
}

MonsterTruck.prototype.valueOf = function() {
  var msg = "―Оружие убери! Плохого не сделаю. Знать хочу - зачем ты здесь?";
  return msg;
};

var martyTruck = new MonsterTruck(1,12,3);

console.log('%c\nMonsterTruck\n\n', 'text-decoration: underline')

console.info(martyTruck instanceof Vehical)
console.info(martyTruck instanceof Car)
console.info(martyTruck instanceof MonsterTruck)

console.log('%cmartyTruck','color:#f8ab47;font-weight: bold', 'open doors: ' + martyTruck.openDoor() + ' of ' + martyTruck.doorsCount);

console.log('%c\n' + martyTruck.toString(), 'color: orange')
console.log('%c\n' + martyTruck.valueOf(), 'color: green')
