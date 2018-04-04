
import React, {StyleSheet} from 'react-native'

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
  
  export default styles;