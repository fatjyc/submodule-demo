const { add, subtract, multiply, divide, square, squareRoot, power, factorial } = require('./math');

test('add function adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 0)).toBe(0);
});

test('subtract function subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
  expect(subtract(1, 1)).toBe(0);
  expect(subtract(-1, -1)).toBe(0);
});

test('multiply function multiplies two numbers', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(-2, 3)).toBe(-6);
  expect(multiply(0, 5)).toBe(0);
});

test('divide function divides two numbers', () => {
  expect(divide(6, 2)).toBe(3);
  expect(divide(5, 2)).toBe(2.5);
  expect(divide(0, 5)).toBe(0);
});

test('divide function throws error when dividing by zero', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});

test('square function squares a number', () => {
  expect(square(2)).toBe(4);
  expect(square(-2)).toBe(4);
  expect(square(0)).toBe(0);
});

test('squareRoot function calculates square root', () => {
  expect(squareRoot(4)).toBe(2);
  expect(squareRoot(0)).toBe(0);
  expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
});

test('squareRoot function throws error for negative numbers', () => {
  expect(() => squareRoot(-1)).toThrow('Cannot take square root of negative number');
});

test('power function calculates exponents', () => {
  expect(power(2, 3)).toBe(8);
  expect(power(3, 2)).toBe(9);
  expect(power(5, 0)).toBe(1);
  expect(power(0, 5)).toBe(0);
});

test('factorial function calculates factorial', () => {
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(5)).toBe(120);
});

test('factorial function throws error for negative numbers', () => {
  expect(() => factorial(-1)).toThrow('Cannot take factorial of negative number');
});
