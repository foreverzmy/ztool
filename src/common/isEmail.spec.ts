import isEmail from './isEmail';

describe('isEmail', () => {
  it('921255465@qq.com', () => {
    expect(isEmail('92125565@qq.com')).toBeTruthy();
  });
  it('foreverzmyer@gmail.com', () => {
    expect(isEmail('foreverzmyer@gmail.com')).toBeTruthy();
  });
  it('zmy@foreverz.cn', () => {
    expect(isEmail('zmy@foreverz.cn')).toBeTruthy();
  });
  it('sds.cn', () => {
    expect(isEmail('sds.cn')).toBeFalsy();
  });
  it('@sds.cn', () => {
    expect(isEmail('@sds.cn')).toBeFalsy();
  });
});
