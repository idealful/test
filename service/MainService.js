const os = require('os');

const UTIL_PATH = '../util';
const HttpUtil = require(`${UTIL_PATH}/HttpUtil.js`);
const LogUtil = require(`${UTIL_PATH}/LogUtil.js`);

const service = {
  selectMain: (req) => {
    LogUtil.log('[SERVICE]: ' + 'selectMain');
    let response = {};

    try {
      let resultData = { userAgent: req.headers['user-agent'], hostname: os.hostname() };

      response = { ...HttpUtil.R000, data: resultData };
      if (resultData?.length < 1) {
        response = HttpUtil.R001;
      }

      LogUtil.log(JSON.stringify(response));
    } catch (error) {
      response = HttpUtil.R003;

      LogUtil.log('[ERROR]', JSON.stringify(error?.toString()));
    } finally {
      return response;
    }
  },
};

module.exports = service;
