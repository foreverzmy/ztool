// 有概率产生几毫秒误差
import timeLeft from './timeLeft';

describe('timeLeft', () => {
  it('0天0时0分20秒', () => {
    const endTime = Date.now() + (1000 * 20 + 50);
    expect(timeLeft(endTime)).toBe('0天0时0分20秒');
  });
  it('0天0时5分20秒', () => {
    const endTime = Date.now() + (1000 * (60 * 5 + 20) + 50);
    expect(timeLeft(endTime)).toBe('0天0时5分20秒');
  });
  it('0天22时5分20秒', () => {
    const endTime = Date.now() + (1000 * (60 * (60 * 22 + 5) + 20) + 50);
    expect(timeLeft(endTime)).toBe('0天22时5分20秒');
  });
  it('10天22时5分20秒', () => {
    const endTime = Date.now() + (1000 * (60 * (60 * (10 * 24 + 22) + 5) + 20) + 50);
    expect(timeLeft(endTime)).toBe('10天22时5分20秒');
  });
  it('1234天22时5分20秒', () => {
    const endTime = Date.now() + (1000 * (60 * (60 * (1234 * 24 + 22) + 5) + 20) + 50);
    expect(timeLeft(endTime)).toBe('1234天22时5分20秒');
  });
});
