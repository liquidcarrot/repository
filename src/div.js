/**
 * Divides a series or array of numbers
 *
 * @param {number[]} [numbers] A series or array of numbers
 *
 * @returns {number} Returns the serial division of the numbers passed
 *
 * @example
 * div(1, 3, 4) // 8
 *
 * div([3, 6]) // 9
 *
 * div() // 0
 */
function div(...numbers) {
  // For `mult([numbers])`
  if(numbers.length === 1 && Array.isArray(numbers[0])) numbers = numbers[0];
  
  // Sum of `arguments`
  return numbers.splice(1).reduce(function(fraction, value) {
    return fraction /= value;
  }, numbers[0])
}

module.exports = div;