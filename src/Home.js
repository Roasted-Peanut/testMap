import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import XLSX from 'xlsx';
import { writeFile, readFile } from 'react-native-fs';
import FileAsset from 'react-native-file-asset';

export default Home = () => {
  const [results, setResults] = useState([])
  useEffect(() => {
    getDataExcel()
  })
  const getDataExcel = () => {
    //read file path android/src/main/assets
    FileAsset.loadFilePath('130001_evacuation_area', 'xlsx')
      .then((filePath) => {
        readFile(filePath, 'ascii').then((res) => {
          const workbook = XLSX.read(res, { type: "binary" });
          //convert dATA workbook to array
          var first_worksheet = workbook.Sheets[workbook.SheetNames[0]];
          //covert to Json
          var data = XLSX.utils.sheet_to_json(first_worksheet, { header: 1 });
          const arrayKey = data[0];
          const result = [];
          data.forEach((item, index) => {
            let object = {}
            if (index !== 0) {
              arrayKey.forEach((subItem, subIndex) => {
                object = { ...object, [`col${subIndex}`]: { label: subItem, value: item[subIndex] } }
              })
              result.push(object)
            }
            return result,
            setResults(result)
          })
        });
      })
      .catch((error) => {
        console.log('load file path error', error);
      });
  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        source={require('../src/assets/christmas-2021.png')}>
        <Text style={{ fontSize: 25, color: '#ff89' }}>Merry Christmas</Text>
      </ImageBackground>
    </View>
  );
};
