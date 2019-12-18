const spaceChar = " ";
const isValidKey = str => str && str !== spaceChar;
const getActiveKeys = obj => Object.keys(obj).filter(key => obj[key]);


const mergeClasses = (...args) => {
  return args.map(arg => {
    switch (typeof arg)
    {
      case "string":
        return arg;
      case "array":
        return mergeClasses(...arg);
      case "object":
        return mergeClasses(...getActiveKeys(arg));
      default:
        return undefined;
    }
  })
  .filter(isValidKey)  
  .join(spaceChar);
}

export { mergeClasses };
