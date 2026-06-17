/**
 * Calculator module — simple demo for CI/CD pipeline
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

// Quick smoke test when run directly
if (require.main === module) {
  console.log("2 + 3 =", add(2, 3));
  console.log("10 - 4 =", subtract(10, 4));
  console.log("6 * 7 =", multiply(6, 7));
  console.log("8 / 2 =", divide(8, 2));
  console.log("All operations work correctly!");
}
