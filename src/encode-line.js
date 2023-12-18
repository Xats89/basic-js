const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resArr = []
  let counter = 1;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter += 1
    } else {
      counter === 1 ? resArr.push(str[i]) : resArr.push(`${counter}${str[i]}`)
      counter = 1
    }
  }
  return resArr.join('')
}

module.exports = {
  encodeLine
};
