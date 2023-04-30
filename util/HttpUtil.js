const util = {
  R000: { code: 200, key: 'OK', message: '성공', data: null },
  R001: { code: 204, key: 'No Content', message: '결과 없음', data: null },
  R002: { code: 404, key: 'Bad Request', message: '잘못된 요청', data: null },
  R003: { code: 500, key: 'Internal Server Error', message: '서버 내부 에러', data: null },
};

module.exports = util;
