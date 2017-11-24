const stringfyQS = (obj: { [key: string]: any }) => {
  if (typeof obj !== 'object') {
    return '';
  }
  let pairs = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];

      if (value instanceof Array) {
        for (let i = 0; i < value.length; i++) {
          pairs.push(encodeURIComponent(`${key}${i}`) + '=' + encodeURIComponent(`${value[i]}`));
        }
      } else {
        pairs.push(encodeURIComponent(`${key}`) + '=' + encodeURIComponent(`${value}`));
      }
    }
  }
  return pairs.join('&');

};

export default stringfyQS;
