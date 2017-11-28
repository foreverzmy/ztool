/**
 * @desc 函数节流
 * @param {Function} fun - 需要节流的函数
 * @param {number} dealy - 节流时间
 * @param {boolean} [trailing=false]
 */
const throttle = (fun: Function, dealy: number) => {
  let timeoutId: NodeJS.Timer;

  function wrapper(...args: any[]) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      fun.apply(this, args);
    }, dealy);

  }
  return wrapper;
};

export default throttle;
