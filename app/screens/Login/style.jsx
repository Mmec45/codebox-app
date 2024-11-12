import { StyleSheet } from "react-native";
import Colors from "@/constants/Colors";    

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 400,
      objectFit:'cover'
    },
    viewContainer: {
      padding: 10
    },
    textHeader:{
      fontSize: 45,
      fontWeight:'bold'
    },
    textContainer:{
      color: Colors.PRIMARY
    },
    textContainerSide:{
      fontSize: 17,
      marginTop: 5,
      color: Colors.GRAY
    },
    button:{
      padding: 15,
      backgroundColor:Colors.PRIMARY,
      borderRadius: 50,
      marginTop: 10
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