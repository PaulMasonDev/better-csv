const fs = require("fs").promises;

const baseCsvConverter = (data, modifier) => {
  const newCSV = [];
  data.forEach((row, index) => {
    if (index === 0) {
      newCSV.push(row);
    } else {
      const newRow = [];
      row.forEach((cell) => {
        newRow.push(modifier(cell));
      });
      newCSV.push(newRow);
    }
  });
  console.log(newCSV);
  return newCSV;
};

export const baseCsvChecker = (data, checker) => {
  const newCSVErrors = [];
  data.forEach((row, index) => {
    if (!index === 0) {
      row.forEach((cell, index) => {
        if (cell === checker) {
          newCSVErrors.push(`Row ${index + 1} Column ${index + 1}`);
        }
      });
    }
  });
  let message = "";
  newCSVErrors.forEach((error) => {
    message += error;
  });
  console.log(newCSVErrors);
  return newCSVErrors;
};

module.exports = { baseCsvConverter, baseCsvChecker };
