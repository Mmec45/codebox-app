import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import styles from './style'
import { client } from '@/constants/KindeConfig';
import { AuthContext } from '@/app';

const Home = () => {
  
  const {auth, setAuth} = useContext(AuthContext)

  const handleLogout = async() => {
    const logoutOut = await client.logout();
    if (logoutOut) {
      setAuth(false);
      // user was logged out
    }
  };


  return (
    <View>
      <Text>Home</Text>
      <Button title='Logout' onPress={handleLogout}/>
    </View>
  )
}

export default Home