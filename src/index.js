/**
 * @example
 * sum(1, 3, 4) // 8
 *
 * @example
 * sum([3, 6]) // 9
 *
 * @example
 * sum() // 0
 *
 * @param {number[]} arguments An array of numbers
 *
 * @returns {number} Returns the sum of the numbers passed
 */
function sum(...arguments) {
  // For `sum([numbers])`
  if(arguments.length === 1 && Array.isArray(arguments[0])) arguments = arguments[0];
  
  // Sum of `arguments`
  return arguments.reduce(function(sum, value) {
    return sum += value;
  }, 0)
}

module.exports = sum;