/**
 * @desc 判断变量是否为空
 * @param {null|undefined|Date|Array|Object} value - 需要判断的变量
 * @returns {boolean}
 */
const isEmpty = (value: any) => {

  // Handle the 3 simple types, and null or undefined
  if (value === null || value === undefined) {
    return true;
  }

  // Handle Array
  if (value instanceof Array) {
    return !value.length;
  }

  // Handle Object
  if (value instanceof Object) {
    return !Object.keys(value).length;
  }

  return false;
};

export default isEmpty;
