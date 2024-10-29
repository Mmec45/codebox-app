import {  View , StyleSheet} from "react-native";
import LoginScreen from "./screens/Login";


export default function Index() {
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