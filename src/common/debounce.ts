/**
 * @desc 函数防抖
 * @param {Function} fun - 需要防抖的函数
 * @param {number} dealy - 防抖时间
 * @param {boolean} [begin=true] - 初始化时是否执行
 * @returns {Function}
 */
const debounce = (fun: Function, delay: number, begin = true) => {
  let timeoutId: NodeJS.Timer;
  let lastExec = 0;

  function wrapper(...args: any[]) {
    if (begin && !timeoutId) {
      fun.apply(this, args);
    }
    if (!lastExec) {
      lastExec = Date.now();
      timeoutId = setTimeout(() => {
        fun.apply(this, args);
        clear();
      }, delay);
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fun.apply(this, args);
        clear();
      }, Date.now() - lastExec - delay);
    }
  }

  function clear() {
    lastExec = 0;
    clearTimeout(timeoutId);
  }

  return wrapper;
};

export default debounce;
