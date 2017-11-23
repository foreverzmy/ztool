/**
 * @desc 距离目标时间剩余时间
 * @param {(number | string)} endTime - 目标时间
 * @returns ${string}
 */
const timeLeft = (endTime: number | string) => {
  const currentTime = Date.now();
  if (typeof endTime === 'string') {
    endTime = Date.parse(endTime);
  }

  const time = endTime - currentTime;

  const second = Math.floor(time / 1000 % 60);
  const min = Math.floor(time / 1000 / 60 % 60);
  const hour = Math.floor(time / 1000 / 60 / 60 % 24);
  const day = Math.floor(time / 1000 / 60 / 60 / 24);
  return `${day}天${hour}时${min}分${second}秒`;
};

export default timeLeft;
