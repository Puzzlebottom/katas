const assertEqual = function(actual, expected) {
  let isEqual = actual === expected;
  const status = isEqual ? "👍 Assertion Passed: " : "👎 Assertion Failed: ";
  const comparator = isEqual ? " === " : " !== ";

  console.log(`${status}${actual}${comparator}${expected}`);
};

const sumLargestTwoNumbers = (array) => {
  if (!Array.isArray(array)) return console.log("sumTwoLargestNumbers() only accepts a valid array as its argument");
  if (array.length < 2) return console.log("Provide an array containing at least 2 numbers");
  for (let element of array) if (isNaN(element)) return console.log("Each element of the array must be a number, or convert into a number");
  return array
    .sort((a, b) => Number(b) - Number(a))
    .splice(0, 2)
    .reduce((a, b) => Number(a) + Number(b));
};
  
let test = [1, 4, 6, 2, 3, 1, 10, 2, 14];
let test2 = ["1", "4", "6", 2, 3, "1", "10", 2, 14];
let invalidArgumentType = "test";
let invalidArrayLength = [];
let invalidElementType = ["test", "test"];

assertEqual(sumLargestTwoNumbers(test), 24);
assertEqual(sumLargestTwoNumbers(test2), 24);
assertEqual(sumLargestTwoNumbers(invalidArgumentType), undefined);
assertEqual(sumLargestTwoNumbers(invalidArrayLength), undefined);
assertEqual(sumLargestTwoNumbers(invalidElementType), undefined);