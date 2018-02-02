//4. Контекст вызова и карринг
//1 сспособ
function sumWith(number) {
  return this.currentValue += number;
}
var number = 2;
var o = {currentValue: 3};
var g = sumWith.bind(o);

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
let output = setInterval(function outputText() {
  console.log('setInterval: text');
}, 2000);

setTimeout(function() {
  clearInterval(output);
  console.log('setInterval: stop');
}, 10000)
