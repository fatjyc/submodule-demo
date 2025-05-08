const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
};

const square = (a) => a * a;

const squareRoot = (a) => {
  if (a < 0) {
    throw new Error("Cannot take square root of negative number");
  }
  return Math.sqrt(a);
};

const power = (base, exponent) => Math.pow(base, exponent);

const factorial = (n) => {
  if (n < 0) {
    throw new Error("Cannot take factorial of negative number");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  square,
  squareRoot,
  power,
  factorial,
};
