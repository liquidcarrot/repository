/**
 * Sums a series or array of numbers
 *
 * @param {number[]} [numbers] A series or array of numbers
 *
 * @returns {number} Returns the sum of the numbers passed
 *
 * @example
 * sum(1, 3, 4) // 8
 *
 * sum([3, 6]) // 9
 *
 * sum() // 0
 */
function sum(...numbers) {
  // For `sum([numbers])`
  if(numbers.length === 1 && Array.isArray(numbers[0])) numbers = numbers[0];
  
  // Sum of `arguments`
  return numbers.reduce(function(sum, value) {
    return sum += value;
  }, 0)
}

module.exports = sum;