// Создать объект car, добавить к нему свойство color со значением 'черный'
// Изменить свойство color объекта car на 'зеленый'
// В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя

let car1 = {
  color: "black",
  changecolor() {
    this.color = "green";
  },
  addpower() {
    car1.power = "100 hp";
  },
};
car1.changecolor();
car1.addpower();
console.log(car1);

// На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
function count(apple, pear) {
  let total = apple + pear;
  return total;
}
console.log(count(1, 2));

// В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
let sayName = function (name) {
  if (name) {
    console.log(`Hello, ${name}`);
  } else {
    console.log("there is no such name");
  }
};
sayName("Serhii");
sayName();

// Напишите функцию вычисления типа аргумента и вывод типа в консоль
function findtype(x) {
  return console.log("Type of argument is " + typeof x);
}
findtype(1);
findtype(true);
findtype("Hey");

// Напишите функцию, которая определяет является ли число простым или нет
function showprime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}

if (showprime(5)) {
  console.log("number is prime");
} else {
  console.log("number is not prime");
}
