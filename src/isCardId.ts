/**
 * @desc 判断身份证号是否正确
 * @param {string} id - 身份证号
 * @returns {boolean}
 */
const isCardId = (id: string) => {
  return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(id);
};

export default isCardId;
