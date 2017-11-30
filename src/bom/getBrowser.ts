
interface RegObj {
  [key: string]: RegExp;
}

const getBrowser = () => {
  const ua = navigator.userAgent.toLowerCase();

  const regs: RegObj = {
    IE: /(rv:([\d.]+)\) like gecko)|(msie ([\d\.]+))/,
    EDGE: /edge\/([\d\.]+)/,
    Firefox: /firefox\/([\d\.]+)/,
    Opera: /(?:opera|opr).([\d\.]+)/,
    Chrome: /chrome\/([\d\.]+)/,
    Safari: /version\/([\d\.]+).*safari/
  };

  for (const key in regs) {
    const version = ua.match(regs[key]);
    if (version !== null) {
      return `${key}: ${version[1]}`;
    }
  }

};

export default getBrowser;
