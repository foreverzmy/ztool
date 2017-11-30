/**
 * @desc 判断元素是否拥有 class
 * @param {HTMLElement} ele - 元素
 * @param {string} className - 要添加的 class
 */
const hasClass = (ele: HTMLElement, className: string) => {
  const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
  return reg.test(ele.className);
};

export default hasClass;
