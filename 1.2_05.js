// Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  'A',
  'C',
  'B',
  'A',
  'B',
  'B',
  'C',
  'A',
  'B',
  'D',
  'A',
  'C',
  'B',
  'A',
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

const responseCount = surveyResponses.reduce((accumulator, response) => {
  // accumulator[response] = (accumulator[response] || 0) + 1;
  // return (
  //   (accumulator[response] = (accumulator[response] || 0) + 1), accumulator
  // );
  // return accumulator;

  if (!accumulator[response]) {
    accumulator[response] = 0;
  }
  accumulator[response] += 1;
  return accumulator;
}, {});

// console.log(responseCount);

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: 'Electronics', item: 'Laptop', price: 1200, quantity: 1 },
  { category: 'Books', item: 'JS Basics', price: 30, quantity: 2 },
  { category: 'Electronics', item: 'Mouse', price: 25, quantity: 2 },
  { category: 'Home', item: 'Chair', price: 150, quantity: 1 },
  { category: 'Books', item: 'React Deep Dive', price: 50, quantity: 1 },
  { category: 'Electronics', item: 'Keyboard', price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

const salesSummary = sales.reduce((accumulator, sale) => {
  if (!accumulator[sale.category]) {
    accumulator[sale.category] = { totalRevenue: 0, itemCount: 0 };
  }
  console.log(accumulator, sale);
  accumulator[sale.category].totalRevenue += sale.price * sale.quantity;
  accumulator[sale.category].itemCount += sale.quantity;
  return accumulator;
}, {});

console.log(salesSummary);
