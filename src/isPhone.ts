/**
 * @desc 判断手机号是否正确
 * @param {string} phone - 手机号
 * @returns {boolean}
 */
const isPhone = (phone: string) => {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(phone);
};

export default isPhone;
