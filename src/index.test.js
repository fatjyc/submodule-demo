const { hello } = require("./index");

test("hello 函数应返回正确的问候语", () => {
  expect(hello("世界")).toBe("Hello, 世界!");
});

test("should handle empty string input", () => {
  expect(hello("")).toBe("Hello, !");
});

test("should handle null input", () => {
  expect(hello(null)).toBe("Hello, null!");
});

test("should handle undefined input", () => {
  expect(hello(undefined)).toBe("Hello, undefined!");
});

test("should handle English characters", () => {
  expect(hello("World")).toBe("Hello, World!");
});

test("should handle special characters", () => {
  expect(hello("@#$%")).toBe("Hello, @#$%!");
});

test("should handle numbers", () => {
  expect(hello(123)).toBe("Hello, 123!");
});

test("should handle boolean values", () => {
  expect(hello(true)).toBe("Hello, true!");
  expect(hello(false)).toBe("Hello, false!");
});

test("should handle objects", () => {
  expect(hello({})).toBe("Hello, [object Object]!");
});

test("should handle arrays", () => {
  expect(hello([1,2,3])).toBe("Hello, 1,2,3!");
});
