const { hello } = require("./index");

test("hello 函数应返回正确的问候语", () => {
  expect(hello("世界")).toBe("Hello, 世界!");
});
