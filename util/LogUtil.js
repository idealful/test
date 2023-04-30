const UTIL_PATH = './';
const DateUtil = require(`${UTIL_PATH}/DateUtil.js`);

module.exports = {
  log: (str) => {
    console.log(`${DateUtil.now()} ${str}`);
  },
};
