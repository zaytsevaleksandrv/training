// Шахматная доска
function chessBoard(w,h){
  var rows = [];
  for (var i = 0; i < w; i++) {
     var row = [];
     for (var j = 0; j < h; j++) {
       if ((j + i) % 2 == 0)
         row.push("#");
       else
         row.push(" ");
     }
     row.push("\n")
     rows.push(row);

  }
  console.log('chessBoard - task 1 \n')
  for (var i = 0; i < rows.length; i++){
    console.log(rows[i].join(''))
  }
}
chessBoard(8, 8);

// Подсчет Букв
function countChar(str, token) {
  var token = new RegExp(token, 'gi');
  var result = str.match(token);
  console.log ('countChar - task 2 \n' + result.length);
}

countChar('My Random String', 'm');

//Кавычки в тексте
function replaceQuotes(str) {
  var reg = /(?!s'|([\s\S])'[a-z])([\s\S])'|^'/gi
  var result = str.replace(reg, "\"$1\"");
  console.log ('replaceQuotes - task 9 \n ' + result);
}

replaceQuotes("I'm the 'hero'");

// День и месяц
function getNames(date) {
  let day = "";
  let month = "";

  switch (date.getDay()) {
    case 0 :
      day = 'Воскесенье'
    break;
    case 1 :
      day =  'Понедельник'
    break;
    case 2 :
      day ='Вторник'
    break;
    case 3 :
      day ='Среда'
    break;
    case 4 :
      day ='Четверг'
    break;
    case 5 :
      day ='Пятница'
    break;
    case 6 :
      day ='Суббота'
    break;
  }

  switch (date.getMonth()) {
    case 0 :
      month = 'Январь'
    break;
    case 1 :
      month =  'Февраль'
    break;
    case 2 :
      month ='Март'
    break;
    case 3 :
      month ='Апрель'
    break;
    case 4 :
      month ='Май'
    break;
    case 5 :
      month ='Июнь'
    break;
    case 6 :
      month ='Июль'
    break;
    case 7 :
      month ='Август'
    break;
    case 8 :
      month ='Сентябрь'
    break;
    case 9 :
      month ='Октябрь'
    break;
    case 10 :
      month ='Ноябрь'
    break;
    case 11 :
      month ='Декабрь'
    break;
  }
  console.log ('getNames - task 11 \n' + month + ', ' + day);
}

getNames(new Date());

//Разница в годах
function differenceInYears(a,b) {
  var result = +((a - b) / 1000 / 60 / 60 / 24 / 365).toFixed(1);
  (result < 0) ? result = -(result) : result = +(result) ;
  console.log('differenceInYears - task 12 \n' + result);
}

differenceInYears(new Date(2014, 10, 2), new Date(2016, 10, 2));
differenceInYears(new Date(2014, 0), new Date(2014, 6));


// // Диапазон
// function makeArray(begin, end) {
//   var arr = [0,1,2,3,4,5,6,7,8,9,10]
//   var results = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (begin <= arr[i] && arr[i] <= end) {
//       results.push(arr[i]);
//     }
//   }
//   document.write('<b>task 3</b><br>' );
//   document.write('makeArray: ' + results + '<hr>' );
//   console.log ('makeArray: ' + results);
// }
//
// makeArray(1, 10);
//
// // Наоборот
// function reverseArray([a,b,c,d]){
//   document.write('<b>task 4</b><br>' );
//   document.write('reverseArray: ');
//   for (i = [a,b,c,d].length - 1; i >= 0 ; i--) {
//     document.write([a,b,c,d][i]);
//     console.log ('reverseArray: ' + [a,b,c,d][i]);
//   }
//   document.write('<br>');
// }
//
// reverseArray([1, 2, 3, 4]);
//
// function reverseArrayInPlace(array) {
//   document.write('reverseArrayInPlace: ');
//   for (i = array.length - 1; i >= 0 ; i--) {
//     document.write(array[i] + ' ');
//     console.log ('reverseArrayInPlace: ' + array[i]);
//   }
//   document.write('<hr>');
// }
//
// var array = ['A', 'B', 'C', 'D'];
// reverseArrayInPlace(array);
//
// // Свертка
// // TODO: сравнение массивов
// function mergeArrays([...arr1], [...arr2], [...arr3]){
//   document.write('<b>task 5</b><br>' );
//   var arrSpread = [...arr1, ...arr2, ...arr3];
//   document.write('mergeArrays spread: ' + arrSpread + '<br>');
//   console.log ('mergeArrays spread: ' + arrSpread);
//   var arrConcat = arr1.concat(arr2,arr3);
//   document.write('mergeArrays concat: ' + arrConcat + '<hr>');
//   console.log ('mergeArrays concat: ' + arrConcat );
// }
// mergeArrays([1,2],[3,4],[5,6]);
//
// //Глубокое сравнение
//
// function deepCompare(a,b) {
//   var a = JSON.stringify(a);
//   var b = JSON.stringify(b);
//   var result = (a === b);
//   document.write('<b>task 8</b><br>' );
//   document.write('deepCompare: ' + result + '<hr>');
//   console.log('deepCompare: ' + result);
// }
//
// deepCompare({ one: 1, two: '2' }, { one: 1, two:'2' });
//
// //Кавычки в тексте
// function replaceQuotes() {
//   document.write('<b>task 9</b><br>' );
//   var reg = /[^a-z]\'([^.]*)\'/gi
//   var str = "I'm the 'hero'"
//   var result = str.replace(reg, "\"$1\"");
//
//
//   document.write('replaceQuotes: ' + result + '<hr>');
//   console.log ('replaceQuotes: ' + result);
// }
//
// replaceQuotes();
//
// // День и месяц
// function getNames(date) {
//   var date = new Date();
//   var options = {
//     month: 'long',
//     day: 'numeric',
//     weekday: 'long'
//   };
//   document.write('<b>task 11</b><br>' );
//   document.write('getNames: ' + date.toLocaleString("ru", options) + '<hr>');
//   console.log ('getNames: ' + date.toLocaleString("ru", options));
// }
//
// getNames(new Date());
//
// //Разница в годах
// function differenceInYears(a,b) {
//   var result = Math.round((a - b) / 1000 / 60 / 60/ 24/ 365);
//   document.write('<b>task 12</b><br>' );
//   document.write('differenceInYears: ' + result + '<hr>');
//   console.log('differenceInYears: ' + result);
// }
// differenceInYears(new Date(2014,10,2), new Date(2016,10,2));
