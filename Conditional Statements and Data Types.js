//Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
let a = "string";
let b = true;
let c = 5;
console.log(a + b);
console.log(a + c);
console.log(b + c);
//Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log(a * b);
console.log(a * c);
console.log(c * b);
//Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
console.log(a / b);
console.log(a / c);
console.log(c / b);
// Выполнить явное преобразование(number, string, boolean)
//number
let fetchedvalue = "1";
let changevalue = Number(fetchedvalue);
console.log(changevalue);
//string
let data = true;
let string = String(data);
console.log(string);
//boolean
let input = undefined;
let boolean = Boolean(input);
console.log(boolean);
