const { Calculator, DIVIDE_BY_ZERO_ERROR_MSG } = require("./Calculator");
const { getEnsureTypeErrorMsg } = require("./utils");

let calculator;
const NUM_1 = 7;
const NUM_2 = 5;
const SUM = 12;

const DIFF_NUM_1_NUM_2 = 2;
const DIFF_NUM_2_NUM_1 = -DIFF_NUM_1_NUM_2;

const NUM_1_DIVIDED_BY_NUM_2 = 1.4;

const NUM_1_MULTIPLIED_BY_NUM_2 = 35;

const NOT_A_NUMBER_ERROR_MSG = getEnsureTypeErrorMsg("number");

describe("Calculator Add Method", () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should be able to add two positive numbers", () => {
    const resultNum1Num2Sum = calculator.add(NUM_1, NUM_2);
    const resultNum2Num1Sum = calculator.add(NUM_2, NUM_1);

    expect(resultNum1Num2Sum).toBe(SUM);
    expect(resultNum2Num1Sum).toBe(SUM);
  });

  it("should be able to add two negative numbers", () => {
    const num1 = -NUM_1;
    const num2 = -NUM_2;
    const sum = -SUM;

    const resultNum1Num2Sum = calculator.add(num1, num2);
    const resultNum2Num1Sum = calculator.add(num2, num1);

    expect(resultNum1Num2Sum).toBe(sum);
    expect(resultNum2Num1Sum).toBe(sum);
  });

  it("should be able to add positive and negative numbers", () => {
    const positiveNum = NUM_1;
    const negativeNum = -1 * positiveNum;
    const sum = 0;

    const resultReturned = calculator.add(positiveNum, negativeNum);
    const reverseOrderResultReturned = calculator.add(negativeNum, positiveNum);

    expect(resultReturned).toBe(sum);
    expect(reverseOrderResultReturned).toBe(sum);
  });

  it("should accept ONLY numbers as arguments", () => {
    const num2Str = String(NUM_2);

    expect(() => {
      calculator.add(NUM_1, num2Str);
    }).toThrow(NOT_A_NUMBER_ERROR_MSG);
  });
});

describe("Calculator Subtract Method", () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should be able to subtract two positive numbers", () => {
    const resultDiffNum1Num2 = calculator.subtract(NUM_1, NUM_2);
    const resultDiffNum2Num1 = calculator.subtract(NUM_2, NUM_1);

    expect(resultDiffNum1Num2).toBe(DIFF_NUM_1_NUM_2);
    expect(resultDiffNum2Num1).toBe(DIFF_NUM_2_NUM_1);
  });

  it("should be able to subtract two negative numbers", () => {
    const num1 = -NUM_1;
    const num2 = -NUM_2;
    const sum = -SUM;

    const resultDiffNum1Num2 = calculator.subtract(num1, num2);
    const resultDiffNum2Num1 = calculator.subtract(num2, num1);

    expect(resultDiffNum1Num2).toBe(DIFF_NUM_2_NUM_1);
    expect(resultDiffNum2Num1).toBe(DIFF_NUM_1_NUM_2);
  });

  it("should be able to subtract positive and negative numbers", () => {
    const positiveNum = NUM_1;
    const negativeNum = -1 * positiveNum;
    const diff = 14;
    const negativeDiff = -diff;

    const resultReturned = calculator.subtract(positiveNum, negativeNum);
    const reverseOrderResultReturned = calculator.subtract(
      negativeNum,
      positiveNum
    );

    expect(resultReturned).toBe(diff);
    expect(reverseOrderResultReturned).toBe(negativeDiff);
  });

  it("should accept ONLY numbers as arguments", () => {
    const num2Str = String(NUM_2);

    expect(() => {
      calculator.subtract(NUM_1, num2Str);
    }).toThrow(NOT_A_NUMBER_ERROR_MSG);
  });
});

describe("Calculator Divide Method", () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should be able to divide two numbers", () => {
    const resultReturned = calculator.divide(NUM_1, NUM_2);

    expect(resultReturned).toBe(NUM_1_DIVIDED_BY_NUM_2);
  });

  it("should NOT be able to divide a number by zero", () => {
    expect(() => {
      calculator.divide(NUM_1, 0);
    }).toThrow(DIVIDE_BY_ZERO_ERROR_MSG);
  });

  it("should accept ONLY numbers as arguments", () => {
    const num2Str = String(NUM_2);

    expect(() => {
      calculator.divide(NUM_1, num2Str);
    }).toThrow(NOT_A_NUMBER_ERROR_MSG);
  });
});

describe("Calculator Multiply Method", () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  it("should be able to multiply two numbers", () => {
    const resultReturned = calculator.multiply(NUM_1, NUM_2);

    expect(resultReturned).toBe(NUM_1_MULTIPLIED_BY_NUM_2);
  });

  it("should accept ONLY numbers as arguments", () => {
    const num2Str = String(NUM_2);

    expect(() => {
      calculator.multiply(NUM_1, num2Str);
    }).toThrow(NOT_A_NUMBER_ERROR_MSG);
  });
});
