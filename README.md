# better-csv

```
npm install better-csv
```
Accepts csv data in this form:

```
const data = [
  ["Date", "Item", "Description"],
  ["2021-12-11", "Candy Bar", "Delicious Candy Bar"],
  ["2021-12-16", "Bicyle", "A fun bicyle"],
];
```

Current Functions (will skip first header element of data array):
```
cellsToLowerCase(data),
cellsToUpperCase(data),
cellsRemoveSpaces(data),
cellsToCamelCase(data),
cellsToPascalCase(data),
cellsToKebabCase(data),
cellsToSnakeCase(data),
```
