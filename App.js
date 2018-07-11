import React from 'react';
import { StyleSheet, Text, View , Dimensions, Platform } from 'react-native';
import ScreenShow from './app/config/router';

export default class App extends React.Component {

  render() {
    return (
      <View style={{flex:1}}>
        {Platform.OS==='android' && (
        <View style={{
          height : Expo.Constants.statusBarHeight,
          backgroundColor : 'black',
        }} />
        )}
       <ScreenShow/>       
      </View>
      
    );
  }
}

