import isCardId from './isCardId';

describe('isCardId', () => {
  it('320623199411231878', () => {
    expect(isCardId('320623199411231878')).toBeTruthy();
  });
  it('32110119840705956X', () => {
    expect(isCardId('32110119840705956X')).toBeTruthy();
  });
  it('32062319941121878', () => {
    expect(isCardId('32062319941121878')).toBeFalsy();
  });
  it('321101198407059556X', () => {
    expect(isCardId('321101198407059556X')).toBeFalsy();
  });
});
