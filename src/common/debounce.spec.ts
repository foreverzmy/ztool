import debounce from './debounce';

describe('debounce:', () => {
  let timerCallback: jasmine.Spy;

  beforeEach(() => {
    timerCallback = jasmine.createSpy('timerCallback');
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });

  it('common', () => {
    let a = 0;
    const fun = debounce((arg: any) => {
      a += arg;
      timerCallback();
    }, 1000);
    for (let i = 0; i < 10; i++) {
      fun(i);
    }
    expect(timerCallback).not.toHaveBeenCalled();
    jasmine.clock().tick(1001);
    expect(timerCallback).toHaveBeenCalled();
    expect(a).toBe(9);
  });

  it('interval', () => {
    let a = 0;
    const fun = debounce((arg: any) => {
      a += arg;
      jasmine.clock().tick(501);
    }, 1000);
    let i = 0;
    const timer = setInterval(() => {
      fun(i);
      i++;
      timerCallback();
      if (i === 10) {
        clearInterval(timer);
      }
    }, 500);
    expect(timerCallback).not.toHaveBeenCalled();
    for (let i = 0; i < 10; i++) {
      jasmine.clock().tick(501);
    }
    jasmine.clock().tick(1001);
    expect(timerCallback.calls.count()).toEqual(10);
    expect(a).toBe(9);
  });
});
