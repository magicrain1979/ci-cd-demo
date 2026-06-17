const { add, subtract, multiply, divide } = require("./index");

describe("Calculator", () => {
  test("add returns correct sum", () => {
    expect(add(2, 3)).toBe(6);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  test("subtract returns correct difference", () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(0, 5)).toBe(-5);
  });

  test("multiply returns correct product", () => {
    expect(multiply(6, 7)).toBe(42);
    expect(multiply(0, 100)).toBe(0);
  });

  test("divide returns correct quotient", () => {
    expect(divide(8, 2)).toBe(4);
    expect(divide(10, 3)).toBeCloseTo(3.333);
  });

  test("divide by zero throws error", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
