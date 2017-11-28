/**
 * @desc 判断邮箱是否正确
 * @param {string} email - 邮箱
 * @returns {boolean}
 */
const isEmail = (email: string) => {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(email);
};

export default isEmail;
