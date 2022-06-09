const getEnsureTypeErrorMsg = (type) =>
  `All arguments must be of the type '${type}'.`;

const ensureTypeAsArguments =
  (fn, typeToEnsure) =>
  (...args) => {
    if (fn.length !== args.length) {
      throw new Error(
        "You passed the wrong number of arguments to this function."
      );
    }
    args.forEach((arg) => {
      if (typeof arg !== typeToEnsure) {
        throw new Error(getEnsureTypeErrorMsg(typeToEnsure));
      }
    });
    return fn(...args);
  };

const ensureNumberAsArguments = (fn) => ensureTypeAsArguments(fn, "number");

const ensureStringAsArguments = (fn) => ensureTypeAsArguments(fn, "string");

module.exports = {
  getEnsureTypeErrorMsg,
  ensureNumberAsArguments,
  ensureStringAsArguments,
};
