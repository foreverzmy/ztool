import arrayEqual from './arrayEqual';

describe('arrayEqual:', () => {
  it('should be return true.', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [1, 2, 3, 4, 5];
    expect(arrayEqual(arr1, arr2)).toBe(true);
  });
  it('should be return false.', () => {
    const arr1 = [1, 2];
    const arr2 = [1, 2, 3];
    expect(arrayEqual(arr1, arr2)).toBe(false);
  });
});
