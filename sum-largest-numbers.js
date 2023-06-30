const sumLargestTwoNumbers = (array) => array
  .sort((a, b) => Number(b) - Number(a))
  .splice(0, 2)
  .reduce((a, b) => a + b);
  
let test = [1, 4, 6, 2, 3, 1, 10, 2, 14];
console.log(sumLargestTwoNumbers(test)); // => 24