import {  View } from "react-native";
import { createContext, useEffect, useState } from "react";
import { client } from "@/constants/KindeConfig";

import LoginScreen from "./screens/Login";
import styles from "./styles";
import TabNav from "./navigators/tabNav";

export const AuthContext = createContext();

export default function Index() {

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    checkAuthenticate();
  }, [auth]);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
       setAuth(true)
      // Need to implement, e.g: call an api, etc...
    } else {
      setAuth(false)
    }
  };
  
  
  return (
    <View style={styles.container}>
        <AuthContext.Provider value={{auth, setAuth}}> 
          {auth?<TabNav/>:<LoginScreen/>}
        </AuthContext.Provider>
    </View>
  );
}
