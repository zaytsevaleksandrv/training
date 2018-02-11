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

Vehical_dublicate.prototype.toString = function() {
  var msg = "Помни, вся мощь джедая идет от его Силы...";
  return msg;
}

Vehical_dublicate.prototype.valueOf = function() {
  var msg = "Эх... не видна взгляду Темная сторона";
  return msg;
};

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

console.log('%c\n' + mort.toString(), 'color: orange')
console.log('%c\n' + mort.valueOf(), 'color: green')

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

Bike_duplicate.prototype.toString = function() {
  var msg = "Они что-то знают про Силу и скрывают это от меня...";
  return msg;
}

Bike_duplicate.prototype.valueOf = function() {
  var msg = "Здесь неприятно...Я чувствую холод,.. смерть...";
  return msg;
};

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

console.log('%c\n' + lu.toString(), 'color: orange')
console.log('%c\n' + lu.valueOf(), 'color: green')

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

Car_duplicate.prototype.toString = function() {
  var msg = "Тут царит темная сторона Силы...Это Зла обитель. Войти ты должен.";
  return msg;
}

Car_duplicate.prototype.valueOf = function() {
  var msg = "Бояться будешь. Ты будешь...";
  return msg;
};

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

console.log('%c\n' + marty.toString(), 'color: orange')
console.log('%c\n' + marty.valueOf(), 'color: green')

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
  this.openCloseDoors++;
  setTimeout(Car_duplicate.prototype.openDoor.bind(this), 1000);
  return this.openCloseDoors;
}

MonsterTruck_duplicate.prototype.toString = function() {
  var msg = "Сомневаюсь. Мне нужен великий воин.";
  return msg;
}

MonsterTruck_duplicate.prototype.valueOf = function() {
  var msg = "―Оружие убери! Плохого не сделаю. Знать хочу - зачем ты здесь?";
  return msg;
};

var martyTruck = new MonsterTruck_duplicate(1,12,3);

console.log('%c\nMonsterTruck\n\n', 'text-decoration: underline')

console.log('%cmartyTruck','color:#f8ab47;font-weight: bold', 'open doors: ' + martyTruck.openDoor() + ' of ' + martyTruck.doorsCount);

console.log('%c\n' + martyTruck.toString(), 'color: orange')
console.log('%c\n' + martyTruck.valueOf(), 'color: green')

//-----------------------------------------------------------------функциональном стиле--------------------------------------------------------//

//----------Vehical------------------//
function Vehical_three(speed) {
  this.speed = speed || 10;

  this.move = function() {
    this.speed++;
    return this.speed;
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

var mort = new Vehical_three(20);

console.log('%c\n3. Используя функциональное наследование повторить задачу из п2. \n\n', 'font-weight: bold')
console.log('%cVehical\n\n', 'text-decoration: underline');
console.log('%cmort','color:red;font-weight: bold','speed = ' + mort.speed);
console.log('%cmort','color:red;font-weight: bold', 'move = ' + mort.move());
console.log('%cmort','color:red;font-weight: bold', 'stop = ' + mort.stop());

console.log('%c\n' + mort.toString(), 'color: orange')
console.log('%c\n' + mort.valueOf(), 'color: green')

//----------------------------bike-----------------------------------//

function Bike_three(wheelsCount) {
  Vehical_three.apply(this, arguments);
  this.wheelsCount = wheelsCount || 2;

  this.move = function() {
    this.speed++;
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

var lu = new Bike_three(13);

console.log('%c\nBike\n\n', 'text-decoration: underline')
console.log('%clu','color:green;font-weight: bold','speed = ' + lu.speed);
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());
console.log('%clu','color:green;font-weight: bold', 'move = ' + lu.move());

console.log('%c\n' + lu.toString(), 'color: orange')
console.log('%c\n' + lu.valueOf(), 'color: green')

//--------------Car--------------//

function Car_three(wheelsCount, doorsCount, openCloseDoors) {
  this.wheelsCount = wheelsCount || 4;
  this.doorsCount = doorsCount || 5;
  this.openCloseDoors = openCloseDoors || 0;
  Car_three.count++;

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
    return Car_three.count;
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

Car_three.count = 0;

var marty = new Car_three();

console.log('%c\nCar\n\n', 'text-decoration: underline')
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

function MonsterTruck_three(wheelsSize) {
  Car_three.apply(this, arguments);
  this.wheelsSize = wheelsSize || 30;

  this.openDoor = function(){
    this.openCloseDoors++;
    setTimeout(this.openDoor.bind(this), 1000);
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

var martyTruck = new MonsterTruck_three(1,12,3);

console.log('%c\nMonsterTruck\n\n', 'text-decoration: underline')

console.log('%cmartyTruck','color:#f8ab47;font-weight: bold', 'open doors: ' + martyTruck.openDoor() + ' of ' + martyTruck.doorsCount);

console.log('%c\n' + martyTruck.toString(), 'color: orange')
console.log('%c\n' + martyTruck.valueOf(), 'color: green')


// 4 a

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

Rabbit.prototype = Object.create(Rabbit.prototype);
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
