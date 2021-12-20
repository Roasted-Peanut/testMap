import React, {useState, useEffect} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import Home from './src/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';

export default App = () => {
  // useEffect(()=>{
  //   checkPermission()

  // })

  //   //Step 1: check permission for Service
  //     const checkPermission=async() =>{
  //     const enabled = await firebase.messaging().hasPermission();
  //     console.log("checkPermission",enabled);
  //     if (enabled) {
  //       getToken();
  //     }
  //     else {
  //       requestPermission();
  //     }
  //   }

  //     //Step 2: if not has permission -> process request
  // const requestPermission = async()=> {
  //   try {
  //     await firebase.messaging().requestPermission();
  //     // User has authorised
  //     getToken();
  //   } catch (error) {
  //     // User has rejected permissions
  //     console.log('quyền bị từ chối');
  //   }
  // }

  //   //Step 3: if has permission -> process get Token
  //   const getToken= async()=> {
  //     let fcmToken = await AsyncStorage.getItem('fcmToken');
  //     console.log("token",fcmToken);
  //     if (!fcmToken) {
  //       fcmToken = await firebase.messaging().getToken();
  //       console.log('token = ', fcmToken);
  //       if (fcmToken) {
  //         // user has a device token
  //         await AsyncStorage.setItem('fcmToken', fcmToken);
  //       }
  //     }
  //   }

  return (
    <View style={{flex: 1}}>
      <Home />
    </View>
  );
};
