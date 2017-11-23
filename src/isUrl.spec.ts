import isUrl from './isUrl';

describe('isUrl', () => {
  it('forevez.cn', () => {
    expect(isUrl('foreverz.cn')).toBeTruthy();
  });
  it('www.forevez.cn', () => {
    expect(isUrl('www.foreverz.cn')).toBeTruthy();
  });
  it('http.forevez.cn', () => {
    expect(isUrl('http.foreverz.cn')).toBeTruthy();
  });
  it('https.forevez.cn', () => {
    expect(isUrl('https.foreverz.cn')).toBeTruthy();
  });
});
