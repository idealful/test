const express = require('express');
const router = express.Router();

const SERVICE_PATH = '../service';

const {
  selectApiMembersList,
  selectApiMembersItem,
  insertApiMember,
  updateApiMember,
  deleteApiMember,
} = require(`${SERVICE_PATH}/ApiService.js`);

router.get('/members', (req, res) => {
  console.log(req.originalUrl);

  let response = {};
  try {
    const resultData = selectApiMembersList();

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

router.get('/members/:seq', (req, res) => {
  console.log(req.originalUrl);

  let response = {};

  const paramSeq = Number(req.params.seq);
  if (paramSeq === NaN) {
    response.resultCode = 204; // No Content
    response.resultMessage = '성공';
    res.status(200).json(response);
  }

  try {
    const resultData = selectApiMembersItem(paramSeq);

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
