/**
 * @desc   判断是否为 URL 地址
 * @param  {string} url - 链接地址
 * @return {boolean}
 */
const isUrl = (url: string) => {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(url);
};

export default isUrl;
