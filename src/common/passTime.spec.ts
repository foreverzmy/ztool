import passTime from './passTime';

describe('passTime', () => {
  it('5年前.', () => {
    const startTime = Date.now() - (1000 * 60 * 60 * 24 * 365 * 5);
    expect(passTime(startTime)).toBe('5年前');
  });
  it('一年前.', () => {
    const startTime = Date.now() - (1000 * 60 * 60 * 24 * 30 * 13);
    expect(passTime(startTime)).toBe('1年前');
  });
  it('12个月前.', () => {
    const startTime = Date.now() - (1000 * 60 * 60 * 24 * 30 * 12);
    expect(passTime(startTime)).toBe('12个月前');
  });
  it('3个月前.', () => {
    const startTime = Date.now() - (1000 * 60 * 60 * 24 * 30 * 3);
    expect(passTime(startTime)).toBe('3个月前');
  });
  it('20天前.', () => {
    const startTime = Date.now() - (1000 * 60 * 60 * 24 * 20);
    expect(passTime(startTime)).toBe('20天前');
  });
  it('15小时前.', () => {
    const startTime = Date.now() - (1000 * 60 * 60 * 15);
    expect(passTime(startTime)).toBe('15小时前');
  });
  it('52分钟前.', () => {
    const startTime = Date.now() - (1000 * 60 * 52);
    expect(passTime(startTime)).toBe('52分钟前');
  });
  it('5秒前.', () => {
    const startTime = Date.now() - (1000 * 5);
    expect(passTime(startTime)).toBe('5秒前');
  });
  it('刚刚.', () => {
    const startTime = Date.now() - 100;
    expect(passTime(startTime)).toBe('刚刚');
  });
});
