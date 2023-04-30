const express = require('express');
const router = express.Router();

const os = require('os');

router.get('/', (req, res) => {
  console.log(req.originalUrl);

  let response = {};
  try {
    const resultData = { userAgent: req.headers['user-agent'], hostname: os.hostname() };

    response.resultCode = 200; // OK
    if (!resultData) {
      response.resultCode = 204; // No Content
    }
    response.resultMessage = '성공';
    response.resultData = resultData;

    console.log(JSON.stringify(response));
  } catch (error) {
    response.resultCode = 500; // Internal Server Error
    response.resultMessage = '에러가 발생했습니다. 관리자에게 문의하세요.';
    response.resultData = null;

    console.log('[ERROR]', JSON.stringify(error?.toString()));
  } finally {
    res.status(200).json(response);
  }
});

module.exports = router;
