import isEmpty from './isEmpty';

describe('isEmpty', () => {
  it('null.', () => {
    expect(isEmpty(null)).toBe(true);
  });
  it('undefined.', () => {
    let x;
    expect(isEmpty(x)).toBe(true);
  });
  it('true.', () => {
    expect(isEmpty(true)).toBe(false);
  });
  it('false.', () => {
    expect(isEmpty(false)).toBe(false);
  });
  it('array empty.', () => {
    expect(isEmpty([])).toBe(true);
  });
  it('array not empty.', () => {
    expect(isEmpty([1])).toBe(false);
  });
  it('object emoty.', () => {
    expect(isEmpty({})).toBe(true);
  });
  it('object not emoty.', () => {
    expect(isEmpty({ a: 'a' })).toBe(false);
  });
});
