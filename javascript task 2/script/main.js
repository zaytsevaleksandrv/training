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

//2 способ
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


// let output = setInterval(function outputText() {
//   console.log('setInterval: text');
// }, 2000);
//
// setTimeout(function() {
//   clearInterval(output);
//   console.log('setInterval: stop');
// }, 10000)


// function timeStamp(number) {
//   return this.currentValue += number;
// }
// var number = 1000;
// var o = {currentValue: 0};
// var g = sumWith.bind(o);




// setInterval(function outputTwo() {
//   console.log('setInterval: timeStamp');
// }, time);
//
// setTimeout(function() {
//   clearInterval(outputTwo);
//   console.log('setInterval: timeStamp stop');
// }, 25000)

// let outputTwo = setInterval(function outputText() {
//   console.log('setInterval: timeStamp');
//   console.log(i);
// }, i++);
//
// setTimeout(function() {
//   clearInterval(outputTwo);
//   console.log('setInterval: timeStamp stop');
// }, 10000)
