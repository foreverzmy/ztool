/**
 * @desc 距离现在过去的时间
 * @param {(number | string)} startTime - 开始时间
 * @returns ${string}
 */
const passTime = (startTime: number | string) => {
  const currentTime = Date.now();

  if (typeof startTime === 'string') {
    startTime = Date.parse(startTime);
  }

  const time = currentTime - startTime;

  const second = Math.floor(time / 1000);
  const min = Math.floor(second / 60);
  const hour = Math.floor(min / 60);
  const day = Math.floor(hour / 24);
  const month = Math.floor(day / 30);
  const year = Math.floor(day / 365);
  if (year !== 0) { return `${year}年前`; }
  if (month !== 0) { return `${month}个月前`; }
  if (day !== 0) { return `${day}天前`; }
  if (hour !== 0) { return `${hour}小时前`; }
  if (min !== 0) { return `${min}分钟前`; }
  if (second !== 0) { return `${second}秒前`; }
  else { return '刚刚'; }
};

export default passTime;
