const express = require('express');
const ip = require('ip');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const UTIL_PATH = './util';
const LogUtil = require(`${UTIL_PATH}/LogUtil.js`);

app.listen(PORT, () => {
  const URL = ip.address() + ':' + PORT;

  LogUtil.log(`Server is listening : ${URL}`);
});

app.all('/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

const CONTROLLER_PATH = `./controller`;
const MainControllerPath = require(`${CONTROLLER_PATH}/MainController`);
const ApiControllerPath = require(`${CONTROLLER_PATH}/ApiController`);

app.use('/', MainControllerPath);
app.use('/api', ApiControllerPath);
