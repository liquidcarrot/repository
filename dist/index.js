(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Calculator = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
const calculator = {
  sum: require("./sum"),
  sub: require("./sub"),
  mult: require("./mult"),
  div: require("./div")
}

module.exports = calculator;
},{"./div":1,"./mult":3,"./sub":4,"./sum":5}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
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
},{}]},{},[2])(2)
});
