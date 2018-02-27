/**
 * @desc 判断是否为 node 环境
 * @returns {boolean}
 */
const isNode = function() {
  return (
    Object.prototype.toString.call(
      typeof process !== 'undefined' ? process : 0
    ) === '[object process]'
  );
};

export default isNode;
