// Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
let arrOfFilms = ["show1", "show2", "show3", "show4", "show5"];

arrOfFilms.forEach((element) => console.log(element));

// Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let arrayCars = ["man1", "man2", "man3", "man4", "man5"];

let arrToString = arrayCars.toString().replace(/,/g, ", ");
let stringToArray = arrToString.split(", ");

console.log("array of Cars Makers -", arrayCars);
console.log("array of Cars Maker To String -", arrToString);
console.log("string of Cars Maker To array -", stringToArray);

// Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let arrOfNames = ["Serhii", "Luba", "Alex", "Tanya"];
let addWord = "hello";
let newHelloArrayOfNames = [];

newHelloArrayOfNames = arrOfNames.map((item) => addWord + " " + item);
console.log("initial array is", arrOfNames);
console.log("new array with add 'hello' word is", newHelloArrayOfNames);

// Преобразовать числовой массив в Boolean
let arrForBooleanSort = [1, 5, 6, 9, -2, -6, 0, 9];
let BooleanArray = arrForBooleanSort.map((item) => Boolean(item));
console.log("initial array is", arrForBooleanSort);
console.log("booleanArray is ", BooleanArray);

// Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let arrayForSort = [1, 6, 7, 8, 3, 4, 5, 6];
console.log("Reverse", arrayForSort.sort().reverse());

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
let arrayForFilter = [1, 6, 7, 8, 3, 4, 5, 6];
let arrFiltered = arrayForFilter.filter((item) => item > 3);

console.log("filtered >3", arrFiltered);

// Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
let array = [1, 6, 7, 8, 3, 4, 5, 6];
let number = 4;

for (let index = 0; index < array.length; index++) {
  let element;
  if (array[index] == number) {
    console.log(`found number ${number} in position ${index} `);
  }
}

// Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
let number = 11; //a

while (number >= 10) {
  console.log("number is", number);
  number--;
}

// Реализовать цикл, который выводит в консоль простые числа
let endOfNumberRange = 201;

function isPrime(n) {
  if (n > 1) {
    for (i = 2; i < n; i++) if (n % i == 0) return false;
    return true;
  } else return false;
}

for (let i = 2; i <= endOfNumberRange; i++) {
  if (isPrime(i)) console.log(`This number ${i} - is prime`);
}
