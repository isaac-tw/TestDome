// https://www.testdome.com/questions/javascript/two-sum/56606

/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
  const indexMap = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const complement = sum - numbers[i];

    if (indexMap.has(complement)) return [indexMap.get(complement), i];
    indexMap.set(numbers[i], i);
  }

  return null;
}

const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
console.log(indices);
