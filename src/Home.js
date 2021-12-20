import React, {useEffect} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import XLSX from 'xlsx';
import {writeFile, readFile} from 'react-native-fs';
import RNFS from 'react-native-fs';

export default Home = () => {
  readFile('../src/excel/130001_evacuation_area.csv', 'ascii').then(res => {
    console.log(res);
    const workbook = XLSX.read(res, {type: 'binary'});
    /* DO SOMETHING WITH workbook HERE */
  });

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../src/asset/christmas-2021.png')}>
        <Text style={{fontSize: 25, color: '#ff89'}}>Merry Christmas</Text>
      </ImageBackground>
    </View>
  );
};
