/**
 * @desc 生成指定范围内随机整数
 * @param {number} min - 最小值
 * @param {number} max - 最大值
 * @returns {number}
 */
const random = (min: number, max: number) => {
  return Math.floor(min + Math.random() * (max - min));
};

export default random;
