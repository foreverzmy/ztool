/**
 * @desc 深度拷贝
 * @param {null|undefined|Date|Array|Object} value - 需要拷贝的变量
 * @returns value | error
 */
const deepClone = (value: any) => {
  let copy: any;

  // Handle the 3 simple types, and null or undefined
  if (!value || value === false || typeof value !== 'object') {
    return value;
  }

  // Handle Date
  if (value instanceof Date) {
    copy = new Date(value.getTime());
    return copy;
  }

  // Handle Array
  if (value instanceof Array) {
    copy = [];
    for (const key in value) {
      copy[key] = deepClone(value[key]);
    }
    return copy;
  }

  // Handle Object
  if (value instanceof Object) {
    copy = {};
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        value[key] = deepClone(value[key]);
      }
    }
    return value;
  }
  throw new Error('Unable to copy values! Its type is unsupported.');
};

export default deepClone;
