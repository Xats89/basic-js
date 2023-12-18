const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arrCol = []
  for (let i = 0; i < matrix[0].length; i++) {
    arrCol.push([])
  }
  matrix.map ((el) => {
    el.map((e, i) => arrCol[i].push(e)) 
  })
let result = arrCol.map((el) => el.slice(0, el.indexOf(0) === -1 ? el.length : el.indexOf(0)))
const res = result.flat().reduce((sum, el) => {
  return sum + el
}, 0)
return res
}

module.exports = {
  getMatrixElementsSum
};
