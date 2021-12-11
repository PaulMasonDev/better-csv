const { baseCsvConverter } = require("./BaseFunctions");
const { removeSpaces, capitalizeString } = require("./HelperFunctions");
const { data } = require("./constants");

const cellsToLowerCase = (data) => {
  return baseCsvConverter(data, (string) => string.toLowerCase());
};

const cellsToUpperCase = (data) => {
  return baseCsvConverter(data, (string) => string.toUpperCase());
};

const cellsRemoveSpaces = (data) => {
  return baseCsvConverter(data, removeSpaces);
};

const cellsToCamelCase = (data) => {
  const toCamelCase = (string) => {
    const splitString = string.split(" ");
    let newString = "";
    splitString.forEach((word, index) => {
      if (index === 0) {
        newString += word.toLowerCase();
      } else {
        const newWord = capitalizeString(word);
        newString += newWord;
      }
    });
    return newString;
  };
  return baseCsvConverter(data, toCamelCase);
};

const cellsToPascalCase = (data) => {
  const toPascalCase = (string) => {
    const splitString = string.split(" ");
    let newString = "";
    splitString.forEach((word) => {
      newString += capitalizeString(word);
    });
    return newString;
  };
  return baseCsvConverter(data, toPascalCase);
};

const cellsToKebabCase = (data) => {
  const toKebabCase = (string) => {
    return string.split(" ").join("-");
  };
  return baseCsvConverter(data, toKebabCase);
};

const cellsToSnakeCase = (data) => {
  const toSnakeCase = (string) => {
    return string.split(" ").join("_");
  };
  return baseCsvConverter(data, toSnakeCase);
};

//cellsToLowerCase(data);
//cellsToUpperCase(data);
//cellsRemoveSpaces(data);
//cellsToCamelCase(data);
//cellsToPascalCase(data);
//cellsToKebabCase(data);
//cellsToSnakeCase(data);

module.exports = {
  cellsToLowerCase,
  cellsToUpperCase,
  cellsRemoveSpaces,
  cellsToCamelCase,
  cellsToPascalCase,
  cellsToKebabCase,
  cellsToSnakeCase,
};
