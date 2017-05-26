export const 計算複製內容 = (綜合標音 = []) => {
  if (!綜合標音 || 綜合標音.length < 1) {
    return 綜合標音;
  }

  return 綜合標音
  .map((item) => {
    const 漢字 = item.漢字.replace(/ /g, '');
    return {
      漢字臺羅: [漢字, item.臺羅閏號調].join('\n'),
      臺羅: item.臺羅閏號調,
      漢字,
    };
  })
  .reduce((acc, item) => ({
    漢字臺羅: [acc.漢字臺羅, item.漢字臺羅].join('\n'),
    漢字: [acc.漢字, item.漢字].join('\n'),
    臺羅: [acc.臺羅, item.臺羅].join('\n'),
  }));
};
