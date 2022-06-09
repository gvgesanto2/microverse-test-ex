const { ensureNumberAsArguments } = require("./utils");

const DIVIDE_BY_ZERO_ERROR_MSG = "It's not possible to divide a number by 0.";

class Calculator {
  add = ensureNumberAsArguments((x, y) => x + y);
  subtract = ensureNumberAsArguments((x, y) => x - y);
  divide = ensureNumberAsArguments((x, y) => {
    if (y === 0) {
      throw new Error(DIVIDE_BY_ZERO_ERROR_MSG);
    }
    return x / y;
  });
  multiply = ensureNumberAsArguments((x, y) => x * y);
}

module.exports = { Calculator, DIVIDE_BY_ZERO_ERROR_MSG };
