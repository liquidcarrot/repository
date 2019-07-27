/**
 * Subtracts a series or array of numbers
 *
 * @param {number[]} [numbers] A series or array of numbers
 *
 * @returns {number} Returns the difference of the numbers passed
 *
 * @example
 * sub(9, 5, 2) // 2
 *
 * sub([6, 3]) // 3
 *
 * sub() // 0
 */
function sub(...numbers) {
  // For `sub([numbers])`
  if(numbers.length === 1 && Array.isArray(numbers[0])) numbers = numbers[0];
  
  // Sum of `arguments`
  return numbers.slice(1).reduce(function(difference, value) {
    return difference -= value;
  }, numbers[0]);
}

module.exports = sub;