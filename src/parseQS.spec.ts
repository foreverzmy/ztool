import parseQS from './parseQS';

describe('parseQS', () => {
  it('www.foreverz.cn', () => {
    expect(parseQS('www.foreverz.cn')).toEqual({});
  });
  it('www.foreverz.cn?a=b', () => {
    expect(parseQS('www.foreverz.cn?a=b')).toEqual({ a: 'b' });
  });
  it('https://www.foreverz.cn?a=b&c=d', () => {
    expect(parseQS('https://www.foreverz.cn?a=b&c=d')).toEqual({ a: 'b', c: 'd' });
  });
  it('https://www.foreverz.cn?a=b&c=d#e', () => {
    expect(parseQS('https://www.foreverz.cn?a=b&c=d')).toEqual({ a: 'b', c: 'd' });
  });
});
