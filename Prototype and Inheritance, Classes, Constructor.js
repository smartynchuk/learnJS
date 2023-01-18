let animal = {
  move: true,
};
let cat = {
  __proto__: animal,
};

console.log("animal is", animal);
console.log("cat.move", cat.move);