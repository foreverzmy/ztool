/**
 * @desc 金额小写转中文大写
 * @param {number} value - 需要转换的数字
 * @returns string | error
 */
const digitCaptial = (value: number): string => {
  if (isNaN(value)) {
    throw new Error('Not a Number');
  }
  const fraction = ['角', '分']; // 小于一元
  const digit = [
    '零', '壹', '贰', '叁', '肆',
    '伍', '陆', '柒', '捌', '玖'
  ];
  const unit = [
    ['元', '万', '亿'],
    ['', '拾', '佰', '仟']
  ];
  // 判断正负
  const head = value < 0 ? '负' : '';
  const abs = Math.abs(value);
  // 计算小数
  let decimal = '';
  for (let i = 0; i < fraction.length; i++) {
    decimal += (digit[Math.floor(abs * Math.pow(10, i + 1)) % 10] + fraction[i]).replace(/零./, '');
  }
  decimal = decimal || '整';
  // 计算整数
  let integer = Math.floor(abs);
  for (let i = 0; i < unit[0].length && integer > 0; i++) {
    let p = '';
    for (let j = 0; j < unit[1].length && integer > 0; j++) {
      p = digit[integer % 10] + unit[1][j] + p;
      integer = Math.floor(integer / 10);
    }
    decimal = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + decimal;
  }
  return head + decimal.replace(/(零.)*零元/, '元').replace(/(零.)+/g, '零')
    .replace(/^整$/, '零元整');
};

export default digitCaptial;
