import randomNum from './randomNum';

describe('randomNum', () => {
  it('1-10', () => {
    expect(randomNum(1, 10)).toBeGreaterThanOrEqual(1);
    expect(randomNum(1, 10)).toBeLessThanOrEqual(10);
  });
  it('10-15', () => {
    expect(randomNum(10, 15)).toBeGreaterThanOrEqual(10);
    expect(randomNum(10, 15)).toBeLessThanOrEqual(15);
  });
});
