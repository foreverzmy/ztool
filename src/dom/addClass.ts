import hasClass from './hasClass';

/**
 * @desc 为元素添加新 clas
 * @param {HTMLElement} ele - 元素
 * @param {string} className - 要添加的 class
 */
const addClass = (ele: HTMLElement, className: string) => {
  if (!hasClass(ele, className)) {
    ele.className += ` ${className}`;
  }
};

export default addClass;
