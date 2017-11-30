import hasClass from './hasClass';

/**
 * @desc 为元素删除 clas
 * @param {HTMLElement} ele - 元素
 * @param {string} className - 要删除的 class
 */
const removeClass = (ele: HTMLElement, className: string) => {
  if (hasClass(ele, className)) {
    const reg = new RegExp(`(^|\s)${className}(\s|$)`);
    ele.className = ele.className.replace(reg, ' ');
  }
};

export default removeClass;
