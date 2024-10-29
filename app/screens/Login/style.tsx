import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";    

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 400,
      objectFit:'cover'
    },
    viewContainer: {
      padding: 20
    },
    textHeader:{
      fontSize: 45,
      fontWeight:'bold'
    },
    textContainer:{
      color: Colors.PRIMARY
    },
    textContainerSide:{
      fontSize: 20,
      marginTop: 7,
      color: Colors.GRAY
    },
    button:{
      padding: 15,
      backgroundColor:Colors.PRIMARY,
      borderRadius: 99,
      marginTop: 60
    },
    textSign:{
      textAlign:'center',
      color: Colors.WHITE,
      fontSize: 20
    },
    textAccount:{
      marginTop: 10,
      color: Colors.PRIMARY,
      textAlign: 'center',
      fontSize: 16
    }
});

export default styles