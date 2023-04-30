const membersData = [
  { seq: 1, id: 'test1', name: '테스트1' },
  { seq: 2, id: 'test2', name: '테스트2' },
  { seq: 3, id: 'test3', name: '테스트3' },
  { seq: 4, id: 'test4', name: '테스트4' },
  { seq: 5, id: 'test5', name: '테스트5' },
  { seq: 6, id: 'test6', name: '테스트6' },
  { seq: 7, id: 'test7', name: '테스트7' },
  { seq: 8, id: 'test8', name: '테스트8' },
  { seq: 9, id: 'test9', name: '테스트9' },
  { seq: 10, id: 'test10', name: '테스트10' },
  { seq: 11, id: 'test11', name: '테스트11' },
  { seq: 12, id: 'test12', name: '테스트12' },
  { seq: 13, id: 'test13', name: '테스트13' },
  { seq: 14, id: 'test14', name: '테스트14' },
  { seq: 15, id: 'test15', name: '테스트15' },
  { seq: 16, id: 'test16', name: '테스트16' },
  { seq: 17, id: 'test17', name: '테스트17' },
  { seq: 18, id: 'test18', name: '테스트18' },
  { seq: 19, id: 'test19', name: '테스트19' },
  { seq: 20, id: 'test20', name: '테스트20' },
  { seq: 21, id: 'test21', name: '테스트21' },
  { seq: 22, id: 'test22', name: '테스트22' },
  { seq: 23, id: 'test23', name: '테스트23' },
  { seq: 24, id: 'test24', name: '테스트24' },
  { seq: 25, id: 'test25', name: '테스트25' },
  { seq: 26, id: 'test26', name: '테스트26' },
  { seq: 27, id: 'test27', name: '테스트27' },
  { seq: 28, id: 'test28', name: '테스트28' },
  { seq: 29, id: 'test29', name: '테스트29' },
  { seq: 30, id: 'test30', name: '테스트30' },
  { seq: 31, id: 'test31', name: '테스트31' },
  { seq: 32, id: 'test32', name: '테스트32' },
  { seq: 33, id: 'test33', name: '테스트33' },
  { seq: 34, id: 'test34', name: '테스트34' },
  { seq: 35, id: 'test35', name: '테스트35' },
  { seq: 36, id: 'test36', name: '테스트36' },
  { seq: 37, id: 'test37', name: '테스트37' },
  { seq: 38, id: 'test38', name: '테스트38' },
  { seq: 39, id: 'test39', name: '테스트39' },
  { seq: 40, id: 'test40', name: '테스트40' },
  { seq: 41, id: 'test41', name: '테스트41' },
  { seq: 42, id: 'test42', name: '테스트42' },
  { seq: 43, id: 'test43', name: '테스트43' },
  { seq: 44, id: 'test44', name: '테스트44' },
  { seq: 45, id: 'test45', name: '테스트45' },
  { seq: 46, id: 'test46', name: '테스트46' },
  { seq: 47, id: 'test47', name: '테스트47' },
  { seq: 48, id: 'test48', name: '테스트48' },
  { seq: 49, id: 'test49', name: '테스트49' },
  { seq: 50, id: 'test50', name: '테스트50' },
  { seq: 51, id: 'test51', name: '테스트51' },
  { seq: 52, id: 'test52', name: '테스트52' },
  { seq: 53, id: 'test53', name: '테스트53' },
  { seq: 54, id: 'test54', name: '테스트54' },
  { seq: 55, id: 'test55', name: '테스트55' },
  { seq: 56, id: 'test56', name: '테스트56' },
  { seq: 57, id: 'test57', name: '테스트57' },
  { seq: 58, id: 'test58', name: '테스트58' },
  { seq: 59, id: 'test59', name: '테스트59' },
  { seq: 60, id: 'test60', name: '테스트60' },
  { seq: 61, id: 'test61', name: '테스트61' },
  { seq: 62, id: 'test62', name: '테스트62' },
  { seq: 63, id: 'test63', name: '테스트63' },
  { seq: 64, id: 'test64', name: '테스트64' },
  { seq: 65, id: 'test65', name: '테스트65' },
  { seq: 66, id: 'test66', name: '테스트66' },
  { seq: 67, id: 'test67', name: '테스트67' },
  { seq: 68, id: 'test68', name: '테스트68' },
  { seq: 69, id: 'test69', name: '테스트69' },
  { seq: 70, id: 'test70', name: '테스트70' },
  { seq: 71, id: 'test71', name: '테스트71' },
  { seq: 72, id: 'test72', name: '테스트72' },
  { seq: 73, id: 'test73', name: '테스트73' },
  { seq: 74, id: 'test74', name: '테스트74' },
  { seq: 75, id: 'test75', name: '테스트75' },
  { seq: 76, id: 'test76', name: '테스트76' },
  { seq: 77, id: 'test77', name: '테스트77' },
  { seq: 78, id: 'test78', name: '테스트78' },
  { seq: 79, id: 'test79', name: '테스트79' },
  { seq: 80, id: 'test80', name: '테스트80' },
  { seq: 81, id: 'test81', name: '테스트81' },
  { seq: 82, id: 'test82', name: '테스트82' },
  { seq: 83, id: 'test83', name: '테스트83' },
  { seq: 84, id: 'test84', name: '테스트84' },
  { seq: 85, id: 'test85', name: '테스트85' },
  { seq: 86, id: 'test86', name: '테스트86' },
  { seq: 87, id: 'test87', name: '테스트87' },
  { seq: 88, id: 'test88', name: '테스트88' },
  { seq: 89, id: 'test89', name: '테스트89' },
  { seq: 90, id: 'test90', name: '테스트90' },
  { seq: 91, id: 'test91', name: '테스트91' },
  { seq: 92, id: 'test92', name: '테스트92' },
  { seq: 93, id: 'test93', name: '테스트93' },
  { seq: 94, id: 'test94', name: '테스트94' },
  { seq: 95, id: 'test95', name: '테스트95' },
  { seq: 96, id: 'test96', name: '테스트96' },
  { seq: 97, id: 'test97', name: '테스트97' },
  { seq: 98, id: 'test98', name: '테스트98' },
  { seq: 99, id: 'test99', name: '테스트99' },
  { seq: 100, id: 'test100', name: '테스트100' },
  { seq: 101, id: 'test101', name: '테스트101' },
  { seq: 102, id: 'test102', name: '테스트102' },
  { seq: 103, id: 'test103', name: '테스트103' },
  { seq: 104, id: 'test104', name: '테스트104' },
  { seq: 105, id: 'test105', name: '테스트105' },
  { seq: 106, id: 'test106', name: '테스트106' },
  { seq: 107, id: 'test107', name: '테스트107' },
  { seq: 108, id: 'test108', name: '테스트108' },
  { seq: 109, id: 'test109', name: '테스트109' },
  { seq: 110, id: 'test110', name: '테스트110' },
  { seq: 111, id: 'test111', name: '테스트111' },
];

const UTIL_PATH = '../util';
const HttpUtil = require(`${UTIL_PATH}/HttpUtil.js`);
const LogUtil = require(`${UTIL_PATH}/LogUtil.js`);

const service = {
  selectApiMembersList: () => {
    LogUtil.log('[SERVICE]: ' + 'selectApiMembersList');
    let response = {};

    try {
      const resultData = membersData;

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
  selectApiMembersItem: (paramSeq) => {
    LogUtil.log('[SERVICE]: ' + 'selectApiMembersItem');
    let response = {};

    try {
      let resultData = membersData;

      if (isNaN(Number(paramSeq))) {
        response = HttpUtil.R002;
        return response;
      }

      resultData = resultData.filter((item) => item.seq === Number(paramSeq));

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
