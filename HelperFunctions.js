const removeSpaces = (string) => {
  return string.replace(/\s/g, "");
};

const capitalizeString = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

module.exports = { removeSpaces, capitalizeString };
