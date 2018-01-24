// Шахматная доска
function chessBoard(w,h){
  var summ = (w * h) / 2;
  var w = w / 2;
  var h = h / 2;
  var sharp = ['#'];
  for (var i = 0; i < summ; i++ ) {
    var result = sharp.push('#');
    var result = sharp.join(' ').toString();
  }

  document.write('<b>task 1</b><br>' );
  document.write('chessBoard:<br>' + result + '<hr>' );
  console.log ('chessBoard:' + result);
}
chessBoard(8,8);

// Подсчет Букв
function countChar(str, token) {
  // var str = prompt('Введите строку', 'Привет! Как твои дела?');
  // var token = prompt('Введите символ', 'а');
  var token = new RegExp(token, 'gi');
  var result = str.match(token);
  document.write('<b>task 2</b><br>' );
  document.write('countChar: ' + result.length + '<hr>' );
  console.log ('countChar: ' + result.length);
}

countChar('My Random String', 'm');

// Диапазон
function makeArray(begin, end) {
  var arr = [0,1,2,3,4,5,6,7,8,9,10]
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    if (begin <= arr[i] && arr[i] <= end) {
      results.push(arr[i]);
    }
  }
  document.write('<b>task 3</b><br>' );
  document.write('makeArray: ' + results + '<hr>' );
  console.log ('makeArray: ' + results);
}

makeArray(1, 10);

// Наоборот
function reverseArray([a,b,c,d]){
  document.write('<b>task 4</b><br>' );
  document.write('reverseArray: ');
  for (i = [a,b,c,d].length - 1; i >= 0 ; i--) {
    document.write([a,b,c,d][i]);
    console.log ('reverseArray: ' + [a,b,c,d][i]);
  }
  document.write('<br>');
}

reverseArray([1, 2, 3, 4]);

function reverseArrayInPlace(array) {
  document.write('reverseArrayInPlace: ');
  for (i = array.length - 1; i >= 0 ; i--) {
    document.write(array[i] + ' ');
    console.log ('reverseArrayInPlace: ' + array[i]);
  }
  document.write('<hr>');
}

var array = ['A', 'B', 'C', 'D'];
reverseArrayInPlace(array);

// Свертка
// TODO: сравнение массивов
function mergeArrays([...arr1], [...arr2], [...arr3]){
  document.write('<b>task 5</b><br>' );
  var arrSpread = [...arr1, ...arr2, ...arr3];
  document.write('mergeArrays spread: ' + arrSpread + '<br>');
  console.log ('mergeArrays spread: ' + arrSpread);
  var arrConcat = arr1.concat(arr2,arr3);
  document.write('mergeArrays concat: ' + arrConcat + '<hr>');
  console.log ('mergeArrays concat: ' + arrConcat );
}
mergeArrays([1,2],[3,4],[5,6]);

//Глубокое сравнение

function deepCompare(a,b) {
  var a = JSON.stringify(a);
  var b = JSON.stringify(b);
  var result = (a === b);
  document.write('<b>task 8</b><br>' );
  document.write('deepCompare: ' + result + '<hr>');
  console.log('deepCompare: ' + result);
}

deepCompare({ one: 1, two: '2' }, { one: 1, two:'2' });

//Кавычки в тексте
function replaceQuotes() {
  document.write('<b>task 9</b><br>' );
  var reg = /[^a-z]\'([^.]*)\'/gi
  var str = "I'm the 'hero'"
  var result = str.replace(reg, "\"$1\"");


  document.write('replaceQuotes: ' + result + '<hr>');
  console.log ('replaceQuotes: ' + result);
}

replaceQuotes();

// День и месяц
function getNames(date) {
  var date = new Date();
  var options = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  };
  document.write('<b>task 11</b><br>' );
  document.write('getNames: ' + date.toLocaleString("ru", options) + '<hr>');
  console.log ('getNames: ' + date.toLocaleString("ru", options));
}

getNames(new Date());

//Разница в годах
function differenceInYears(a,b) {
  var result = Math.round((a - b) / 1000 / 60 / 60/ 24/ 365);
  document.write('<b>task 12</b><br>' );
  document.write('differenceInYears: ' + result + '<hr>');
  console.log('differenceInYears: ' + result);
}
differenceInYears(new Date(2014,10,2), new Date(2016,10,2));
