const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1 
    onFlat(arr)
    function onFlat(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
          counter ++
          const arr2 = arr.flat()
          onFlat(arr2)
          return false
        }
      }
    }
    return counter
  }
}

module.exports = {
  DepthCalculator
};
