/**
 * @desc 函数节流
 * @param {Function} fun - 需要节流的函数
 * @param {number} dealy - 节流时间
 */
const throttle = (fun: Function, delay: number) => {
  let timeoutId: NodeJS.Timer;

  function wrapper(...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fun.apply(this, args);
    }, delay);

  }
  return wrapper;
};

export default throttle;
