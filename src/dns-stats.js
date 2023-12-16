const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {}
  const allString = domains.join('.')
  const rev = domains.map((el) => el.split('.').reverse().join('.')).join('.')
  let arr = []
    domains.map((el) => {
    const str = el.split('.')
     str.reverse()
     arr.push(str[0])
     str.join('.')
     arr.push(str.join('.'))
  });
  const set = Array.from(new Set(arr))
  set.forEach((elem) => {
    let regExp = new RegExp(elem, 'g');
    result[`.${elem}`] = rev.match(regExp).length
  })
  return result
}

module.exports = {
  getDNSStats
};
