const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = []
  let s = n.toString()
  for (let i = s.length; i >= 0; i--) {
    arr.push(+(s.slice(0, i) + s.slice(i+1)))
  }
  arr.sort((a, b) => b - a)
  return arr[1]
}

module.exports = {
  deleteDigit
};
