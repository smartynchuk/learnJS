// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'
"ahb acb aeb aeeb adcb axeb".replace(/a.b/, "!");

// Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
"2+3 223 2223".replace(/2\+3/, "!");

// Получить день, месяц и год текущей даты и по отдельности вывести в консоль
const today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const now = today.toLocaleString("en-US", options);
console.log(now);
