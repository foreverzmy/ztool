import isPhone from './isPhone';

describe('isPhone', () => {
  it('18511007779', () => {
    expect(isPhone('18511007779')).toBeTruthy();
  });
  it('18112341234', () => {
    expect(isPhone('18112341234')).toBeTruthy();
  });
  it('12511007779', () => {
    expect(isPhone('12511007779')).toBeFalsy();
  });
});
