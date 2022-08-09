import CryptoJS from 'crypto-js';
/* eslint-disable @typescript-eslint/no-explicit-any */

const md5FromFile = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = fileEvent => {
      const binary = CryptoJS.lib.WordArray.create(fileEvent.target.result);
      const md5 = CryptoJS.MD5(binary);
      resolve(md5);
    };
    /* eslint-disable prefer-promise-reject-errors */
    reader.onerror = () => {
      reject('oops, something went wrong with the file reader.');
    };

    reader.readAsArrayBuffer(file);
  });

const fileChecksum = async file => {
  const md5 = await md5FromFile(file);
  return md5.toString(CryptoJS.enc.Base64);
};

export default fileChecksum;
