/**
 * @desc 判断两个数组是否相等
 * @param {array} arr1 - 数组 1
 * @param {array} arr2 - 数组 2
 * @returns {boolean}
 */
const arrayEqual = (arr1: Array<any>, arr2: Array<any>) => {
  if (arr1 === arr2) { return true; }
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

export default arrayEqual;
