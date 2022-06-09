const { stringLength, reverseString, capitalize } = require("./string");
const { getEnsureTypeErrorMsg } = require("./utils");

const NOT_A_STRING_ERROR_MSG = getEnsureTypeErrorMsg("string");

describe("String Length Function", () => {
  it("should be able to return the number of characters of a string", () => {
    const strToTest = "my_string";
    const strToTestLength = 9;

    const lengthReturned = stringLength(strToTest);

    expect(lengthReturned).toBe(strToTestLength);
  });

  it("should NOT be able to accept strings less than 1 character long", () => {
    const emptyStr = "";

    expect(() => {
      stringLength(emptyStr);
    }).toThrow(Error);
  });

  it("should NOT be able to accept strings longer than 10 characters", () => {
    const strWith11Chars = "12345678911";

    expect(() => {
      stringLength(strWith11Chars);
    }).toThrow(Error);
  });

  it("should accept ONLY string as argument", () => {
    const someNumber = 123;

    expect(() => {
      stringLength(someNumber);
    }).toThrow(NOT_A_STRING_ERROR_MSG);
  });
});

describe("Reverse String Function", () => {
  it("should be able to return the reverse order of a string", () => {
    const strToTest = "string";
    const strToTestReversed = "gnirts";

    const strReturned = reverseString(strToTest);

    expect(strReturned).toBe(strToTestReversed);
  });

  it("should accept ONLY string as argument", () => {
    const someNumber = 123;

    expect(() => {
      reverseString(someNumber);
    }).toThrow(NOT_A_STRING_ERROR_MSG);
  });
});

describe("Capitalize String Function", () => {
  it("should be able to return the string capitalized", () => {
    const strToTest = "string";
    const strToTestCapitalized = "String";

    const strReturned = capitalize(strToTest);

    expect(strReturned).toBe(strToTestCapitalized);
  });

  it("should accept ONLY string as argument", () => {
    const someNumber = 123;

    expect(() => {
      capitalize(someNumber);
    }).toThrow(NOT_A_STRING_ERROR_MSG);
  });
});
