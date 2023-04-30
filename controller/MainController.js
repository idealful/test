const express = require('express');
const router = express.Router();

const SERVICE_PATH = '../service';

const UTIL_PATH = '../util';
const LogUtil = require(`${UTIL_PATH}/LogUtil.js`);

const { selectMain } = require(`${SERVICE_PATH}/MainService.js`);

router.get('/', (req, res) => {
  LogUtil.log(`[CONTROLLER]: ${req.originalUrl}`);

  const response = selectMain(req);
  res.status(response.code).json(response);
});

module.exports = router;
