// Filter Example: Check if any user roles match required roles

const currentUserRoles = ['user', 'editor'];
const requiredRoles = ['admin', 'manager'];

const hasAccess = currentUserRoles.some((role) => requiredRoles.includes(role));

console.log(hasAccess); // false / true

// Array from Method

// Make an array from a string of comma-separated values
const csvString = 'red,green,blue,yellow';
const colorArr = Array.from(csvString.split(','), (color) => color.trim());
console.log(colorArr); // ['red', 'green', 'blue', 'yellow']

// Make an array with length 5, filled with zeros

const zeroArray = Array.from({ length: 5 }, () => 0);
const zeroArray2 = Array.from({ length: 5 }).fill(0);

console.log(zeroArray); // [0, 0, 0, 0, 0]
console.log(zeroArray2); // [0, 0, 0, 0, 0]

const rangeArr = (start, stop, step) => {
  return Array.from(
    { length: Math.ceil((stop - start) / step) },
    (_, i) => start + step * i
  );
};

console.log(rangeArr(1, 10, 2)); // [1, 3, 5, 7, 9]
