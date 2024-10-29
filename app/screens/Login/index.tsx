import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const LoginScreen = () => {



  return (
    <View>
      <ImageBackground
        source={require('./../../../assets/images/auth/imageLogin.png')}
        style={styles.image}
      />
      <View
       style={styles.viewContainer}
      >
        <Text style={styles.textHeader} >Welcome To   
          <Text style={styles.textContainer}> CodeBox </Text></Text>
        <Text style={styles.textContainerSide}>Learn Programming to buid Real Live Projects </Text>


            {/* SignIn Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={()=>console.log("click Sign in")}
        >
          <Text style={styles.textSign}>Sign In</Text>
        </TouchableOpacity>  
        <TouchableOpacity
         onPress={()=>console.log("click New Account")}
        >
          <Text style={styles.textAccount}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen;