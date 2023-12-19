const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return chainMaker.length
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  addLink(value) {
    // return chainMaker.link = `${value}~~`
    throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  removeLink(position) {
    // if (chainMaker[link].length <= position -1 || position -1 < 0) return "You can't remove incorrect link!"
    // chainMaker.link.split('~~').splice(position - 1, 1).join('~~')
    // chainMaker.link.split('~~').splice(position - 1, 1).join('~~')
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    // return chainMaker.link.split('~~').reverse().join('~~')
    throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  finishChain() {
    return chainMaker.link
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
