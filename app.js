const express = require('express');
const ip = require('ip');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  const URL = ip.address() + ':' + PORT;

  console.log(`Server is listening : ${URL}`);
});

const CONTROLLER_PATH = `./controller`;
const MainControllerPath = require(`${CONTROLLER_PATH}/MainController`);
const ApiControllerPath = require(`${CONTROLLER_PATH}/ApiController`);

app.use('/', MainControllerPath);
app.use('/api', ApiControllerPath);
