/**
 * Multiplies a series or array of numbers
 *
 * @param {number[]} [numbers] A series or array of numbers
 *
 * @returns {number} Returns the product of the numbers passed
 *
 * @example
 * mult(1, 3, 4) // 8
 *
 * mult([3, 6]) // 9
 *
 * mult() // 0
 */
function mult(...numbers) {
  // For `mult([numbers])`
  if(numbers.length === 1 && Array.isArray(numbers[0])) numbers = numbers[0];
  
  // Sum of `arguments`
  return numbers.reduce(function(product, value) {
    return product *= value;
  }, 1)
}

module.exports = mult;