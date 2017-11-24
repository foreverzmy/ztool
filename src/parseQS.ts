const parseQS = (url: string) => {
  const qs = (url.split('?'))[1];
  if (!qs) {
    return {};
  }
  return JSON.parse(`{${decodeURIComponent(qs).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}}`);
};

export default parseQS;
