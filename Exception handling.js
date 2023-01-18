// В try catch конструкцию завернуть код: console.log(a), let a = 3. И вывести ошибку – ‘let перед использованием нужно объявить’. При выполнении 1/0  выводить ошибку 'на ноль делить нельзя'
try {
  console.log(a);
  let a = 3;
} catch (error) {
  if (error.name === "ReferenceError") {
    console.log("let перед использованием нужно объявить");
  } else {
    throw error;
  }
}

function div(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new SyntaxError("на ноль делить нельзя");
  }
}

try {
  let a = 1,
    b = 0;
  div(a, b);
} catch (error) {
  if (error.name === "SyntaxError") {
    console.log(error.message);
  } else {
    throw error;
  }
}
