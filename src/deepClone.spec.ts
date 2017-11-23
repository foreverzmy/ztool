import deepClone from './deepClone';

describe('deepClone', () => {
  it('null.', () => {
    expect(deepClone(null)).toBe(null);
  });
  it('undefined.', () => {
    let x;
    expect(deepClone(x)).toBe(undefined);
  });
  it('true.', () => {
    expect(deepClone(true)).toBe(true);
  });
  it('false.', () => {
    expect(deepClone(false)).toBe(false);
  });
  it('array', () => {
    let arr = [1, 2, 3, 4, [1, 2, 3, 4]];
    expect(deepClone(arr)).toEqual(arr);
  });
  it('object', () => {
    let obj = { a: 'a', b: { c: 'c' } };
    expect(deepClone(obj)).toEqual(obj);
  });
});
