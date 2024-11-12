import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from './style'
import { client } from '@/constants/KindeConfig'
import { AuthContext } from '@/app'

const LoginScreen = () => {
  
  const {auth,setAuth} = useContext(AuthContext);

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      console.log("Authenticated Successfully!!!")
      setAuth(true);
    }
  };

  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      console.log("Register Successfully!!!")
      setAuth(true)
    }
  };

  const handleLogout = async() => {
    const logoutOut = await client.logout();
    if (logoutOut) {
      // user was logged out
    }
  };

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
          onPress={handleSignIn}
        >
          <Text style={styles.textSign}>Sign In</Text>
        </TouchableOpacity>  

          {/* SignUp Button */}
        <TouchableOpacity
         onPress={handleSignUp}
        >
          <Text style={styles.textAccount}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen;