import stringfyQS from './stringfyQS';

describe('stringfyQS', () => {
  it('{a:b}', () => {
    const obj = { a: 'b' };
    expect(stringfyQS(obj)).toBe('a=b');
  });
  it('{a:"b",c:"d"}', () => {
    const obj = { a: 'b', c: 'd' };
    expect(stringfyQS(obj)).toBe('a=b&c=d');
  });
  it('{a:"b",c:"d",e:["f","g"]}', () => {
    const obj = { a: 'b', c: 'd', e: ['f', 'g'] };
    expect(stringfyQS(obj)).toBe('a=b&c=d&e0=f&e1=g');
  });
});
