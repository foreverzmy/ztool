/**
 * @desc QueryString 转对象
 * @param {{ [key: string]: any }} - 需要转换的字符串
 * @returns {object} - 转换的结果对象
 */
const parseQS = (url: string) => {
  const qs = (url.split('?'))[1];
  if (!qs) {
    return {};
  }
  return JSON.parse(`{"${decodeURIComponent(qs).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);
};

export default parseQS;
