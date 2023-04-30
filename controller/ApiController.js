const express = require('express');
const router = express.Router();

const SERVICE_PATH = '../service';

const {
  selectApiMembersList,
  selectApiMembersItem,
  insertApiMembersItem,
  updateApiMembersItem,
  deleteApiMembersItem,
} = require(`${SERVICE_PATH}/ApiService.js`);

router.get('/members', (req, res) => {
  console.log(`[CONTROLLER]: ${req.originalUrl}`);

  const response = selectApiMembersList();
  res.status(200).json(response);
});

router.get('/members/:seq', (req, res) => {
  console.log(`[CONTROLLER]: ${req.originalUrl}`);

  let response = {};

  const paramSeq = Number(req.params.seq);
  if (paramSeq === NaN) {
    response.resultCode = 204; // No Content
    response.resultMessage = '성공';
    res.status(200).json(response);
  }

  response = selectApiMembersItem(paramSeq);
  res.status(200).json(response);
});

module.exports = router;
