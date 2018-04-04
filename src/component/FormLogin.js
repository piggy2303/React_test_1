import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

import styles from './FormLoginStyle';

export default class formLogin extends Component {
  render() {
    return (
      <View style={styles.Viewmain}>
        <TextInput
          style={styles.InputEmail}
          placeholder="Email"
          placeholderTextColor="white"
          underlineColorAndroid="white"
        />
        <TextInput
          style={styles.InputPassword}
          placeholder="Password"
          placeholderTextColor="white"
          underlineColorAndroid="white"
        />

        <TouchableOpacity style={styles.TouchableOpacity_Login}>
          <Text style={styles.Text_Login}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.TouchableOpacity_Signup}>
          <Text style={styles.Text_Signup}>Sign-up</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
