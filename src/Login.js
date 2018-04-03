import React, { Component } from 'react';
import {  View, Text, StyleSheet,Image, Dimensions} from 'react-native';

const {width,height} = Dimensions.get('screen');

export default class Login extends Component {
  render() {
    return (
      <View style = {styles.View_background}>
        <Image style={styles.centerImage} source={require('../img/iconUser/iconUser.png')} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  View_background:{
    backgroundColor: "rgb(133,201,197)",
    flex: 1,
    // alignItems: 'center',
  },
  centerImage :{
    alignSelf: 'center',
    marginTop: "15%",
  }
})