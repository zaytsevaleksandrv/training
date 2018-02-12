//-----------------------------------------------------------------функциональном стиле--------------------------------------------------------//

//----------Vehical------------------//
function Vehical(speed) {
  this.speed = speed || 10;

  this.move = function() {
    return this.speed +=1;
  }

  this.stop = function() {
    return this.speed = 0;
  }

  this.toString = function() {
    var msg = "Но что там?";
    return msg;
  }

  this.valueOf = function() {
    var msg = "Только то, что с собой. Оружие тебе не нужно.";
    return msg;
  }
}

var mort = new Vehical(20);

console.log('%c\n3. Используя функциональное наследование повторить задачу из п2. \n\n', 'font-weight: bold')
console.log('%cVehical\n\n', 'text-decoration: underline');

console.info(mort instanceof Vehical)

console.log('%cmort','color:red;font-weight: bold','speed = ' + mort.speed);
console.log('%cmort','color:red;font-weight: bold', 'move = ' + mort.move());
console.log('%cmort','color:red;font-weight: bold', 'stop = ' + mort.stop());

console.log('%c\n' + mort.toString(), 'color: orange')
console.log('%c\n' + mort.valueOf(), 'color: green')

//----------------------------bike-----------------------------------//

function Bike(wheelsCount) {
  Vehical.apply(this, arguments);
  this.wheelsCount = wheelsCount || 2;

  var parentMove = this.move;
  this.move = function() {
    parentMove.call(this);
    return this.speed + ' врум врум';
  }

  this.toString = function() {
    var msg = "Я не могу поверить!";
    return msg;
  }

  this.valueOf = function() {
    var msg = "Вот и неудачи.";
    return msg;
  }
}

Bike.prototype = Object.create(Vehical.prototype);
Bike.prototype.constructor = Bike;

var lu = new Bike(13);

console.log('%c\nBike\n\n', 'text-decoration: underline')

console.info(lu instanceof Vehical)
console.info(lu instanceof Bike)

console.log('%clu','color:green;font-weight: bold','speed = ' + lu.speed);
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());

console.log('%c\n' + lu.toString(), 'color: orange')
console.log('%c\n' + lu.valueOf(), 'color: green')

//--------------Car--------------//

function Car(wheelsCount, doorsCount, openCloseDoors) {
  this.wheelsCount = wheelsCount || 4;
  this.doorsCount = doorsCount || 5;
  this.openCloseDoors = openCloseDoors || 0;
  Car.count++;

  this.openDoor = function() {
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

  this.closeDoor = function() {
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

  this.count = function() {
    return Car.count;
  }

  this.toString = function() {
    var msg = "Сосредоточься. Почувствуй Силы течение.";
    return msg;
  }

  this.valueOf = function() {
    var msg = "Сквозь Силу увидишь ты планеты. Будущее. Прошлое.Друзей, что нет.";
    return msg;
  }
}

Car.count = 0;
Car.prototype = Object.create(Vehical.prototype);
Car.prototype.constructor = Car;

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

//------------MonsterTruck--------//

function MonsterTruck(wheelsSize) {
  Car.apply(this, arguments);
  this.wheelsSize = wheelsSize || 30;

  let parentOpenDoor = this.openDoor;
  this.openDoor = function(){
    setTimeout(parentOpenDoor.call(this), 1000);
    return this.openCloseDoors;
  }

  this.toString = function() {
    var msg = "Говорил я. Безрассуден он. Все усложнилось.";
    return msg;
  }

  this.valueOf = function() {
    var msg = "Он - наша единственная надежда. Нет. Еще одна есть.";
    return msg;
  }
}

MonsterTruck.prototype = Object.create(Car.prototype);
MonsterTruck.prototype.constructor = MonsterTruck;

var martyTruck = new MonsterTruck(1,12,3);

console.log('%c\nMonsterTruck\n\n', 'text-decoration: underline')

console.info(martyTruck instanceof Vehical)
console.info(martyTruck instanceof Car)
console.info(martyTruck instanceof MonsterTruck)

console.log('%cmartyTruck','color:#f8ab47;font-weight: bold', 'open doors: ' + martyTruck.openDoor() + ' of ' + martyTruck.doorsCount);

console.log('%c\n' + martyTruck.toString(), 'color: orange')
console.log('%c\n' + martyTruck.valueOf(), 'color: green')
