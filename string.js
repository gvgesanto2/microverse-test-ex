const { ensureStringAsArguments } = require("./utils");

const stringLength = ensureStringAsArguments((str) => {
  const strLength = str.length;
  if (strLength > 0 && strLength <= 10) {
    return strLength;
  } else {
    throw new Error("String needs to be between 1 and 10 characters long");
  }
});

const reverseString = ensureStringAsArguments((str) => {
  return str.split("").reverse().join("");
});

const capitalize = ensureStringAsArguments(
  (str) => str.charAt(0).toUpperCase() + str.slice(1)
);

module.exports = { stringLength, reverseString, capitalize };
