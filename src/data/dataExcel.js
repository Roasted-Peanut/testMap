const readXlsxFile = require('read-excel-file/node');
const XLSX = require('xlsx');

export const readXlsxFile = () => {
  readXlsxFile(require('/src/excel/130001_evacuation_area.xlsx')).then(res => {
    const arrayKey = res[0];
    console.log(arrayKey);
    const result = [];
    res.forEach((item, index) => {
      let object = {};
      if (index !== 0) {
        arrayKey.forEach((subItem, subIndex) => {
          // console.log('dsdsa', object);
          // object = {...object, [subItem]: item[subIndex]};
          object = {
            ...object,
            [`col${subIndex}`]: {label: [subItem], value: item[subIndex]},
          };
        });
        result.push(object);
      }
      console.log(result);
      return result;
    });
  });
};
