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
  res.status(response.code).json(response);
});

router.get('/members/:seq', (req, res) => {
  console.log(`[CONTROLLER]: ${req.originalUrl}`);

  const paramSeq = req.params.seq;

  const response = selectApiMembersItem(paramSeq);
  res.status(response.code).json(response);
});

module.exports = router;
