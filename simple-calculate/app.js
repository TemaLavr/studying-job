// Простой калькулятор simpleCalculate, который будет выполнять нужную операцию из четырех стандартных: */+-
// Без использования операторов ветвления (if/else)
// Вызов будет выглядеть примерно так:
// const selectedOperation = "multiply";
// console.log(calculate(6, 3, operations[selectedOperation])); // 18

// ------------------------------------------------

// Здесь будут храниться функции для каждой арифметической операции
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

// a - первое число
// b - второе число
// operation - одна из функций объекта operations
function calculate(a, b, operation) {
  // Возвращаем результат
  return operation(a, b);
}

const selectedOperation = "multiply";
console.log(calculate(6, 3, operations[selectedOperation]));

const selectedOperation2 = "add";
console.log(calculate(6, 3, operations[selectedOperation2]));

const selectedOperation3 = "subtract";
console.log(calculate(6, 3, operations[selectedOperation3]));

const selectedOperation4 = "divide";
console.log(calculate(6, 3, operations[selectedOperation4]));