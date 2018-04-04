import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";

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

const styles = StyleSheet.create({
  Viewmain: {
    backgroundColor: "rgb(133,201,197)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  InputEmail: {
    width: 360,
    borderColor: "rgb(133,201,197)",
    borderWidth: 1,
    shadowColor: "rgb(133,201,197)",
    color: "white"
    // fontStyle: "HelveticaNeue"
  },
  InputPassword: {
    width: 360,
    borderColor: "rgb(133,201,197)",
    borderWidth: 1,
    shadowColor: "rgb(133,201,197)",
    marginTop: "3%",
    color: "white"
  },
  TouchableOpacity_Login: {
    backgroundColor: "white",
    width: 360,
    height: 54,
    marginTop: "8%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 27,
    //flex:2,
  },
  Text_Login:{
    fontSize: 20,
    color: "rgb(133,201,197)",
    fontFamily: 'HelveticaNeue',
  },
  TouchableOpacity_Signup: {
    marginTop: "8%"
  },
  Text_Signup:{
    fontSize: 20,
    color: "white",
    fontFamily: 'HelveticaNeue',
  },
});
