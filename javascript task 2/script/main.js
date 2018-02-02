//3. Замыкание
function makeCounter() {
  var currentCount = 0;

  return {
    boost: function() {
        return currentCount++;
    },
    remove: function() {
        return currentCount--;
    }
  };
}

var c = makeCounter();

console.log('3. Замыкание\n');
console.log('boost: ' + c.boost()); // 0
console.log('boost: ' + c.boost()); // 1
console.log('boost: ' + c.boost()); // 2
console.log('remove: ' + c.remove()); // 3
console.log('remove: ' + c.remove()); // 2
console.log('remove: ' + c.remove()); // 1


//4. Контекст вызова и карринг
//1 сспособ
function sumWith(number) {
  return this.currentValue += number;
}
var number = 2;
var o = {currentValue: 3};
var g = sumWith.bind(o);

console.log('4. Контекст вызова и карринг\n');
console.log('bind: ' + g(number));

//2 способ [Дополнительно]
function sumWithCall(number) {
  return this.currentValue += number;
}
var number = 2;
var o = {currentValue: 3};
var c = sumWithCall.call(o, number);
console.log('call: ' + c);

//5. setInterval
var num = 0;
var max = 5;
var interval = null;

console.log('5. setInterval\n');

function incrementNumber() {
  num++;
  console.log('setInterval: text ' + num);

  if (num == max) {
    clearInterval(interval);
    console.log('clearInterval: stop, \nsetInterval выполненно - ' + num + ' раз');
  }
}

interval = setInterval(incrementNumber, 2000);

//[Дополнительно]
function timeStamp(delay) {

  if (num == max) {
    clearInterval(timeStamp);
    console.log('timeStamp: ' + delay);
    console.log('clearInterval: stop, \ntimeStamp выполненно - ' + num + ' раз');
  } else {
    console.log('timeStamp: ' + delay);
    setTimeout(timeStamp, Math.floor(delay), delay + 2000);
  }
}

timeStamp(1000);
