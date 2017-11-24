import parseQS from './parseQS';

describe('parseQS', () => {
  it('www.foreverz.cn', () => {
    expect(parseQS('www.foreverz.cn')).toEqual({});
  });
  it('www.foreverz.cn?qs=forever', () => {
    expect(parseQS('www.foreverz.cn?qs=forever')).toEqual({});
  });
});
