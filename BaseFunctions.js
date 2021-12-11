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

module.exports = { baseCsvConverter };
