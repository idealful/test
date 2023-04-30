const resultData = [
  {
    seq: 1,
    id: 'rewerewe113',
    name: 'Kate',
    favor: ['떡볶이', '커피', '여행'],
  },
  {
    seq: 2,
    id: 'idealful',
    name: 'Eddy',
    favor: ['오렌지', '햄버거', '비디오게임'],
  },
];

const service = {
  selectApiMembersList: () => {
    let result = resultData;
    return result;
  },
  selectApiMembersItem: (paramSeq) => {
    let result = resultData.filter((item) => item.seq === paramSeq);
    return result;
  },
};

module.exports = service;
