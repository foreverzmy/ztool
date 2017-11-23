import digitCapital from './digitCapital';

describe('digitCapital', () => {
  it('128.', () => {
    expect(digitCapital(128)).toBe('壹佰贰拾捌元整');
  });
  it('123456789.123', () => {
    expect(digitCapital(123456789.123)).toBe('壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分');
  });
  it('-123456789.123', () => {
    expect(digitCapital(-123456789.123)).toBe('负壹亿贰仟叁佰肆拾伍万陆仟柒佰捌拾玖元壹角贰分');
  });
});
