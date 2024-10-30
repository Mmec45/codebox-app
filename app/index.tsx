import {  View , StyleSheet} from "react-native";
import LoginScreen from "./screens/Login";
import { useEffect } from "react";
import { client } from "@/constants/KindeConfig";


export default function Index() {


  useEffect(() => {
    checkAuthenticate();
  }, []);

  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
       console.log(userProfile);
       console.log("Authenticate!!!")
      // Need to implement, e.g: call an api, etc...
    } else {
      // Need to implement, e.g: redirect user to sign in, etc..
    }
  };
  

  
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})