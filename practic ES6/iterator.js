let str = "Сын маминой подруги";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // Выведет все буквы по очереди
}
