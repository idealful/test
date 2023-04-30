const express = require('express');
const router = express.Router();

const SERVICE_PATH = '../service';

const { selectMain } = require(`${SERVICE_PATH}/MainService.js`);

router.get('/', (req, res) => {
  console.log(`[CONTROLLER]: ${req.originalUrl}`);

  const response = selectMain(req);
  res.status(response.code).json(response);
});

module.exports = router;
